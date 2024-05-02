import React from 'react'
import Header from './Header';
import Footer from './Footer';
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="main">
        <div className="header">
            <Header />
        </div>
        <div className="content">
            <Outlet />
        </div>
        <div className="footer">
            <Footer />
        </div>
    </div>
  )
}
