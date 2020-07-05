import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { Themes } from '../types'

const Navbar = () => {
  const themes: Themes = useContext(ThemeContext)
  const { isLightTheme, light, dark } = themes
  const theme = isLightTheme ? light : dark
  return (
    <nav style={{background: theme.ui, color: theme.syntax}} >
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
