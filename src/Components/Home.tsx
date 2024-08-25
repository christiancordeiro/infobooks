import { useFetchData } from "../useFetch"
import { Volume } from "../Tipagens"
import { ChangeEvent, useEffect, useState } from "react"
import Search from "../assets/Search.svg"
import Loader from "./Loader"

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

  // if (data) {
  //   console.log(data)
  // }

  const filteredItems = data?.items?.filter((item) =>
    item.volumeInfo.imageLinks?.thumbnail.includes("edge=curl")
  )

  const filteredItemsInput =
    valueInput.length > 0
      ? filteredItems?.filter((livro) =>
          livro.volumeInfo.title
            .toLowerCase()
            .includes(valueInput.toLowerCase())
        )
      : filteredItems

  return (
    <main className="mx-5 sm:mx-20 md:mx-32 lg:mx-44 mb-20 mt-4">
      <div className="flex justify-center items-center ">
        <div className="relative w-full lg:w-1/2 flex items-center py-5">
          <img
            src={Search}
            alt="Icon search"
            className="absolute left-0 pl-4 w-8 h-8"
          />
          <input
            type="text"
            className="border-[1px] w-full font-Montserrat font-normal border-[#181818] rounded-md h-12 pl-10"
            placeholder="Pesquise..."
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValueInput(e.target.value)
            }
            value={valueInput}
          />
        </div>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 ">
        {loading ? (
          <Loader />
        ) : (
          filteredItemsInput?.map((item, i) => {
            const highQualityThumbnail =
              item.volumeInfo.imageLinks?.thumbnail.replace("zoom=1", "zoom=4")
            // console.log(highQualityThumbnail)
            const isSecondInRow = i % 3 === 1
            return (
              <div key={i} className="py-2">
                <img
                  src={highQualityThumbnail}
                  alt="Capa do Livro"
                  className={`flex items-center justify-center card-animation ${
                    isSecondInRow ? "w-full h-[30rem]" : "w-full h-[21rem]"
                  } object-cover`}
                />
              </div>
            )
          })
        )}
      </div>
    </main>
  )
}

export default Home
