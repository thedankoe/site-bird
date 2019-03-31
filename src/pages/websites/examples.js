import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
} from '../../components/styles/TextStyles'
import { PackageWrapper } from './single-page'
import NatoursExampleOne from '../../images/natours-example-one.gif'
import NatoursExampleTwo from '../../images/natours-example-two.gif'
import { device } from '../../components/styles/MediaQueries'

const ExampleContainer = styled.div`
  margin-top: ${props => props.theme.textSpace};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};
  text-align: left;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`

// const ExampleImgWrapper = styled.div`
//   width: 100%;
//   border-radius: 6px;
//   box-shadow: ${props => props.theme.bs};
//   overflow: hidden;
// `

const ExampleGif = styled.img`
  width: 100%;
  border-radius: 6px;
  box-shadow: ${props => props.theme.bs};
`

const WebsiteExamples = ({ location }) => (
  <>
    <Helmet title="Website Examples | SiteBird">
      <html lang="en" />
    </Helmet>
    <Layout
      location={location}
      headerText="Website Examples"
      headerSub="Beautiful, optimized, conversion centered."
    >
      <PackageWrapper>
        <HeadingStyle>Natours</HeadingStyle>
        <SubHeadingStyle>
          This is a perfect example of a single page website. Everything the
          customer needs to know is on the main page. When the navigation links
          are clicked, the is an animation that takes you to that section of the
          page.
        </SubHeadingStyle>
        <ExampleContainer>
          <ExampleGif
            src={NatoursExampleOne}
            alt="Example of Natours header style"
          />
          <div>
            <SubHeadingStyle>Beautiful Animations</SubHeadingStyle>
            <ParagraphStyle>
              Natours believed a modern user interface would attract modern
              customers, they weren't wrong. The right colors and seamless
              animations create a great user experience.
            </ParagraphStyle>
          </div>
        </ExampleContainer>
        <ExampleContainer>
          <div>
            <SubHeadingStyle>Conversion Centered Cards</SubHeadingStyle>
            <ParagraphStyle>
              Well designed cards convert more, remember the case studies from
              the home page? Attractive colors, contrast, and of course the
              right offer go a long way.
            </ParagraphStyle>
          </div>
          <ExampleGif src={NatoursExampleTwo} alt="Example of Natours cards" />
        </ExampleContainer>
      </PackageWrapper>
    </Layout>
  </>
)

export default WebsiteExamples
