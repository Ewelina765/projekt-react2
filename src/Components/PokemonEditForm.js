import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import styled from 'styled-components'
import Button from '@mui/material/Button'

const S = {
  Card: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  `,
  InputStyle: styled.input`
    align-content: center;
    border-radius: 5px;
  `,
  H1: styled.h1`
    text-align: center;
  `,
}

const basicSchema = yup.object().shape({
  name: yup.string(),
  height: yup.number(),
  weight: yup.number(),
  baseExp: yup.number(),
  ability: yup.string(),
})

const PokemonEditForm = ({
  setEdit,
  setNameP,
  setHeightP,
  setWeightP,
  setBaseExp,
  setAbility,
}) => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      id: 'pokemon.name',
      name: '',
      height: '',
      weight: '',
      baseExp: '',
      ability: '',
    },

    validationSchema: basicSchema,
    onSubmit: (values) => {
      setNameP(values.name)
      setHeightP(values.height)
      setWeightP(values.weight)
      setBaseExp(values.baseExp)
      setAbility(values.ability)
    },
  })
  const onEditClick = () => {
    setEdit([])
  }
  return (
    <div>
      <S.H1>Edycja</S.H1>
      <form onSubmit={handleSubmit}>
        <S.Card>
          <div>
            <label htmlFor='name'>Nazwa Pokemona</label>
            <S.InputStyle
              id='name'
              name='name'
              type='text'
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <div>
            <label htmlFor='height'>Wzrost</label>
            <S.InputStyle
              id='height'
              name='height'
              type='number'
              onChange={handleChange}
              value={values.height}
            />
          </div>
          <div>
            <label htmlFor='weight'>Waga</label>
            <S.InputStyle
              id='weight'
              name='weight'
              type='number'
              onChange={handleChange}
              value={values.weight}
            />
          </div>
          <div>
            <label htmlFor='baseExp'>Doświadczenie</label>
            <S.InputStyle
              id='baseExp'
              name='baseExp'
              type='number'
              onChange={handleChange}
              value={values.baseExp}
            />
          </div>
          <div>
            <label htmlFor='ability'>Umiejętność</label>
            <S.InputStyle
              id='ability'
              name='ability'
              type='text'
              onChange={handleChange}
              value={values.ability}
            />
          </div>
          <div>
            <Button
              variant='contained'
              size='medium'
              style={{ backgroundColor: '#80ced6' }}
              type='submit'
            >
              Zatwierdz zmiany
            </Button>
          </div>
          <div>
            <Button
              variant='contained'
              size='medium'
              style={{ backgroundColor: '#80ced6' }}
              onClick={onEditClick}
            >
              Usuń pokemona
            </Button>
          </div>
        </S.Card>
      </form>
    </div>
  )
}

export default PokemonEditForm
