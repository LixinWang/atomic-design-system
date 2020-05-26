import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

//Alternative way to import aside from the single line require in line 9
//    import logo from '../images/Icons/Leaf.svg'
//    <img src={logo} width="30" />

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require
        ('../images/Icons/Leaf.svg')}
        width="30" /></Link>
      <Link to="/atoms">Atoms</Link>
      <Link to="/404">Molecules</Link>
      <Link to="/404">Organisms</Link>
      <Link to="/404"><button>Button</button></Link>
    </div>
  </div>
)

export default Header
