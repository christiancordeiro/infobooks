import { useFetchData } from "../useFetch"
import { Volume } from "../Tipagens"

const Home = () => {
  const { data, loading } = useFetchData<{ items: Volume[] }>(
    `volumes?q=harry+potter`
  )

  // if (data) {
  //   console.log(data)
  // }

  if (loading) {
    return <div>Loading...</div>
  }

  const filteredItems = data?.items.filter((item) =>
    item.volumeInfo.imageLinks?.thumbnail.includes("edge=curl")
  )

  return (
    <main className="mx-5 sm:mx-20 md:mx-32 lg:mx-44 my-20">
      <div className="columns-1 md:columns-2 lg:columns-3 ">
        {filteredItems?.map((item, i) => {
          const highQualityThumbnail =
            item.volumeInfo.imageLinks?.thumbnail.replace("zoom=1", "zoom=4")
          console.log(highQualityThumbnail)
          const isSecondInRow = i % 3 === 1
          return (
            <div key={i} className="py-2">
              <img
                src={highQualityThumbnail}
                alt="Capa do Livro"
                className={`flex items-center justify-center ${
                  isSecondInRow ? "w-full h-[30rem]" : "w-full h-[21rem]"
                } object-cover`}
              />
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Home
