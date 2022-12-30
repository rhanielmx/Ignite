import { GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";

import { HomeContainer, IconContainer, Product } from "../styles/pages/home";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";

import Stripe from 'stripe'
import { stripe } from "../lib/stripe";
import { Handbag } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";

interface Product {
  id: string;
  name: string,
  imageUrl: string,
  price: string,
  formatted: FormattedProduct
}

export interface FormattedProduct {
  name: string,
  id: string;
  price: number,
  currency: string,
  image: string,
}

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const { formattedTotalPrice, redirectToCheckout, addItem, cartDetails } = useShoppingCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    }
  })

  const handleClick = (event, product) => {
    event.preventDefault()
    console.log(product.formatted)
    addItem(product.formatted)
  }


  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Product
              key={product.id}
              className="keen-slider__slide"
              href={`/product/${product.id}`}
              prefetch={false}
            >
              <Image src={product.imageUrl} width={520} height={480} alt="Camiseta 1" />
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <IconContainer onClick={(event) => { handleClick(event, product) }}>
                  <Handbag size={24} />
                </IconContainer>
              </footer>
            </Product>
          )
        })}

      </HomeContainer >
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"]
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price
    console.log(product)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      formatted: {
        name: product.name,
        id: product.id,
        price: price.unit_amount,
        priceId: price.id,
        currency: price.currency,
        image: product.images[0],
      },
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",

      }).format(price.unit_amount! / 100),
    }
  })

  return {
    props: {
      products
    }
  }
}