import { useState } from "react"
import logo from "../assets/infobooks.svg"
import { NavLink, Link } from "react-router-dom"

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)

  return (
    <header className="flex justify-between items-center bg-mainColor text-[#525252] font-Nunito font-bold xl:px-40 px-20  lg:text-base text-xs">
      <Link to="/">
        <img src={logo} alt="Logo" className="lg:w-auto lg:h-auto h-6" />
      </Link>

      <nav>
        <ul className="flex justify-center items-center lg:gap-10 gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 pb-6 text-[#181818] border-[#483F36]"
                  : "py-6"
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="relative">
            <div
              onMouseEnter={() => setIsDropdownOpen(true)}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              className="relative inline-block"
            >
              <button className="hover:bg-[#776a5bfb] active:bg-[#776a5bfb] hover:text-white py-6 px-2">
                CATEGORIAS ▾
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-mainColor text-center w-48 shadow-md">
                  <li className="m-0 hover:bg-[#776a5bfb] hover:text-white">
                    <Link to="categoria1" className="block w-full p-3">
                      Categoria 1
                    </Link>
                  </li>
                  <li className="m-0 hover:bg-[#776a5bfb] hover:text-white">
                    <Link to="categoria2" className="block w-full p-3">
                      Categoria 2
                    </Link>
                  </li>
                  <li className="m-0 hover:bg-[#776a5bfb] hover:text-white">
                    <Link to="categoria3" className="block w-full p-3">
                      Categoria 3
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li>
            <NavLink
              to="livrosgratuitos"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 pb-6 text-[#181818] border-[#483F36]"
                  : "py-6"
              }
            >
              LIVROS GRATUITOS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="livrospagos"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 pb-6 text-[#181818] border-[#483F36]"
                  : "py-6"
              }
            >
              LIVROS PAGOS
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
