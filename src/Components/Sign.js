import { useFormik } from 'formik'
import React, { Component, useState } from 'react'
import * as yup from 'yup'
import { LogInContext } from '../Contexts/LogContext'
import { useContext } from 'react'
import {
  SignCard,
  InputStyle,
  InputDiv,
  SignContainer,
  ButtonStyle,
  ErrorStyled,
} from './RegistrationStyled'
import { useNavigate } from 'react-router-dom'

const basicSchema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Email is invalid'),
  password: yup.string().required('Password is required'),
})

export const Sign = ({ users }) => {
  const [succes, setSucces] = useState(false)
  const [clicked, setClicked] = useState(false)

  const navigate = useNavigate()
  const { setIsLogIn } = useContext(LogInContext)

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: basicSchema,
    onSubmit: () => {
      checkUser()
    },
  })

  const checkUser = () => {
    console.log('userssing', users)
    console.log('values', values)
    const userCheck = users.find(
      (user) => user.email === values.email && user.password === values.password
    ) 
    if (userCheck) {
      setSucces(true)
      setIsLogIn(true)
      navigate('/edition')
    }
  }

  const clickedButton = () => {
    setClicked(true)
  }

  return (
    <SignContainer>
      <SignCard>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
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
            <ButtonStyle onClick={clickedButton} type='submit'>
              Sign
            </ButtonStyle>
          </InputDiv>
          {!succes && clicked && (
            <p>"Wrong email or username"</p>
          )}
        </form>
      </SignCard>
    </SignContainer>
  )
}
