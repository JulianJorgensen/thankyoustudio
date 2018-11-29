import React from 'react';
import styled from 'styled-components';
import Cta from 'components/Cta';
import Input from 'components/Input';

const Form = styled.form`
  width: 100%;
`

const StyledInput = styled(Input)`
  margin-bottom: 20px;
`

export default({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <Form onSubmit={handleSubmit}>
    <StyledInput
      type="text"
      name="name"
      onChange={handleChange}
      onBlur={handleBlur}
      label="Name"
      disabled={isSubmitting}
    />
    {touched.name && errors.name && <div>{errors.name}</div>}
    <StyledInput
      type="email"
      name="email"
      onChange={handleChange}
      onBlur={handleBlur}
      label="Email"
      disabled={isSubmitting}
    />
    {touched.email && errors.email && <div>{errors.email}</div>}
    <StyledInput
      multiline
      rows={10}
      label="Message"
      name="message"
      onChange={handleChange}
      disabled={isSubmitting}
    />
    {touched.message && errors.message && <div>{errors.message}</div>}
    <Cta type="submit" label={isSubmitting ? 'Sending...' : 'Contact'} onClick={handleSubmit} disabled={isSubmitting} primary />
  </Form>
);
