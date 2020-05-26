import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h2>Atomic Design <br/>System</h2>
        <p>Reusable components with a cute Animal Crossing theme. Build with React and Gatsby.js</p>
        <Link to="/page-2/"><button>Click Me</button></Link>
      </div>
    </div>
  </div>
)

export default IndexPage
