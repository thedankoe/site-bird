import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/layout'
import {
  HeadingStyle,
  UltraSubHeadingStyle,
  ParagraphStyle,
  ColoredLink,
} from '../components/styles/TextStyles'
import WebsiteFAQ from '../components/websiteFAQ'
import { device } from '../components/styles/MediaQueries'

const FAQWrapper = styled.div`
  margin: ${props => props.theme.sectionSpace} 0;

  @media ${device.tabletS} {
    width: 95%;
    margin: ${props => props.theme.sectionSpace} auto;
    text-align: left;
  }
`

const FAQContainer = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${props => props.theme.textSpace};

  @media ${device.desktop} {
    width: 80%;
  }

  @media ${device.laptopL} {
    width: 95%;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`

export const FAQParagraph = styled(ParagraphStyle)`
  margin-top: 1.5rem;
`

const FAQPage = ({ location }) => (
  <>
    <Helmet
      title="FAQ for Online SEO Consulting and Website Creation"
      meta={[
        {
          name: 'description',
          content:
            'We answer questions about online marketing, SEO consulting, and website creation for local businesses.',
        },
        {
          name: 'keywords',
          content: 'small business online marketing questions',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <Layout
      location={location}
      headerText="Frequently Asked Questions"
      headerSub="For small businesses looking for an optimized website"
    >
      <FAQWrapper>
        <HeadingStyle>Your website questions answered</HeadingStyle>
        <FAQContainer>
          <div>
            <UltraSubHeadingStyle>
              How do your websites stand out from others?
            </UltraSubHeadingStyle>
            <ParagraphStyle>
              Firstly, we use a new language that most people are not using. It
              is called Gatsby.js and will be extremely popular in the coming
              years, more popular than it already is. It outputs a website that
              loads EXTREMELY fast out of the box.
            </ParagraphStyle>
            <FAQParagraph>
              Our team has specializations in usability and SEO, not just web
              development. We optimize your website for all of these.
            </FAQParagraph>
          </div>
          <div>
            <UltraSubHeadingStyle>
              How do you keep prices so low?
            </UltraSubHeadingStyle>
            <ParagraphStyle>
              If you're wondering if this is an issue with quality, it is not.
              We never plan to sacrifice quality no matter the price. We want
              every small business to be able to have an amazing website while
              being able to save some money.
            </ParagraphStyle>
            <FAQParagraph>
              We have streamlined processes in place that make development for
              small businesses much quicker than other companies, without
              sacrificing quality of course.
            </FAQParagraph>
          </div>
          <div>
            <UltraSubHeadingStyle>
              Do you create WordPress / Wix / Squarespace sites?
            </UltraSubHeadingStyle>
            <ParagraphStyle>
              We do not. All of these platforms have a place, but they also make
              it difficult to have the fastest load times while being optimized.
            </ParagraphStyle>
            <FAQParagraph>
              We do offer a content management system (Contentful) during
              checkout if you want the ability to manually edit your website.
              This may be competely unnecessary for your needs, it can be added
              on at any time down the road.
            </FAQParagraph>
          </div>
          <div>
            <UltraSubHeadingStyle>
              Is SEO that important for growth?
            </UltraSubHeadingStyle>
            <ParagraphStyle>
              Absolutely, no doubt. If you do not have targeted content bringing
              customers back to your website in order to make a purchase, only
              those that explicitely search for your business will find you. At
              that time its up to your website to make the sale.
            </ParagraphStyle>
            <FAQParagraph>
              SEO is more than just looking good on Google. It gets interested
              customers to visit your website.
            </FAQParagraph>
          </div>
          <div>
            <UltraSubHeadingStyle>
              What if I have a higher budget?
            </UltraSubHeadingStyle>
            <ParagraphStyle>
              If you are looking for an enterprise level website, our websites
              aren't for you. We specialize in websites meant to convert for
              local or small businesses.
            </ParagraphStyle>
            <FAQParagraph>
              If you are looking for a custom piece of functionality (i.e. an
              online order form),{' '}
              <ColoredLink to="/contact">
                contact us for a personalized website package
              </ColoredLink>
              .
            </FAQParagraph>
          </div>
          <div>
            <UltraSubHeadingStyle>
              What comes after an optimized website?
            </UltraSubHeadingStyle>
            <ParagraphStyle>
              When we are finished building your website, we give you guidance
              on the next steps for online marketing. If you would like to
              continue with us, we recommend at least 6 months of SEO work to
              organically grow your business.
            </ParagraphStyle>
            <FAQParagraph>
              Our sister agency, <a href="https://www.seo-bird.com">SEOBird</a>{' '}
              specializes in growing businesses with off-page SEO.
            </FAQParagraph>
          </div>
        </FAQContainer>
      </FAQWrapper>
      <WebsiteFAQ />
    </Layout>
  </>
)

export default FAQPage
