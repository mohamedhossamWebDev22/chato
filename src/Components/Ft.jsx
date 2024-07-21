import React from 'react'

import Line from '../assets/line.png'
import logo from '../assets/logo.png'


const Ft = () => {
  return (
    <>
      <img id="Line" src={Line} alt="Img For Design" />
      <footer>
        <img src={logo}/>
        <br />
        <p>Made By Mohamed Hossam</p>
      </footer>
    </>
  )
}

export default Ft