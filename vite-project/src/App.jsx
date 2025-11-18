import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./pages/About"
import HomePage from "./pages/Home"
import { Routes,Route } from "react-router-dom"
import Recommender from "./pages/Recommender"
function App() {

  return (
    <>
    <Header></Header>
         <main>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/recommender" element={<Recommender/>} />
      </Routes>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
