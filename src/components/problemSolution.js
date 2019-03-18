import React from 'react'
import styled from 'styled-components'
import { device } from './styles/MediaQueries'
import {
  HeadingStyle,
  ParagraphStyle,
  ProblemLink,
  HeadingStyleLight,
} from './styles/TextStyles'
import { RightIcon, CrossIcon } from './styles/IconStyles'
import LeadSection from './leadSection'
import InfoSection from './infoSection'
import PrismTexture from '../images/prism-texture.png'

const ProblemWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;
  text-align: center;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.tabletS} {
    text-align: left;
  }
`

const ProblemContainer = styled.div`
  padding: ${props => props.theme.textSpace} 0;
`

const WrapperBlue = styled.div`
  width: 100%;
  margin: 0;
  padding: ${props => props.theme.textSpace} 0;
  background-image: url(${PrismTexture});
  color: #fff;

  h2 {
    ::after {
      @media ${device.tabletS} {
        margin: 1.5rem auto 0 auto;
      }
    }
    @media ${device.tabletS} {
      text-align: center;
    }
  }
`

const ProbContainerBlue = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 90%;
  }
`

export const ParagraphSecondary = styled(ParagraphStyle)`
  margin-top: ${props => props.theme.textSpace};
  color: ${props => props.theme.secondary};
  font-weight: 500;
  text-align: center;

  @media ${device.tabletS} {
    text-align: left;
  }
`

const ParagraphBlue = styled(ParagraphStyle)`
  color: #fff;
  margin-bottom: ${props => props.theme.textSpace};
  text-align: center;

  @media ${device.tabletS} {
    text-align: left;
  }
`

const ParagraphBlueBold = styled(ParagraphStyle)`
  color: #fff;
  margin: ${props => props.theme.textSpace} 0;
  font-weight: 500;
  text-align: center;

  @media ${device.tabletS} {
    width: 95%;
    margin: ${props => props.theme.textSpace} auto;
  }
`

const ProblemList = styled.ul`
  width: 70%;
  margin: 0 auto ${props => props.theme.textSpace} auto;
  padding: ${props => props.theme.textSpace} 1.5rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 3px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.tabletS} {
    width: 95%;
    align-items: flex-start;
  }
`

const ProblemListItem = styled.li`
  font-size: 2rem;
  display: flex;
  align-items: center;
  :not(:last-child) {
    margin-bottom: 1.5rem;
  }
  div {
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const ProblemSolution = () => (
  <>
    <ProblemWrapper>
      <ProblemContainer>
        <HeadingStyle>Most websites don't convert</HeadingStyle>
        <ParagraphStyle>
          It's a sad truth, web designers focus on designing. Good design
          doesn't necessarily convert, nor does good design mean your website is
          optimized for speed, SEO, and usability.
        </ParagraphStyle>
        <ParagraphSecondary>
          When you bring this up to a web designer they will inevitably try to
          upsell you, offering optimization at an additional cost. When this
          happens, run away, fast.
        </ParagraphSecondary>
      </ProblemContainer>
    </ProblemWrapper>
    <WrapperBlue>
      <ProbContainerBlue>
        <HeadingStyleLight>
          Websites aren't meant to look pretty
        </HeadingStyleLight>
        <ParagraphBlue>
          They are meant to convert and bring in customers. Buying a website
          with a main goal of looking good will only get you so far. Here's what
          this can lead to:
        </ParagraphBlue>
        <ProblemList>
          <ProblemListItem>
            <div>
              <CrossIcon />
            </div>
            <span>Hiring someone for SEO optimization</span>
          </ProblemListItem>
          <ProblemListItem>
            <div>
              <CrossIcon />
            </div>
            <span>Hiring someone for usability / accessability</span>
          </ProblemListItem>
          <ProblemListItem>
            <div>
              <CrossIcon />
            </div>
            <span>Buying an entirely new website to continue growth</span>
          </ProblemListItem>
          <ProblemListItem>
            <div>
              <CrossIcon />
            </div>
            <span>Losing contact with your web designer</span>
          </ProblemListItem>
          <ProblemListItem>
            <div>
              <CrossIcon />
            </div>
            <span>Inability to grow past a certain point</span>
          </ProblemListItem>
        </ProblemList>
      </ProbContainerBlue>
    </WrapperBlue>
    <LeadSection />
    <WrapperBlue>
      <HeadingStyleLight>How we can help</HeadingStyleLight>
      <InfoSection />
      <ParagraphBlueBold>
        Our websites come completely optimized. You will never have to hire
        anyone again.
      </ParagraphBlueBold>
      <ProblemLink to="/websites">
        Detail on our websites
        <RightIcon />
      </ProblemLink>
    </WrapperBlue>
  </>
)

export default ProblemSolution
