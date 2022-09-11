import { useFormik } from 'formik'
import React, { Component }  from 'react';
import styled from 'styled-components'
import * as yup from 'yup'
import { useSnackbar, SnackbarProvider } from 'notistack'
import {
  SignCard,
  InputStyle,
  InputDiv,
  SignContainer,
  ButtonStyle,
  ErrorStyled,
} from './Header/RegistrationStyled'

const basicSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup.string().required('Password is required'),
})

const onSubmit = () => {
  console.log('submitted')
}

export const Sign = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: basicSchema,
      onSubmit,
    })
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const handleSubmit2 = () => {
    const items = JSON.parse(localStorage.getItem('items'))
    if (values.email == !items.email || values.password == !items.password) {
      enqueueSnackbar('Wrong email or password')
    }
    console.log(items, 'items')
  }
  return (
    <SignContainer>
      <SignCard>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} onSubmit={handleSubmit2}>
          <InputDiv>
            <label htmlFor='email'>Email</label>
            <InputStyle
              borderStyled={errors.email && touched.email ? 'red' : 'black'}
              id='email'
              name='email'
              type='email'
              type='text'
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
            <ButtonStyle type='submit'>Sign</ButtonStyle>
          </InputDiv>
        </form>
      </SignCard>
    </SignContainer>
  )
}
