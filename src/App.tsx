import Header from "./Pages/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import LivrosGratuitos from "./Pages/LivrosGratuitos"
import LivrosPagos from "./Pages/LivrosPagos"

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
