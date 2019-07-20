import React from "react";
import { Header } from "./Header"
import { Footer } from "./Footer"
import "./Layout.scss"
export const Layout = () => {
  return (
    <div className="viewPort">
      <div className="header">
        <Header />
      </div>
      <div className="mainContent">
          Hello
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}