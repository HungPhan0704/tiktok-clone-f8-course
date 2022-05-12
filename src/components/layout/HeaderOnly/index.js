import Header from "@/components/layout/components/Header"
import React from "react"

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div>{children}</div>
      </div>
    </div>
  )
}

export default HeaderOnly
