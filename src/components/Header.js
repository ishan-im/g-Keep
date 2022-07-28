import React from 'react'

import '../styles/style.css'

function Header() {

const logo = ()=> <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="keep" />

  return (
    <div className="header">
    {logo()} <h1>gKeep</h1>
  </div>
  )
}

export default Header