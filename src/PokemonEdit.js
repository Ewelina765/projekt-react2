import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import useFetch from './hooks/useFetch'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Card from './UI/Card'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ColorizeIcon from '@mui/icons-material/Colorize'

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  Img: styled.img`
    height: 150px;
    width: 150px;
  `,
  Features: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: large;
    gap: 70px;
  `,
  Two: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 20px;
  `,
  One: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Li: styled.li`
    display: inline-block;
    padding: 10px;
  `,
  Favourites: styled(FavoriteIcon)`
    color: ${({ active }) => (active ? 'red' : 'grey')};
    cursor: pointer;
  `,
  DivImg: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  IconDiv: styled.div``,
  Sword: styled(ColorizeIcon)`
    color: ${({ active }) => (active ? 'black' : 'grey')};
  `,
  StyleLink: styled(Link)`
    text-decoration: none;
    color: #034f84;
  `,
}

const basicSchema = yup.object().shape({
  name: yup.string(),
  height: yup.number(),
  weight: yup.number(),
  baseExp: yup.number(),
  ability: yup.string(),
})

const PokemonEdit = ({ edit, setEdit, setHeightP, heightP }) => {
  //      const [clickedHeart, setClickedHeart] = useState(true)
  //   const [clickedSword, setClickedSword] = useState(true)

  const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${edit}`)

  //   if(data) {
  //  setHeightP(data.height)
  //   }

  //   const onHeartClick = () => {
  //     setClickedHeart((clickedHeart) => !clickedHeart)
  //     setFavourites((prev) =>
  //       prev.includes(data.id)
  //         ? favourites.filter((x) => x !== data.id)
  //         : [...prev, data.id]
  //     )
  //   }
  //   const onSwordClick = () => {
  //     setClickedSword((clickedIcon) => !clickedIcon)
  //     setBattle((prev) =>
  //       prev.includes(data.id)
  //         ? battle.filter((x) => x !== data.id)
  //         : [...prev, data.id]
  //     )
  //   }
  //     const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${edit}`)
  // console.log('datainedir', data)

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
      setHeightP(values.height)
    },

    // onSubmit: (values) => {
    //   const response = axios
    //     .post('http://localhost:8002/users', values)
    //     .catch((err) => console.log(err))
    //   if (response) {
    //     setSucces(true)
    //   }
    // },
  })

  if (!data) return null
  return (
    <div>
      <S.Li>
        <S.Container>
          <Card>
            <S.StyleLink to={`/pokemons/${data.name}`}>
              <S.DivImg>
                <S.Img src={data.sprites.other.dream_world.front_default} />
                <h1>
                  {data.name.charAt(0).toLocaleUpperCase() + data.name.slice(1)}
                </h1>
              </S.DivImg>
              <S.Features>
                <S.Two>
                  <S.One>
                    <div>{data.height}</div>
                    <div>Height</div>
                  </S.One>
                  <S.One>
                    <div>{data.base_experience}</div>
                    <div>Base experience</div>
                  </S.One>
                </S.Two>
                <S.Two>
                  <S.One>
                    <div>{data.weight}</div>
                    <div>Weight</div>
                  </S.One>
                  <S.One>
                    <div>{data.abilities[0].ability.name}</div>
                    <div>Ability</div>
                  </S.One>
                </S.Two>
              </S.Features>
            </S.StyleLink>
          </Card>
        </S.Container>
      </S.Li>

      <div>
        <h1>Edycja</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Nazwa Pokemona</label>
            <input id='name' name='name' type='text' value={values.name} />
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
            <button type='submit' onClick={onClickPrevent}>
              {' '}
              Zapisz zmiany
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PokemonEdit
