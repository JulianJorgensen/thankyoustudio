import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import { Formik } from 'formik';
import DefaultPage from 'layout/components/DefaultPage';
import ContactForm from 'components/ContactForm';
import { breakpoint, LAYOUT } from 'utils/variables';

const Content = styled.div`
  display: flex;
  padding: 60px 40px 0;
`

const SuccessMessage = styled.div`
  display: none;
  color: green;

  ${props => props.show && `
    display: block;
  `}
`

@connect()
export default class Ventures extends Component {
  constructor() {
    super();

    this.handleContact = this.handleContact.bind(this);
    this.state = {};
  }

  async handleContact(values, actions) {
    await fetch('/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        template: 'default',
        from: values.email,
        ...values,
      })
    });

    this.setState({
      success: true
    });

    actions.setSubmitting(false);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoaded: true
      });
    }, 200);
  }

  render() {
    const { success } = this.state;

    return (
      <DefaultPage title="Ventures" {...this.props}>
        <Content>
            <Formik
                initialValues={{
                  name: '',
                  email: '',
                  phone: '',
                  subject: '',
                  message: '',
                }}
                onSubmit={this.handleContact}
                component={ContactForm}
              />
              <SuccessMessage show={success}>
                Your message has been sent. Thanks for reaching out!<br /> We’ll get back to you as soon as possible.
              </SuccessMessage>
        </Content>
      </DefaultPage>
    )
  }
}