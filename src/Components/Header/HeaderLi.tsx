import React from "react"
import { NavLink, Link } from "react-router-dom"

interface HeaderLiProps {
  onClick: React.MouseEventHandler<HTMLDivElement>
  onMouseEnter: React.MouseEventHandler<HTMLDivElement>
  onMouseLeave: React.MouseEventHandler<HTMLDivElement>
  isDropdownOpen: boolean
  isMenuOpen: boolean
}

const HeaderLi: React.FC<HeaderLiProps> = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  isDropdownOpen,
  isMenuOpen,
}) => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? isMenuOpen
                ? "bg-[#483F36] text-[#ffffff]  block w-full h-full px-6 py-3" // estilo quando o menu hamburguer está aberto
                : "border-b-2 py-6 text-[#181818] border-[#483F36]" // estilo quando o menu hamburguer está aberto
              : `block w-full h-full ${isMenuOpen ? "px-4" : ""}  py-3`
          }
        >
          HOME
        </NavLink>
      </li>
      <li className="relative">
        <div
          onMouseEnter={onMouseEnter}
          onClick={onClick}
          onMouseLeave={onMouseLeave}
          className={`relative ${isMenuOpen ? "block" : "inline-block"} `}
        >
          <div
            className={`hover:bg-[#483F36] active:bg-[#483F36] hover:text-white cursor-pointer  ${
              isMenuOpen
                ? "block w-full h-full px-4 py-3"
                : `py-6 px-2 inline-block`
            }`}
          >
            CATEGORIAS ▾
          </div>
          {isDropdownOpen && (
            <ul
              className={`absolute z-50 bg-mainColor text-center ${
                isMenuOpen ? "w-full" : "w-48"
              } shadow-md`}
            >
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
              ? isMenuOpen
                ? "bg-[#483F36] text-[#ffffff] block w-full h-full px-6 py-3"
                : "border-b-2 py-6 text-[#181818] border-[#483F36]"
              : `block w-full h-full ${isMenuOpen ? "px-4" : ""}  py-3`
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
              ? isMenuOpen
                ? "bg-[#483F36] text-[#ffffff] block w-full h-full px-6 py-3"
                : "border-b-2 py-6 text-[#181818] border-[#483F36]"
              : `block w-full h-full ${isMenuOpen ? "px-4" : ""}  py-3`
          }
        >
          LIVROS PAGOS
        </NavLink>
      </li>
    </>
  )
}

export default HeaderLi
