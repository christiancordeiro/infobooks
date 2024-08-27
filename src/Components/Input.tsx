import { ChangeEvent } from "react"
import Search from "../assets/Search.svg"

interface PropsInput {
  valueInput: string
  setValueInput: (value: string) => void
}

const Input: React.FC<PropsInput> = ({ setValueInput, valueInput }) => {
  return (
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
  )
}

export default Input
