import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import PokemonCard2 from './PokemonCard2'
import PokemonEdit from '../PokemonEdit'

// const basicSchema = yup.object().shape({
//   name: yup.string(),
//   height: yup.number(),
//   weight: yup.number(),
//   baseExp: yup.number(),
//   ability: yup.string(),
// })

const Edition = ({edit, setEdit}) => {
  const [nameP, setNameP] = useState('')
  const [heightP, setHeightP] = useState('')
  const [weightP, setWeightP] = useState('')
  const [baseExp, setBaseExp] = useState('')
  const [ability, setAbility] = useState('')
 console.log('height', heightP)
  return (
    <div>
      {/* <div>
      {edit.map((id) => {
          return<div key={id.id}> <PokemonCard2 heightP={heightP} setHeightP={setHeightP} id={id} edit={edit} setEdit={setEdit} /></div>
        })}
      </div> */}
      <div><PokemonEdit edit={edit} setEdit={setEdit} setHeight={setHeightP} heightP={heightP}/></div>
      </div>
      
  )
}

export default Edition
