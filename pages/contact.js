import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import fetch from 'isomorphic-unfetch';
import { Formik } from 'formik';
import DefaultPage from 'layout/components/DefaultPage';
import Locations from 'components/Locations';
import ContactForm from 'components/ContactForm';
import { breakpoint, LAYOUT } from 'utils/variables';

const Content = styled.div`
  display: flex;
`

const StyledLocations = styled(Locations)`
  margin-bottom: 100px;
`

const Form = styled.div`
  width: 50%;
`

const SuccessMessage = styled.div`
  display: none;
  color: green;

  ${props => props.show && `
    display: block;
  `}
`

@connect()
export default class Contact extends Component {
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
    const { isLoaded, success } = this.state;

    return (
      <DefaultPage whiteContent title="Contact" {...this.props}>
        <Content>
          <Form>
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
          </Form>

          <StyledLocations />
        </Content>
        <h3>Thinking of joining?</h3>
        <p>We collaborate with smart, creative makers.<br />Your ideas and energy shape our culture and you’ll thrive in an environment that values great work and having fun.<br /><a href="mailto:jobs@thankyoustudio.com">jobs@thankyoustudio.com</a></p>
      </DefaultPage>
    )
  }
}