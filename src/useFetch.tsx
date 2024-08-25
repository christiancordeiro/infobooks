import { useEffect, useState } from "react"

export function useFetchData<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)

  const maxResults = 40

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const url = `https://www.googleapis.com/books/v1/${endpoint}&maxResults=${maxResults}`
        const response = await fetch(url)
        const json = await response.json()
        setLoading(false)
        setData(json)
        return json
      } catch (error) {
        console.log(error)
        setLoading(false)
        throw error
      }
    }

    fetchData()
  }, [endpoint])

  return { data, loading }
}
