import Header from "@/components/layout/components/Header"
import SideBar from "./SideBar"

import React from "react"

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <SideBar />
        <div>{children}</div>
      </div>
    </div>
  )
}

export default DefaultLayout
