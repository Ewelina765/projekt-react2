import { height } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

const Favourites = ({ favourites }) => {
  const [number, setNumber] = useState([])

  const responses = Promise.all(
    favourites.map(async (id) => {
      const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()
      console.log('number', data)
    })
  )
  // useEffect(() => {
  //   responses()
  // }, [favourites.length])

  // useEffect(() => {
  //   (async () => {
  //     const result = await favourites.map((item, index) =>
  //       axios.get(`http://pokeapi.co/api/v2/pokemon/${favourites}`)
  //     );
  //     setNumber(result);
  //     console.log('number',number);
  //   })();
  // }, []);

  //   let iterator = favourites.values()
  //   console.log('iterator',iterator.next().value)
  //  const {data}  = useFetch(`https://pokeapi.co/api/v2/pokemon/${favourites[0]}`)
  //  console.log('data', data)
  // console.log(data)

  return <p>{data.height}</p>
}
export default Favourites
