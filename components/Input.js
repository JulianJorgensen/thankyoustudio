import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from 'utils/variables';

const Wrapper = styled.div`
  position: relative;
  padding-top: 10px;

  &:before {
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    pointer-events: none;
  }

  &:after {
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
    border-bottom: 3px solid white;
    pointer-events: none;
  }

  ${props => props.disabled && `
    opacity: 0.5 !important;
  `}

  ${props => props.isFocused && `
    &:after {
      transform: scaleX(1);
    }
  `}
`

const InputStyles = `
  font: inherit;
  border: 0;
  margin: 8px 0 0 0;
  padding: 10px 10px 12px;
  display: block;
  min-width: 0;
  flex-grow: 1;
  box-sizing: content-box;
  background: none;
  -webkit-tap-highlight-color: transparent;
  background-color: white;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: 0;
  }
`

const InputElement = styled.input`
  ${InputStyles}
`

const TextareaElement = styled.textarea`
    ${InputStyles}
`

const Label = styled.label`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  font-size: 16px;
`

export default class Input extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange() {
    this.setState({
      isFocused: !this.state.isFocused
    });
  }

  render() {
    const { className, label, name, ...props } = this.props;

    const renderElement = () => {
      if (this.props.multiline) return (
        <TextareaElement
          name={name}
          {...props}
        />
      )

      return (
        <InputElement
          name={name}
          {...props}
        />
      )
    };

    return (
      <Wrapper
        {...this.state}
        onFocus={this.handleOnChange}
        onBlur={this.handleOnChange}
        className={className}
        disabled={props.disabled}
      >
        <Label htmlFor={name}>{label}</Label>
        {renderElement()}
      </Wrapper>  
    )
  }
}
