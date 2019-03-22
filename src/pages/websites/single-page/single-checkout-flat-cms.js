import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Layout from '../../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
  CheckoutLink,
  ParagraphStyleLight,
} from '../../../components/styles/TextStyles'
import { HowList, HowListItem, HowListContainer } from '../single-page'
import HoneycombTexture from '../../../images/honeycomb-texture.png'
import { device } from '../../../components/styles/MediaQueries'

export const CheckoutWrapper = styled.div`
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

  ul {
    margin-top: ${props => props.theme.textSpace};
    margin-bottom: ${props => props.theme.textSpace};
  }
`

export const CheckoutLinkContainer = styled.div`
  width: 50%;
  margin: ${props => props.theme.textSpace} auto 0 auto;
  padding: ${props => props.theme.textSpace};
  background-image: url(${HoneycombTexture});
  border-radius: 5px;
  box-shadow: ${props => props.theme.bs};

  @media ${device.laptopL} {
    width: 60%;
  }

  @media ${device.tabletL} {
    width: 80%;
  }

  @media ${device.tablet} {
    width: 90%;
  }

  @media ${device.tabletS} {
    width: 100%;
    text-align: center;
  }
`

export const CheckoutColoredLink = styled(Link)`
  margin: 2rem 0 ${props => props.theme.textSpace} 0;
  font-size: 2.2rem;
  font-weight: 500;
  color: ${props => props.theme.lightestGrey};
  border-bottom: 1px solid ${props => props.theme.lightestGrey};
  transition: all ease 0.3s;
  :hover {
    color: ${props => props.theme.lightGrey};
  }
`

const SingleCheckoutFlatCMS = ({ location }) => (
  <>
    <Helmet
      title="Add on Contentful CMS"
      meta={[
        {
          name: 'description',
          content:
            'Affordable, tested websites for local and small businesses. Our websites come fully optimized, you will never need to hire anyone to work on your website again.',
        },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout location={location} headerText="Content Management System">
      <CheckoutWrapper>
        <HeadingStyle>Add on contentful CMS</HeadingStyle>
        <SubHeadingStyle>
          We give you the ability to edit content that is crucial to your
          business rather than reaching out to us to change it for you. This can
          be added on at any time after purchase.
        </SubHeadingStyle>
        <HowListContainer>
          <HowList>
            <HowListItem>
              Edit content that changes with your business (business hours,
              promotional offers, etc.).
            </HowListItem>
            <HowListItem>
              Add blog posts at any time from an intuitive interface, this is
              crucial for off-page SEO and future growth.
            </HowListItem>
            <HowListItem>
              We stay out of your hair. Rather than having us update your
              information for you, do it yourself with ease.
            </HowListItem>
          </HowList>
          <SubHeadingStyle>
            This can be added on at any time down the road, there is no pressure
            to do it now.
          </SubHeadingStyle>
        </HowListContainer>
        <CheckoutLinkContainer>
          <ParagraphStyleLight>
            $200 to add on, <span>$499 total</span>
          </ParagraphStyleLight>
          <CheckoutLink to="/websites/single-page/single-checkout-flat-cms-articles">
            Add on CMS
          </CheckoutLink>
          <CheckoutColoredLink to="websites/single-page/single-checkout-monthly-cms-articles">
            Or pay monthly for $129/month for 6 months
          </CheckoutColoredLink>
          <CheckoutLink to="/websites/single-page/single-checkout-flat-articles">
            Continue with Purchase
          </CheckoutLink>
        </CheckoutLinkContainer>
      </CheckoutWrapper>
    </Layout>
  </>
)

export default SingleCheckoutFlatCMS
