import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  ProblemLink,
} from '../components/styles/TextStyles'
import Layout from '../components/layout'
import Buy from '../components/buy'
import {
  PackageWrapper,
  PackageContainer,
  HowListContainer,
  HowList,
  HowListItem,
} from './websites/single-page'
import ExampleOneImage from '../components/lazy-images/website-example-one'
import ExampleTwoImage from '../components/lazy-images/website-example-two'
import ExampleThreeImage from '../components/lazy-images/website-example-three'
import { device } from '../components/styles/MediaQueries'
import { RightIcon } from '../components/styles/IconStyles'

const ExampleWrapper = styled.div`
  width: 100%;
  background: black;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
  }
`

const OurWebsitesPage = ({ location }) => (
  <>
    <Helmet
      title="Website Design and Development for Small Businesses | SiteBird"
      meta={[
        {
          name: 'description',
          content:
            'Small businesses need an optimized and beautiful website now more than ever. With our design and development, you will never worry about hiring another developer.',
        },
        {
          name: 'keywords',
          content:
            'local marketing services, rank in search results, grow small business online',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout
      location={location}
      headerText="Websites that work"
      headerSub="Built with the same tech as large companies"
    >
      <PackageWrapper>
        <HeadingStyle>Stand out from the rest</HeadingStyle>
        <SubHeadingStyle>
          In short, we use the latest and greatest coding language to build your
          website. It is extremely popular with large start ups and happens to
          be the perfect solution for small businesses.
        </SubHeadingStyle>
        <PackageContainer>
          <div>
            <SubHeadingStyle>Build your web foundation</SubHeadingStyle>
            <ParagraphStyle>
              Anything is possible with our development. We focus on creating an
              extremely fast, well designed, and optimized website to start
              (these are what we offer in our packages) and adding on
              functionality that you need after your web presence already has an
              amazing foundation.
            </ParagraphStyle>
          </div>
          <div>
            <SubHeadingStyle>Blow away the competition</SubHeadingStyle>
            <ParagraphStyle>
              "Build your own" websites have become a fad, and for good reason,
              they are convenient. What they don't tell you is that they prime
              your business with long term problems. Things break or don't work
              how they were intended, what's your next option? Hire a developer
              to fix the problem.
            </ParagraphStyle>
          </div>
        </PackageContainer>
      </PackageWrapper>
      <ExampleWrapper>
        <ExampleOneImage />
        <ExampleTwoImage />
        <ExampleThreeImage />
      </ExampleWrapper>
      <PackageWrapper>
        <HowListContainer>
          <HeadingStyle>Hiring someone? Forget about it.</HeadingStyle>
          <HowList>
            <HowListItem>
              Our websites come completely optimized for everything really.
              Mobile, usability, SEO, etc. Forget about hiring someone for
              optimization.
            </HowListItem>
            <HowListItem>
              Professionally designed for your business. We offer content and
              image creation but incorporate the information that is necessary
              to display your business with assets that you provide.
            </HowListItem>
            <HowListItem>
              The technology that we use to create your site is used to fuel
              large companies. To get technical, our caching, page speed, and
              designs are up to par, if not better than the big guys.
            </HowListItem>
            <SubHeadingStyle>
              Still have some questions? We dont bite.
            </SubHeadingStyle>
            <ProblemLink to="/contact">
              Request more information
              <RightIcon />
            </ProblemLink>
          </HowList>
        </HowListContainer>
      </PackageWrapper>
      <Buy location={location} />
    </Layout>
  </>
)

export default OurWebsitesPage
