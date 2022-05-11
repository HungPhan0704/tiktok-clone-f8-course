import React from "react"
import { useRef } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useStore, actions } from "./store"
import { publicRoutes } from "@/routes"

function App() {
  const [state, dispatch] = useStore()

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            return <Route path={route.path} element={<Page />} />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
