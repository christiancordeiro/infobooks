import { useFetchData } from "../useFetch"
import { Volume } from "../Tipagens"
import { useEffect, useState } from "react"
import Input from "../Components/Input"
import Feed from "../Components/Feed"

const Home = () => {
  const [valueInput, setValueInput] = useState<string>("")
  const [query, setQuery] = useState<string>("romance")
  const { data, loading } = useFetchData<{ items: Volume[] }>(
    `volumes?q=${query}`
  )

  useEffect(() => {
    if (valueInput === "") {
      setQuery("romance")
    } else {
      setQuery(valueInput)
    }
  }, [valueInput])

  return (
    <main className="mx-5 sm:mx-20 md:mx-32 lg:mx-44 mb-20 mt-4">
      <Input valueInput={valueInput} setValueInput={setValueInput} />
      <Feed data={data} loading={loading} />
    </main>
  )
}

export default Home
