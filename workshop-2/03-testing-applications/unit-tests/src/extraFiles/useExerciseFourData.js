import { useEffect, useState } from 'react'

export const useExerciseFourData = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setError(new Error('I am an error!'))
    }, 1000)
  }, [])

  return { loading, error, data }
}
