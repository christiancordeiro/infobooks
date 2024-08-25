import Header from "./Components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import LivrosGratuitos from "./Components/LivrosGratuitos"
import LivrosPagos from "./Components/LivrosPagos"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="livrosgratuitos" element={<LivrosGratuitos />} />
          <Route path="livrospagos" element={<LivrosPagos />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
