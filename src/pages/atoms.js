import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import '../layouts/Atoms.css'

const AtomsPage = () => (
  <div>
    <div className="Hero">

      <div className="HeroGroup">
        <h2>Atoms</h2>
        <p>Atoms are the foundational building blocks of our user interface. Atoms can't be broken down any further without losing their fuction.</p>
      </div>

        <div className="CardGroup">
          <Card
            title="Typography"
            text="Heading texts use Zilla Slab. Body texts use Quicksand."
            h1="Heading 1"
            h1size="80px"
            h2="Heading 2"
            h2size="60px"
            h3="Heading 3"
            h3size="30px"
            h4="Heading 4"
            h4size="24px"
          />

          <Card
            title="Color"
            text="Text"

          />

          <Card
            title="Assets"
            text="Text"
            
          />

          <Card
            title="Buttons"
            text="Text"
            
          />
          
        </div>

    </div>
    
  </div>
)

export default AtomsPage