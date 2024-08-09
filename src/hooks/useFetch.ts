/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

export function useFetch<T = unknown>(key: string, fetcher: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetcher()
      .then((response) => {
        setData(response)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setIsFetching(false)
      })
  }, [key])

  return { data, isFetching, error }
}
