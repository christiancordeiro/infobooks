import { useEffect, useRef, useState } from "react"
import logo from "../assets/infobooks.svg"
import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import MenuHamburguer from "../assets/menu-hamburguer.svg"
import HeaderLi from "./Header/HeaderLi"

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isAnimateOut, setIsAnimateOut] = useState<boolean>(false)
  const isMobile = useMediaQuery({ maxWidth: 640 })
  const menuRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node) &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsAnimateOut(true)
        setTimeout(() => {
          setIsMenuOpen(false)
          setIsAnimateOut(false)
        }, 400)
      }
    }

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutSide)
    }
    return () => {
      document.removeEventListener("click", handleClickOutSide)
    }
  }, [isMenuOpen])

  return (
    <header className="flex justify-between items-center bg-mainColor text-[#525252] font-Nunito font-bold xl:px-40 px-10 md:px-20 lg:text-base text-xs w-full">
      <Link to="/">
        <img src={logo} alt="Logo" className="lg:w-auto lg:h-auto h-6" />
      </Link>

      <nav>
        {isMobile ? (
          <div className="flex justify-between py-3 items-center relative">
            <button ref={buttonRef} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img src={MenuHamburguer} alt="menu" className="w-8 h-8" />
            </button>
            {(isMenuOpen || isAnimateOut) && (
              <div
                ref={menuRef}
                className={`flex items-center z-50 justify-center fixed left-0 top-0 w-2/3 ${
                  isMenuOpen && !isAnimateOut
                    ? "animation-menu-slide-in"
                    : "animation-menu-slide-out"
                }`}
              >
                <ul className="bg-mainColor h-screen w-full font-Nunito font-bold text-base flex flex-col p-10">
                  <HeaderLi
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    isDropdownOpen={isDropdownOpen}
                    isMenuOpen={isMenuOpen}
                  />
                </ul>
              </div>
            )}
          </div>
        ) : (
          <ul className="flex justify-center items-center lg:gap-10 gap-4">
            <HeaderLi
              onMouseEnter={() => setIsDropdownOpen(true)}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              isDropdownOpen={isDropdownOpen}
              isMenuOpen={false}
            />
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header
