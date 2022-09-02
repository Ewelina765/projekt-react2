import { useFormik} from 'formik'
import styled from 'styled-components'
import * as yup from 'yup'


// const StyledPage = styled(Registration)`
// background-color: aqua;
// `

const S = {
    Container: styled.div`
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    width:100%;
    height: 100%;
    `,
    InputStyle: styled.input`
    border-color: ${({errors}) => (errors.email ? "red" : "black")};
    `
    
}

const basicSchema = yup.object().shape({
        firstName: yup
        .string()
        .required('First name is required'),
        lastName: yup
        .string()
        .required('Last name is required'),
        email: yup
        .string()
        .required('Email is required')
        .email('Email is invalid'),
        password: yup
        .string()
        .required('Password is required')
        .matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Number and One Special Case Character"),
        confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Password must match' )
        .required('You must confirm the password'),
    });


// const onSubmit = () => {console.log('submitted')};

export const Registration = () => {

 const {values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
     initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    },
    validationSchema: basicSchema,
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    console.log(errors)
return (
    <S.Container>
    <h1>Registration</h1>
    <form onSubmit={handleSubmit}>
       <div>
        <label htmlFor="firstName">First Name</label>
        <S.InputStyle id="firstName" name="firstName" type="text" onChange={handleChange} onBlur={handleBlur} value={values.firstName}/>
       </div>
        <div>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" type="text" onChange={handleChange} onBlur={handleBlur} value={values.lastName}/>
</div> 
<div>
        <label htmlFor="email">Email</label>
        <input id="email"
          name="email"
          type="email"
          type="text" onChange={handleChange} onBlur={handleBlur} value={values.email}
        />
</div>
<div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type= 'password' type="text" onChange={handleChange} onBlur={handleBlur} value={values.password}/>
</div>
<div>
        <label htmlFor="confirmpassword">Confirm password</label>
        <input id="confirmpassword" name="confirmpassword" type="password" type="text" onChange={handleChange} onBlur={handleBlur} value={values.confirmPassword}/>
  </div>   
  <div>  

        <button type="submit">Register</button>
        <button type= "reset">Reset</button>
</div> 
        

       
      
    
        </form>
     </S.Container>

);
};