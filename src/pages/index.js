import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h2>Atomic Design <br/>System</h2>
        <p>Reusable components with a cute Animal Crossing theme. Build with React and Gatsby.js</p>
        <Link to="/page-2/"><button>Click Me</button></Link>
        {/* <div/>
        <svg class="hat" width="200" height="160" viewBox="0 0 200 78" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path  d="M55.9999 19.5002C50.4999 18.0002 11.9997 12.0002 7.49979 39.0002C3.99957 60.0011 21.4686 70.5002 37.4997 70.5002C50.5 70.5002 65.4999 61.5002 92.4999 39.0002C108.5 24.5002 125.5 13.3337 138.5 9.00018C151.5 4.66669 193.5 7 192 39.0002C189.578 58.075 168.971 66.0267 150.5 62C138.468 59.3771 127 47.4998 121 38" stroke="#BA6624" stroke-width="14"/>
          <path  d="M90.5 37C88 25.9998 85.5 4.39285 71 7.49997C63.6448 9.07607 59 15 53.5 15C44.5 15 38 8.14286 30 15C24.4 19.8 13 55.5 8.5 74.5" transform="translate(40, -30)" stroke="#BA6624" stroke-width="14" stroke-linecap="square"/>
        </svg> */}

        <svg width="100%" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#A3E0F4">
           <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

            M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
        
            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"/>
        </path>
        </svg>

      </div>
    </div>
  </div>
  
)
export default IndexPage
