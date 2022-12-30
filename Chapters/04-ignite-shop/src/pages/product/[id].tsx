import { GetStaticPaths, GetStaticProps } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import Stripe from 'stripe'
import axios from "axios"
import { useState } from "react"
import Head from "next/head"
import { useShoppingCart } from "use-shopping-cart"
import { FormattedProduct } from ".."

interface ProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string,
        price: string;
        description: string,
        defaultPriceId: string,
        formatted: FormattedProduct
    }
}

export default function Product({ product }: ProductProps) {
    const [isCreactingCheckoutSession, setIsCreactingCheckoutSession] = useState(false)
    const { addItem } = useShoppingCart()

    const handleClick = (product) => {
        // event.preventDefault()
        console.log(product.formatted)
        setIsCreactingCheckoutSession(true)
        addItem(product.formatted)
        setTimeout(()=>{
            setIsCreactingCheckoutSession(false)
        },1000)
    }
    
    const { isFallback } = useRouter()

    if (isFallback) {
        return <div>Carregando...</div>
    }
    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt="" />
                </ImageContainer>
                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>

                    <p>{product.description}</p>
                    <button
                        disabled={isCreactingCheckoutSession}
                        onClick={() => handleClick(product)}
                    >
                        Colocar na sacola
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ["default_price"]
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",

                }).format(price.unit_amount! / 100),
                description: product.description,
                defaultPriceId: price.id,
                formatted: {
                    name: product.name,
                    id: product.id,
                    price: price.unit_amount,
                    priceId: price.id,
                    currency: price.currency,
                    image: product.images[0],
                },
            }
        },
        revalidate: 60 * 60 * 1 // 1 hora
    }
}