import { useState, useEffect } from "react"
import axios from "axios"

const useFetch = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async (endpoint, query) => {
    setIsLoading(true)
    try {
      const response = await endpoint(query)

      console.log("hook response")
      console.log(response)

      setData(response)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { data, isLoading, fetchData }
}

export default useFetch
