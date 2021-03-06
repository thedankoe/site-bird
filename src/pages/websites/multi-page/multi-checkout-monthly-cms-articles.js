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
} from '../single-page/single-checkout-flat-cms'
import CheckoutPlan from '../../../components/checkoutPlan'

const MultiCheckoutMonthlyCMSArticles = ({ location }) => (
  <>
    <Helmet title="Add on Content Articles">
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
              Includes a blog page along with your website (6 pages total), this
              is necessary to rank for more keywords.
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
            $40/month to add on, <span>$299/month total</span>
          </ParagraphStyleLight>
          <CheckoutPlan
            plan="plan_EmzeydLg7twckX"
            buttonText="Checkout With Articles"
          />
          <CheckoutPlan
            plan="plan_EmzdWE6Rgm9QUw"
            buttonText="Continue to Checkout"
          />
          <ParagraphStyleLight>
            Current total: <span>$259/month</span>
          </ParagraphStyleLight>
          <ul>
            <li>
              <span>Items:</span>
            </li>
            <li>Multi page website (6 month)</li>
            <li>Contentful CMS (6 month)</li>
          </ul>
        </CheckoutLinkContainer>
      </CheckoutWrapper>
    </Layout>
  </>
)

export default MultiCheckoutMonthlyCMSArticles
