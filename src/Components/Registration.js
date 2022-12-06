import { useFormik } from 'formik'
import styled from 'styled-components'
import React, { Component } from 'react'
import * as yup from 'yup'
import { useState } from 'react'
import axios from 'axios'
import {
  Container,
  Card,
  InputStyle,
  InputDiv,
  ButtonStyle,
  ErrorStyled,
} from './RegistrationStyled'

const basicSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup
    .string()
    .required('Email is required')
    .email('Email is invalid'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Number and One Special Case Character'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('You must confirm the password'),
})

export const Registration = ({ className }) => {
  
  const [succes, setSucces] = useState(false)
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: basicSchema,
    onSubmit: (values) => {
      const response = axios
        .post('http://localhost:8002/users', values)
        .catch((err) => console.log(err))
      if (response) {
        setSucces(true)
      }
    },
  })

  return (
    <Container className={className}>
      <Card>
        <h1>Registration</h1>
        <form onSubmit={handleSubmit}>
          <InputDiv>
            <label htmlFor='firstName'>First Name</label>
            <InputStyle
              borderStyled={errors.name && touched.name ? 'red' : 'black'}
              id='firstName'
              name='firstName'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              className={
                errors.firstName && touched.firstName ? 'input-error' : ''
              }
            />
            {errors.firstName && touched.firstName && (
              <ErrorStyled>{errors.firstName}</ErrorStyled>
            )}
          </InputDiv>
          <InputDiv>
            <label htmlFor='lastName'>Last Name</label>
            <InputStyle
              borderStyled={
                errors.lastName && touched.lastName ? 'red' : 'black'
              }
              id='lastName'
              name='lastName'
              type='text'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {errors.lastName && touched.lastName && (
              <ErrorStyled>{errors.lastName}</ErrorStyled>
            )}
          </InputDiv>
          <InputDiv>
            <label htmlFor='email'>Email</label>
            <InputStyle
              borderStyled={errors.email && touched.email ? 'red' : 'black'}
              id='email'
              name='email'
              type='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <ErrorStyled>{errors.email}</ErrorStyled>
            )}
          </InputDiv>
          <InputDiv>
            <label htmlFor='password'>Password</label>
            <InputStyle
              borderStyled={
                errors.password && touched.password ? 'red' : 'black'
              }
              id='password'
              name='password'
              type='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={
                errors.firstName && touched.firstName ? 'input-error' : ''
              }
            />
            {errors.password && touched.password && (
              <ErrorStyled>{errors.password}</ErrorStyled>
            )}
          </InputDiv>
          <InputDiv>
            <label htmlFor='confirmPassword'>Confirm password</label>
            <InputStyle
              borderStyled={
                errors.confirmPassword && touched.confirmPassword
                  ? 'red'
                  : 'black'
              }
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <ErrorStyled>{errors.confirmPassword}</ErrorStyled>
            )}
          </InputDiv>
          <InputDiv>
            <ButtonStyle type='submit'>Register</ButtonStyle>
          </InputDiv>
          {succes ? <p>You are registered successfully!</p> : ''}
        </form>
      </Card>
    </Container>
  )
}

export default Registration
