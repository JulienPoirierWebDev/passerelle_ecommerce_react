import { useEffect, useState } from 'react'


const useFetch = ({url}) => {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    const controller = new AbortController();

    const fetchData =  async (controller) => {

      try {

          const signal = controller.signal

          const response = await fetch(url, {signal})
          const data = await response.json()
          setItems(data)
      
          setLoading(false)

      }
      catch (error) {
        if(error !== "ABORT") {
         
          
        }
        
      }
    }

    setTimeout(() => {
      fetchData(controller)

    },1000)


    return (() => {
      controller.abort("ABORT")
    })
  }, [])


  return {items, loading, error}

}

export default useFetch;