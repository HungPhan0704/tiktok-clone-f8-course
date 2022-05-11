import { useRef } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useStore, actions } from "./store"
import Home from "./pages/Home"
import Following from "./pages/Following"

function App() {
  const [state, dispatch] = useStore()

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/following" element={<Following />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
