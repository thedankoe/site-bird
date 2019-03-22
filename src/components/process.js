import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import { HeadingStyle, ParagraphStyle } from './styles/TextStyles'
import { PencilIcon } from './styles/IconStyles'
import HoneycombTexture from '../images/honeycomb-texture.png'

const ProcessWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;
  text-align: center;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.tabletS} {
    text-align: left;
  }
`

export const ProcessList = styled.ol`
  margin: ${props => props.theme.textSpace} 0
    ${props => props.theme.sectionSpace} 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProcessListContainer = styled.div`
  width: 70%;
  padding: 1.5rem 3rem;
  background-image: url(${HoneycombTexture});
  border-radius: 3px;
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 2rem;
  }

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.tabletS} {
    width: 95%;
  }
`

export const ProcessListItem = styled.li`
  text-align: left;
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  span {
    font-size: 2.2rem;
    font-weight: 500;
    color: ${props => props.theme.lightestGrey};
    display: block;
  }
`

export const ProcessListIcon = styled(PencilIcon)`
  font-size: 3rem;
  margin-right: 3rem;
  fill: #fff;
`

const Process = () => (
  <ProcessWrapper>
    <HeadingStyle>Our process</HeadingStyle>
    <ParagraphStyle>
      We offer different website packages to suit your businesses needs. Once a
      package is purchased, this is how you can expect the process to go:
    </ParagraphStyle>
    <ProcessList>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Step 1
          <span>
            A package is purchased, you will be redirected to a form to give us
            information on your business and a contract to sign. If you pay in
            full, the contract is to hold us accountable for our work.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Step 2
          <span>
            We start building, a temporary link will be sent to you so you can
            see the progress of the site. Questions, concerns, and revisions are
            taken care of for a month after the website is finished.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Step 3
          <span>
            The website is <em>normally</em> completed within a month of
            purchase. We are on call for small updates and fixes for the length
            of the contract (if 6 month contract is purchased).
          </span>
        </ProcessListItem>
      </ProcessListContainer>
      <ProcessListContainer>
        <div>
          <ProcessListIcon />
        </div>
        <ProcessListItem>
          Step 4
          <span>
            If you love our website (we know you will), we offer a retainer
            service for website revisions and updates. This will be offered
            after all of the original work is done.
          </span>
        </ProcessListItem>
      </ProcessListContainer>
    </ProcessList>
    <HeadingStyle>Money Back Guarentee</HeadingStyle>
    <ParagraphStyle>
      If you are unhappy with our services within the first 2 weeks of purchase,
      you get a money back guarentee. No questions asked. We use this as a
      benchmark, our products should be of immense value to your business.
    </ParagraphStyle>
  </ProcessWrapper>
)

export default Process
