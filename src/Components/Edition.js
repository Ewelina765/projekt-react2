import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const basicSchema = yup.object().shape({
  name: yup.string(),
  height: yup.number(),
  weight: yup.number(),
  baseExp: yup.number(),
  ability: yup.string(),
})

const Edition = () => {
  const [name, setName] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [baseExp, setBaseExp] = useState('')
  const [ability, setAbility] = useState('')

  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: {
      id: 'pokemon.name',
      name: '',
      height: '',
      weight: '',
      baseExp: '',
      ability: '',
    },


    validationSchema: basicSchema,
    // onSubmit: (values) => {
    //   const response = axios
    //     .post('http://localhost:8002/users', values)
    //     .catch((err) => console.log(err))
    //   if (response) {
    //     setSucces(true)
    //   }
    // },
  })


  return (


    <div >
    <div>
      <h1>Edycja</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Nazwa Pokemona</label>
          <input
            id='name'
            name='name'
            type='text'
            value={values.name}
          />
        </div>
        <div>
          <label htmlFor='height'>Wzrost</label>
          <input
            id='height'
            name='height'
            type='number'
            onChange={handleChange}
            value={values.height}
          />
          
        </div>
        <div>
          <label htmlFor='weight'>Waga</label>
          <input
          
            id='weight'
            name='weight'
            type='number'
            onChange={handleChange}
            value={values.weight}
          />
         
        </div>
        <div>
          <label htmlFor='baseExp'>Doświadczenie</label>
          <input
           
            id='baseExp'
            name='baseExp'
            type='number'
            onChange={handleChange}
            value={values.baseExp}
            
          />
         
        </div>
        <div>
          <label htmlFor='ability'>Umiejętność</label>
          <input
            id='ability'
            name='ability'
            type='text'
            onChange={handleChange}
            value={values.ability}
          />
         
        </div>
        <div>
           <button>Zapisz zmiany</button>
        </div>
       
      </form>
    </div>
  </div>


   
  )
  
  
  
  
  
 
}

export default Edition
