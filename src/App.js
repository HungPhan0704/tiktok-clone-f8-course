import { useRef } from "react"
import { Fragment } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useStore, actions } from "./store"
import { publicRoutes } from "@/routes"
import DefaultLayout from "@/components/layout/DefaultLayout"
function App() {
  const [state, dispatch] = useStore()

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            let Layout = DefaultLayout
            if (route.layout) Layout = route.layout
            else if (route.layout === null) Layout = Fragment
            return (
              <Route
                path={route.path}
                key={index}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
