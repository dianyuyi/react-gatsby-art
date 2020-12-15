import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "./Button"
import { FaPaintBrush } from "react-icons/fa"

const Works = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query WorksQuery {
      allArtWorksJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  // get graphql data
  const getWorks = data => {
    const worksArray = []
    data.allArtWorksJson.edges.forEach((item, index) => {
      worksArray.push(
        <WorkCard key={index}>
          <WorkImg
            // src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <WorkInfo>
            <TextWrap>
              <FaPaintBrush />
              <WorkTitle>{item.node.name}</WorkTitle>
            </TextWrap>
            <Button
              primary="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
              to="/trips"
            >
              {item.node.button}
            </Button>
          </WorkInfo>
        </WorkCard>
      )
    })
    return worksArray
  }

  return (
    <WorksContainer>
      <WorksHeading>{heading}</WorksHeading>
      <WorkWrapper>{getWorks(data)}</WorkWrapper>
    </WorksContainer>
  )
}

export default Works

const WorksContainer = styled.div`
  height: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`

const WorksHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const WorkCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`
const WorkImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.02, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const WorkInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

const WorkTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`
