import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { Container } from '../styles/pages/app';
import { Header } from '../components/Header';

import Image from 'next/image';
import { Handbag } from 'phosphor-react';
import { CartProvider } from 'use-shopping-cart'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const successUrl = `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `http://localhost:3000/`

  const STRIPE_PUBLIC_KEY="pk_test_51MJkdlJ9MeI8NR7hoefM2c92sGqgTgGEPPTqtU0oS4uuerybBBHFCHWe6cESyKDZv6elTYctPiyGBOm1aVomvWEE00FUJCpjZ5"

  return (
    <CartProvider
      mode="payment"
      cartMode="checkout-session"
      stripe={STRIPE_PUBLIC_KEY}
      successUrl={successUrl}
      cancelUrl={cancelUrl}
      currency="BRL"
      allowedCountries={['BR']}
      billingAddressCollection={true}
      shouldPersist={true}
    >
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
