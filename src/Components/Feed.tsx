import { Volume } from "../Tipagens"
import Loader from "./Loader"

interface FeedProps {
  data: { items: Volume[] } | null
  loading: boolean
}

const Feed: React.FC<FeedProps> = ({ data, loading }) => {
  const filteredItems = data?.items?.filter((item) =>
    item.volumeInfo.imageLinks?.thumbnail.includes("edge=curl")
  )

  return (
    <div className="columns-1 md:columns-2 lg:columns-3">
      {loading ? (
        <Loader />
      ) : (
        filteredItems?.map((item, i) => {
          const highQualityThumbnail =
            item.volumeInfo.imageLinks?.thumbnail.replace("zoom=1", "zoom=4")
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
  )
}

export default Feed
