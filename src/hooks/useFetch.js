import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [nextURL, setNextURL] = useState('')
  const [prevURL, setPrevURL] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get(url)
        setPrevURL(response.data.previous)
        setNextURL(response.data.next)
        setData(response.data)
      } catch (err) {
        setError(err)
      }

      setIsLoading(false)
    }
    fetchData()
  }, [url])

  return { data, error, isLoading, nextURL, prevURL }
}

export default useFetch
