import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import {
  HeadingStyle,
  SubHeadingStyle,
  ParagraphStyleLight,
} from '../../../components/styles/TextStyles'
import { HowList, HowListItem, HowListContainer } from '../single-page'
import {
  CheckoutWrapper,
  CheckoutLinkContainer,
  CheckoutColoredLink,
} from './single-checkout-flat-cms'
import CheckoutSku from '../../../components/checkoutSku'

const SingleCheckoutFlatCMSArticles = ({ location }) => (
  <>
    <Helmet
      title="Add on Content Articles"
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
    <Layout location={location} headerText="Off-page SEO with content articles">
      <CheckoutWrapper>
        <HeadingStyle>Add on Content Articles</HeadingStyle>
        <SubHeadingStyle>
          Content is the lifeblood of off-page SEO. Rank more pages with content
          articles based on researched keywords. This exponentially increases
          your chance of ranking for more keywords.
        </SubHeadingStyle>
        <HowListContainer>
          <HowList>
            <HowListItem>
              Includes a blog page along with your single page website, this is
              necessary to rank for more keywords.
            </HowListItem>
            <HowListItem>
              4 content articles are included with the blog page. This
              quadruples your chances of ranking in SERPs (Search Engine Results
              Pages).
            </HowListItem>
            <HowListItem>
              On-page SEO is great for optimizing your website, content articles
              compliment this by leading targeted traffic to your website
              organically.
            </HowListItem>
          </HowList>
          <SubHeadingStyle>
            This can be added on at any time down the road, there is no pressure
            to do it now.
          </SubHeadingStyle>
        </HowListContainer>
        <CheckoutLinkContainer>
          <ParagraphStyleLight>
            $200 to add on, <span>$699 total</span>
          </ParagraphStyleLight>
          <CheckoutSku
            sku="sku_EkNnKJmXJfIRqg"
            buttonText="Add on Content Articles"
          />
          <CheckoutColoredLink to="/websites/single-page/single-checkout-monthly-cms-articles">
            Or pay monthly for $169/month for 6 months
          </CheckoutColoredLink>
          <CheckoutSku
            sku="sku_Eji2eabPqp46LZ"
            buttonText="Continue to Checkout"
          />
        </CheckoutLinkContainer>
      </CheckoutWrapper>
    </Layout>
  </>
)

export default SingleCheckoutFlatCMSArticles
