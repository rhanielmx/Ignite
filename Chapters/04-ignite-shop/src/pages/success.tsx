import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";
import { stripe } from "../lib/stripe";

import { ImageContainer, SuccessContainer } from "../styles/pages/sucess";

interface SuccessProps {
    customerName: string;
    products: {
        id: string;
        name: string;
        imageUrl: string;
        quantity: number;
    }[],
    quantity: number,
}

export default function Success({ customerName, products, quantity }: SuccessProps) {
    const { clearCart } = useShoppingCart()

    useEffect(()=>{
        clearCart()
    },[])

    return (
        <>
            <Head>
                <title>Compra Efetuada | Ignite Shop</title>

                <meta name="robots" content="noindex" />
            </Head>
            <SuccessContainer>
                <ImageContainer>
                    {products.map(product=>{
                        return <Image key={product.id} src={product.imageUrl} width={120} height={110} alt="" />
                    })}
                </ImageContainer>
                <h1>
                    Compra efetuada!
                </h1>
                <p>
                    Uhuul <strong>{customerName}</strong>, sua compra de {quantity} camisetas já está a caminho da sua casa.
                </p>              

                <Link href="/">
                    Voltar ao catálogo
                </Link>
            </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if (!query.session_id) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["line_items", "line_items.data.price.product"]
    })

    const customerName = session.customer_details.name
    const product = session.line_items.data[0].price.product as Stripe.Product
    const products = session.line_items.data.map(line_item => {
        const product = line_item.price.product as Stripe.Product

        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            quantity: line_item.quantity
        }
    })
    
    return {
        props: {
            customerName,
            product: {
                name: product.name,
                imageUrl: product.images[0],
            },
            products,
            quantity: products.reduce((acc, product) => {
                return acc + product.quantity
            }, 0)
        }
    }
}