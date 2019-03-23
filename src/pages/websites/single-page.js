import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyle,
  HeadingStyleLight,
  CheckoutLink,
} from '../../components/styles/TextStyles'
import { CheckMark } from '../../components/styles/IconStyles'
import PackageBG from '../../images/package-buy-bg.jpg'
import { device } from '../../components/styles/MediaQueries'
import { BuyWrapper, BuyContainer } from '../../components/buy'
import {
  Card,
  CardContainer,
  CardParagraph,
  CardList,
} from '../../components/servicesCard'
import HoundstoothTexture from '../../images/houndstooth-texture.png'

const SINGLE_PAGE_QUERY = graphql`
  query SinglePageQuery {
    file(relativePath: { eq: "placeholder.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const PackageWrapper = styled.div`
  position: relative;
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.sectionSpace} 0;
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

export const PackageContainer = styled.div`
  margin: ${props => props.theme.textSpace} auto 0 auto;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
  }
`

export const HowListContainer = styled.div`
  margin: 0 auto;

  h3 {
    width: 80%;
    margin-left: auto;
    margin-right: auto;

    @media ${device.tabletS} {
      width: 95%;
    }
  }
`

export const HowList = styled.ul`
  width: 70%;
  margin: 0 auto ${props => props.theme.textSpace} auto;
  list-style: none;

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }
`

export const HowListItem = styled.li`
  margin-bottom: 2.5rem;
  padding-left: 1.5rem;
  color: ${props => props.theme.primaryLight};
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 1.8;
  text-align: left;
  border-left: 2px solid ${props => props.theme.secondaryLight};
`

export const ExampleWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-image: linear-gradient(
      to right bottom,
      rgba(27, 179, 232, 0.7),
      rgba(3, 89, 117, 0.8)
    ),
    url(${HoundstoothTexture});
`

export const ExampleContainer = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: ${props => props.theme.textSpace} 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptop} {
    width: 90%;
  }

  @media ${device.tablet} {
    width: 80%;
    grid-template-columns: 1fr;
  }

  @media ${device.mobileL} {
    width: 90%;
    grid-template-columns: 1fr;
  }
`

export const ExampleImgContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 6px;
  box-shadow: ${props => props.theme.bs};
  overflow: hidden;
  transition: all ease 0.5s;
  :hover {
    cursor: pointer;
    p {
      background: #fff;
      transition: all ease 0.5s;
    }
  }

  p {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50%;
    padding: 2rem 0;
    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    border-radius: 3px;
    z-index: 2;
    transform: translate(-50%, -50%);
  }
`

export const PackageBuyWrapper = styled.div`
  margin: ${props => props.theme.sectionSpace} auto;
  text-align: left;
`

export const PackageBuyContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: ${props => props.theme.textSpace};
`
export const PackageBuyCard = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: ${props => props.theme.textSpace};
  background-image: linear-gradient(
      to right bottom,
      rgba(3, 89, 117, 0.9),
      rgba(27, 179, 232, 0.9)
    ),
    url(${PackageBG});
  background-position: center;
  background-size: cover;
  color: #fff;
  border-radius: 6px;
  box-shadow: ${props => props.theme.bs};

  @media ${device.tabletL} {
    padding: 1rem;
    grid-template-columns: 1fr;
  }
`

export const PackageBuyList = styled.ul`
  padding: 2rem;
  background: rgba(62, 62, 62, 0.5);
  border-radius: 4px;
  font-size: 2.2rem;
  color: #fff;
  text-align: left;
  list-style: none;
`

export const PackageBuyPara = styled(ParagraphStyle)`
  margin-bottom: 2rem;
  color: #fff;
  font-size: 2.8rem;
`

export const PackageBuyParaEnd = styled(ParagraphStyle)`
  margin-top: 1.5rem;
  color: #fff;
  font-size: 2.4rem;
  font-weight: 500;
`

export const PackageBuyCTA = styled.div`
  width: 100%;
  height: 100%;
`

const StandardPage = ({ location }) => (
  <StaticQuery
    query={SINGLE_PAGE_QUERY}
    render={data => (
      <>
        <Helmet
          title="Standard SEO Consulting Package | Affordable Online Consulting for Local Businesses"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Layout
          location={location}
          headerText="Single Page Website"
          headerSub="Get the point across, get customers buying."
        >
          <PackageWrapper>
            <HeadingStyle>Why a single page website?</HeadingStyle>
            <SubHeadingStyle>
              Single page websites have been growing in popularity recently,
              even large companies with multiple pages have most of the
              information you would ever need on their home page.
            </SubHeadingStyle>
            <PackageContainer>
              <div>
                <SubHeadingStyle>Focus on the customer</SubHeadingStyle>
                <ParagraphStyle>
                  A customer came to your website because they are interested in
                  buying a service or product. Having everything they need on
                  one page will only increase their chances of buying. Then,
                  it's up to your website to convert.
                </ParagraphStyle>
              </div>
              <div>
                <SubHeadingStyle>Centralize your information</SubHeadingStyle>
                <ParagraphStyle>
                  One page is more than enough to display the information you
                  need. Most websites have a jumble of information that is
                  either not targeted, or useless in having customers buy from
                  you. Let your website display what custoemrs want.
                </ParagraphStyle>
              </div>
            </PackageContainer>
          </PackageWrapper>
          <ExampleWrapper>
            <ExampleContainer>
              <ExampleImgContainer>
                <p>example text</p>
                <Img fluid={data.file.childImageSharp.fluid} />
              </ExampleImgContainer>
              <ExampleImgContainer>
                <p>example text</p>
                <Img fluid={data.file.childImageSharp.fluid} />
              </ExampleImgContainer>
            </ExampleContainer>
          </ExampleWrapper>
          <PackageWrapper>
            <HowListContainer>
              <HeadingStyle>Benefits of single page websites</HeadingStyle>
              <HowList>
                <HowListItem>
                  Customers only have one place to go and one place to buy
                </HowListItem>
                <HowListItem>
                  You will only have to worry about ranking for targeted content
                  (SEO blog posts). We give you detailed emails on how to do
                  this.
                </HowListItem>
                <HowListItem>
                  More pages can be added at any time, even though it may not be
                  needed
                </HowListItem>
                <HowListItem>
                  All of your information is in one place, you do not need to
                  send customers to specific pages
                </HowListItem>
              </HowList>
              <SubHeadingStyle>
                We touch base weekly with updates on your website, any changes
                you want to make during this time are implemented.
              </SubHeadingStyle>
            </HowListContainer>
          </PackageWrapper>
          <BuyWrapper>
            <BuyContainer>
              <HeadingStyleLight>Start Converting</HeadingStyleLight>
              <CardContainer>
                <Card>
                  <HeadingStyle>Flat Fee</HeadingStyle>
                  <SubHeadingStyle>1 month completion time</SubHeadingStyle>
                  <CardParagraph>$299</CardParagraph>
                  <ParagraphStyle>1 month of revisions</ParagraphStyle>
                  <CardList>
                    <li>
                      <div>
                        <CheckMark />
                      </div>
                      Professionally designed with your businesses colors and
                      ideals
                    </li>
                    <li>
                      <div>
                        <CheckMark />
                      </div>
                      Contact form connected to your business email, spam
                      protected
                    </li>
                    <li>
                      <div>
                        <CheckMark />
                      </div>
                      Conversion centered colors, call to actions, and content
                    </li>
                  </CardList>
                  <CheckoutLink to="/websites/single-page/single-checkout-flat-cms">
                    Continue to Checkout
                  </CheckoutLink>
                </Card>
                <Card>
                  <HeadingStyle>6 month contract</HeadingStyle>
                  <SubHeadingStyle>1 month completion time</SubHeadingStyle>
                  <CardParagraph>$89/month</CardParagraph>
                  <ParagraphStyle>1 month of revisions</ParagraphStyle>
                  <CardList>
                    <li>
                      <div>
                        <CheckMark />
                      </div>
                      Professionally designed with your businesses colors and
                      ideals
                    </li>
                    <li>
                      <div>
                        <CheckMark />
                      </div>
                      Contact form connected to your business email, spam
                      protected
                    </li>
                    <li>
                      <div>
                        <CheckMark />
                      </div>
                      Conversion centered colors, call to actions, and content
                    </li>
                  </CardList>
                  <CheckoutLink to="/websites/single-page/single-checkout-monthly-cms">
                    Continue to Checkout
                  </CheckoutLink>
                </Card>
              </CardContainer>
            </BuyContainer>
          </BuyWrapper>
        </Layout>
      </>
    )}
  />
)

export default StandardPage
