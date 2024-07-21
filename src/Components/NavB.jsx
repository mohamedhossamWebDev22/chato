import React from 'react'
import Icon from './Icon'
import { NavLink } from 'react-router-dom'

const NavB = (props) => {
  return (
    <>
      <nav>
        <h1>Chato</h1>
        <NavLink to={props.l}><Icon icon="fa-solid fa-globe"/></NavLink>
      </nav>
    </>
  )
}

export default NavB