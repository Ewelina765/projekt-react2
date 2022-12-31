import React, { useEffect, useState } from 'react'
import PokemonEdit from './PokemonEdit'
import styled from 'styled-components'
import PokemonEditForm from './PokemonEditForm'
import axios from 'axios'

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `,
  Card: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
}

const Edition = ({ edit, setEdit }) => {
  const [data, setData] = useState('')
  const [nameP, setNameP] = useState('')
  const [heightP, setHeightP] = useState('')
  const [weightP, setWeightP] = useState('')
  const [baseExp, setBaseExp] = useState('')
  const [ability, setAbility] = useState('')
  const [clickedEdit, setClickedEdit] = useState(true)

  useEffect(() => {
    if (edit) {
      const pokeCharacteristic = async () => {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${edit}`
        )
        setData(response.data)
        setNameP(response.data.name)
        setHeightP(response.data.height)
        setWeightP(response.data.weight)
        setAbility(response.data.abilities[0].ability.name)
        setBaseExp(response.data.base_experience)
      }
      pokeCharacteristic()
    } else {
      return null
    }
  }, [])

  if (!data && !edit) return null
  return (
    <S.Container>
      {edit.length > 0 && (
        <div>
          <PokemonEdit
            edit={edit}
            setEdit={setEdit}
            data={data}
            nameP={nameP}
            heightP={heightP}
            baseExp={baseExp}
            weightP={weightP}
            ability={ability}
            setClickedEdit={setClickedEdit}
          />
        </div>
      )}
      {edit.length > 0 && (
        <S.Card>
          <PokemonEditForm
            edit={edit}
            setEdit={setEdit}
            setNameP={setNameP}
            setHeightP={setHeightP}
            setWeightP={setWeightP}
            setBaseExp={setBaseExp}
            setAbility={setAbility}
          />
        </S.Card>
      )}
    </S.Container>
  )
}

export default Edition
