import { useEffect, useState } from "react"
import Feed from "../Components/Feed"
import { Volume } from "../Tipagens"
import { useFetchData } from "../useFetch"
import Input from "../Components/Input"

const LivrosPagos = () => {
  const [valueInput, setValueInput] = useState<string>("")
  const [query, setQuery] = useState<string>("ficção")

  const { data, loading } = useFetchData<{ items: Volume[] }>(
    `volumes?q=${query}&filter=paid-ebooks`
  )

  useEffect(() => {
    if (valueInput === "") {
      setQuery("ficção")
    } else {
      setQuery(valueInput)
    }
  }, [valueInput])

  return (
    <section className="mx-5 sm:mx-20 md:mx-32 lg:mx-44 mb-20 mt-4">
      <Input valueInput={valueInput} setValueInput={setValueInput} />
      <Feed data={data} loading={loading} />
    </section>
  )
}

export default LivrosPagos
