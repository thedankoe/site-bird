import React from 'react'
import styled from 'styled-components'
import { TiDeviceLaptop, TiPencil } from 'react-icons/ti'
import { GoGear } from 'react-icons/go'
import { device } from './styles/MediaQueries'
import { SubHeadingStyleLight, ParagraphStyleLight } from './styles/TextStyles'

const InfoWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.textSpace};
  background: rgba(0, 0, 0, 0.35);
  border-radius: 3px;
  text-align: center;

  @media ${device.desktop} {
    width: 95%;
  }
`

const InfoContainer = styled.div`
  margin-bottom: ${props => props.theme.textSpace};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
  }
`

const InfoBlock = styled.div`
  text-align: center;
`

const LayoutIcon = styled(TiDeviceLaptop)`
  fill: ${props => props.theme.secondaryLight};
  font-size: 7rem;
`

const CopywritingIcon = styled(TiPencil)`
  fill: ${props => props.theme.secondaryLight};
  font-size: 7rem;
`

const OptimizationIcon = styled(GoGear)`
  fill: ${props => props.theme.secondaryLight};
  font-size: 7rem;
`

const InfoSection = () => (
  <InfoWrapper>
    <InfoContainer>
      <InfoBlock>
        <LayoutIcon />
        <SubHeadingStyleLight>Layout</SubHeadingStyleLight>
        <ParagraphStyleLight>
          A custom layout tailored to your business. Guide the users eyes and
          get them to call, email, or buy.
        </ParagraphStyleLight>
      </InfoBlock>
      <InfoBlock>
        <OptimizationIcon />
        <SubHeadingStyleLight>Optimization</SubHeadingStyleLight>
        <ParagraphStyleLight>
          Mobile, accessability, usability, and SEO optimization out of the box.
          Forget about hiring somebody for these.
        </ParagraphStyleLight>
      </InfoBlock>
      <InfoBlock>
        <CopywritingIcon />
        <SubHeadingStyleLight>Copywriting</SubHeadingStyleLight>
        <ParagraphStyleLight>
          Targeted content that is designed to persuade. Content strategy is key
          to converting customers.
        </ParagraphStyleLight>
      </InfoBlock>
    </InfoContainer>
    <SubHeadingStyleLight>Included Services</SubHeadingStyleLight>
    <ParagraphStyleLight>
      On-Page SEO - Accessability &amp; Usability Testing - Information
      Architecture - Mobile Responsive
    </ParagraphStyleLight>
  </InfoWrapper>
)

export default InfoSection
