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
      <Link to="/page2">Page 2</Link>
      <Link to="/page3">Page 3</Link>
      <Link to="/page4">Page 4</Link>
      <Link to="/page5"><button>Button</button></Link>
    </div>
  </div>
)

export default Header
