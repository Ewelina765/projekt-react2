import styled from "styled-components"

const InputStyle = styled.input`
  align-content: center;
  border-color: ${(props) => props.borderStyled};
  width: 500px;
  height: 30px;
  border-radius: 10px;
  background-color: #daebe8;
`
 const InputDiv = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 40px;
  margin-top: 10px;
`

const Input = ({input, label, name, type, onChange, onBlur, value, values}) => {
  return (
    <InputDiv>
            <label htmlFor={input.id}>{label}</label>
    <InputStyle
      borderStyled={errors.lastName && touched.lastName ? 'red' : 'black'}
      id={id}
      name={name}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      value={values.lastName}
      className={
        errors.firstName && touched.firstName ? 'input-error' : ''
      }
    />
    {errors.firstName && touched.firstName && (
      <ErrorStyled>{errors.firstName}</ErrorStyled>
    )}
  </InputDiv>
  )
}

export default Input
