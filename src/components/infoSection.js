import React from 'react'
import styled from 'styled-components'
import InfoBlock from './infoBlock'
import { device } from './styles/MediaQueries'
import {
  ChartIcon,
  ArrowIcon,
  ZoomIcon,
  PencilIcon,
  TargetIcon,
  SpeedIcon,
} from './styles/IconStyles'

const InfoWrapper = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.textSpace};
  background: rgba(0, 0, 0, 0.35);
  border-radius: 3px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }
`

const InfoSection = () => (
  <InfoWrapper>
    <InfoBlock
      icon={<ChartIcon />}
      heading="Websites that work"
      text="We don't just create websites (like everyone else does). We create websites that work."
    />
    <InfoBlock
      icon={<PencilIcon />}
      heading="Copywriting"
      text="The art of persuasion, we make it irresistable for people to buy your product or service."
    />
    <InfoBlock
      icon={<ZoomIcon />}
      heading="On-Page SEO"
      text="Rank on Google organically, don't pay for on-page SEO services down the road."
    />
    <InfoBlock
      icon={<TargetIcon />}
      heading="Targeted Content"
      text="Content that potential customers are searching for wanting to buy."
    />
    <InfoBlock
      icon={<ArrowIcon />}
      heading="Usability Testing"
      text="Rank higher and increase clickthrough rates with an accessable website."
    />
    <InfoBlock
      icon={<SpeedIcon />}
      heading="Quick Load Times"
      text="Modern technology and mobile friendly, a must have in todays market."
    />
  </InfoWrapper>
)

export default InfoSection
