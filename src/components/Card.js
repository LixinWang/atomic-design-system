import React from 'react'
import styled from 'styled-components'
import './Card.css'

const TypographyGroup = styled.div`
    width: fit-content;
    height: fit-content;
    display: inline-grid;
    grid-template-rows: repeat(4,auto);
    grid-template-columns: repeat(2, auto);
    grid-column-gap: 40px;
    grid-row-gap: 28px;
    position: relative;
    justify-items: left;
    margin: 0 0 40px 0;

    @media (max-width: 1000px) {
        grid-template-rows: repeat(8, auto);
        grid-template-columns: 1fr;
        grid-row-gap: 14px;
    }
`
const Title = styled.h3`
    color: #3DBFB7;
    margin: 20px 0 10px 0;
`
const Description = styled.p`
    margin: 0 0 20px 0;
`
// const Heading1 = styled.h1`
//     color: #6B5C43;
//     font-size: 80px;
// `
// const Heading2 = styled.h2`
//     color: #6B5C43;
//     font-size: 60px;
// `
// const Heading3 = styled.h3`
//     color: #6B5C43;
//     font-size: 40px;
// `
// const Heading4 = styled.h4`
//     color: #6B5C43;
//     font-size: 24px;
// `

const Card = ({
    title, text,
    h1, h1size,
    h2, h2size,
    h3, h3size,
    h4, h4size,}) => (
    <div className="Card">
        <div className="CardContent">
            <Title>{title}</Title>
            <Description>{text}</Description>
        </div>
        
        <TypographyGroup>
            <h1>{h1}</h1>
            <h1>{h1size}</h1>
            <h2>{h2}</h2>
            <h2>{h2size}</h2>
            <h3>{h3}</h3>
            <h3>{h3size}</h3>
            <h4>{h4}</h4>
            <h4>{h4size}</h4>
        </TypographyGroup>

        <TypographyGroup>
            <p class="small">{h1}</p>
            <p>{h1size}</p>
        </TypographyGroup>
        
    </div>
    
)

export default Card