import React from 'react'
import { CheckoutButton } from './styles/TextStyles'

const CheckoutSku = class extends React.Component {
  componentDidMount() {
    this.stripe = window.Stripe('pk_test_72FFEEfY0jpJ2euL6aEJ5Qrl', {
      betas: ['checkout_beta_4'],
    })
  }

  async redirectToCheckout(event) {
    const { sku } = this.props
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku, quantity: 1 }],
      successUrl: `https://www.site-bird.com/checkout-success/`,
      cancelUrl: `https://www.site-bird.com/`,
    })

    if (error) {
      console.warn('Error:', error)
    }
  }

  render() {
    return (
      <CheckoutButton
        type="button"
        onClick={event => this.redirectToCheckout(event)}
      >
        Purchase Package
      </CheckoutButton>
    )
  }
}

export default CheckoutSku
