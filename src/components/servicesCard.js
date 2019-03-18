import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import { CheckMark } from './styles/IconStyles'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  HeaderLinkStyle,
} from './styles/TextStyles'

export const CardContainer = styled.div`
  margin: ${props => props.theme.textSpace} 0;
  display: flex;
  justify-content: center;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
  }
`

export const Card = styled.div`
  width: 50%;
  background: #fff;
  padding: ${props => props.theme.textSpace} 1.5rem;
  border-radius: 3px;
  box-shadow: ${props => props.theme.bs};
  color: #000;
  :not(:last-child) {
    margin-right: ${props => props.theme.textSpace};
  }

  @media ${device.laptop} {
    width: 70%;
    :not(:last-child) {
      margin-right: 0;
      margin-bottom: ${props => props.theme.textSpace};
    }
  }

  @media ${device.tablet} {
    width: 90%;
  }

  @media ${device.tabletS} {
    width: 100%;
  }
`

export const CardParagraph = styled.p`
  color: ${props => props.theme.primary};
  font-size: 2.8rem;
  font-weight: 500;
`

export const CardList = styled.ul`
  width: 80%;
  margin: ${props => props.theme.textSpace} auto;
  border-radius: 3px;
  list-style: none;
  font-size: 2rem;
  font-weight: 400;
  svg {
    margin-right: 2rem;
    font-size: 3rem;
  }
  li {
    display: flex;
    align-items: center;
    text-align: left;
    :not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  @media ${device.tabletS} {
    width: 95%;
  }
`

export const CardLink = styled(HeaderLinkStyle)`
  margin: 0 auto;
`

const ServicesCard = () => (
  <CardContainer>
    <Card>
      <HeadingStyle>Single Page</HeadingStyle>
      <SubHeadingStyle>
        Perfect for businesses that want to get their point across and get
        customers to buy. Common for new businesses.
      </SubHeadingStyle>
      <CardParagraph>$299 flat fee</CardParagraph>
      <ParagraphStyle>Or</ParagraphStyle>
      <CardParagraph>$89/month</CardParagraph>
      <ParagraphStyle>6 month contract</ParagraphStyle>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          Optimized for SEO, mobile, usability, and accessability.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Designed for you business. Includes an email capture input and contact
          form.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Includes most aspects of a multi-page site organized on a single page
          that flows well.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Very popular with new businesses, in some circumstances single page
          sites convert more.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Invitation to a private Slack channel, we update you on the websites
          progress.
        </li>
      </CardList>
      <CardLink to="/websites/single-page">Learn More</CardLink>
    </Card>
    <Card>
      <HeadingStyle>Multi Page</HeadingStyle>
      <SubHeadingStyle>
        Maximum 6 pages. For businesses that want the full website experience.
        Common for established businesses.
      </SubHeadingStyle>
      <CardParagraph>$999 flat fee</CardParagraph>
      <ParagraphStyle>Or</ParagraphStyle>
      <CardParagraph>$199/month</CardParagraph>
      <ParagraphStyle>6 month contract</ParagraphStyle>
      <CardList>
        <li>
          <div>
            <CheckMark />
          </div>
          Optimized for SEO, mobile, usability, and accessability.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Designed for you business. Includes an email capture input and contact
          form.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Up to 5 custom pages plus the home page. Fast transitions with small
          load time.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Popular with established businesses looking for a redesign or a new
          website all together.
        </li>
        <li>
          <div>
            <CheckMark />
          </div>
          Invitation to a private Slack channel, we update you on the websites
          progress.
        </li>
      </CardList>
      <CardLink to="/services/premium">Learn More</CardLink>
    </Card>
  </CardContainer>
)

export default ServicesCard
