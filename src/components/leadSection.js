import React from 'react'
import styled from 'styled-components'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  ColoredLink,
} from './styles/TextStyles'
import { device } from './styles/MediaQueries'

const LeadSectionWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.sectionSpace} auto;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }
`

const LeadSectionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.tabletL} {
    width: 80%;
    margin: 0 auto;
    grid-template-columns: 1fr;
  }

  @media ${device.tablet} {
    width: 95%;
    margin: 0 auto;
    grid-template-columns: 1fr;
  }
`

const LeadSectionItem = styled.div`
  :not(:last-child) {
    margin-right: ${props => props.theme.textSpace};
  }

  @media ${device.tablet} {
    margin-right: 0;
    :not(:last-child) {
      margin-bottom: ${props => props.theme.textSpace};
    }
  }

  @media ${device.tabletL} {
    text-align: center;
  }

  @media ${device.tabletS} {
    text-align: left;
  }
`

const LeadSection = () => (
  <LeadSectionWrapper>
    <HeadingStyle>Conversion centered websites guarentee growth</HeadingStyle>
    <LeadSectionContainer>
      <LeadSectionItem>
        <SubHeadingStyle>
          300% average increase in leads for the first year
        </SubHeadingStyle>
        <ParagraphStyle>
          The point of websites are to convert, we've been over this, but it's
          extremely important to understand the difference between 'conversion
          centered' and 'showcase' websites. One has targeted content, one
          doesn't.
        </ParagraphStyle>
      </LeadSectionItem>
      <LeadSectionItem>
        <SubHeadingStyle>No targeted content, no customers</SubHeadingStyle>
        <ParagraphStyle>
          Targeted content partly optimizes your website for search engines.
          Without this you will not grow organically, period. Your website is
          meant to be your best salesman, targeted content helps people find you
          without you specifically directing them to it.
        </ParagraphStyle>
      </LeadSectionItem>
    </LeadSectionContainer>
  </LeadSectionWrapper>
)

export default LeadSection
