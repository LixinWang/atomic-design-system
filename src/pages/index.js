import React from 'react'
import Link from 'gatsby-link'
import '../layouts/index.css'
import Section from '../components/Section'
import Wave from '../components/Wave'

const IndexPage = () => (
  <div>
    <div className="Home">
      <div className="HomeGroup">
        <h2 id="animated">Atomic Design <br/>System</h2>
        <p id="animated">Reusable components with a cute Animal Crossing theme. Build with React and Gatsby.js</p>
        <Link to="/page-2/"><button>Click Me</button></Link>
        {/* <div/>
        <svg class="hat" width="200" height="160" viewBox="0 0 200 78" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path  d="M55.9999 19.5002C50.4999 18.0002 11.9997 12.0002 7.49979 39.0002C3.99957 60.0011 21.4686 70.5002 37.4997 70.5002C50.5 70.5002 65.4999 61.5002 92.4999 39.0002C108.5 24.5002 125.5 13.3337 138.5 9.00018C151.5 4.66669 193.5 7 192 39.0002C189.578 58.075 168.971 66.0267 150.5 62C138.468 59.3771 127 47.4998 121 38" stroke="#BA6624" stroke-width="14"/>
          <path  d="M90.5 37C88 25.9998 85.5 4.39285 71 7.49997C63.6448 9.07607 59 15 53.5 15C44.5 15 38 8.14286 30 15C24.4 19.8 13 55.5 8.5 74.5" transform="translate(40, -30)" stroke="#BA6624" stroke-width="14" stroke-linecap="square"/>
        </svg> */}
        
      </div>
      <Wave />
      <Section
        logo={require('../images/blathers.png')}
        title="What is an Atomic Design System?"
        text="All matter is composed of atoms that combine to form molecules. Similarly, the basic components in Atomic Design allows you to combine them together to create more complex components and layouts." />
    </div>
  </div>
  
)
export default IndexPage
