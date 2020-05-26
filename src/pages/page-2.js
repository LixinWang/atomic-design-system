import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h2>Hi, this is a page.</h2>
        <p>This is the description.</p>
        <Link to="/"><button>Back to Home Page</button></Link>
      </div>
    </div>
  </div>
)

export default SecondPage
