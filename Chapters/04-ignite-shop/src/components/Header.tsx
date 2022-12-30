import Image from "next/image";
import { Handbag, X } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../assets/logo.svg'
import { DialogClose, DialogContent, DialogTitle, DialogTrigger, HeaderContainer, IconContainer, NewPurchaseButton, NotificationPin } from "../styles/components/Header";
import { useShoppingCart } from "use-shopping-cart";
import StyledScrollArea from "./ScrollArea";
import axios from "axios";
import { useRouter } from "next/router";

export function Header() {
    const { formattedTotalPrice, cartDetails, cartCount, removeItem, redirectToCheckout, stripe } = useShoppingCart()
    const { route } = useRouter()

    const isSuccessRoute = route.startsWith("/success")

    async function handleClick() {
        const products = Object.entries(cartDetails).map(product => {
            return {
                price: product[1].priceId,
                quantity: product[1].quantity
            }
        })
        const response = await axios.post("/api/checkout", {
            line_items: products,
        })

        const { sessionId } = response.data

        try {
            const result = await redirectToCheckout(sessionId)
            if (result?.error) {
                console.error("result", result)
            }
        } catch (error) {
            console.error("error", error)
        } 
    }

    return (
        <HeaderContainer>
            <Image src={logoImg} alt='' />
            {!isSuccessRoute &&
                <Dialog.Root>
                    <DialogTrigger>
                        <IconContainer>
                            <Handbag size={24} weight='bold' />
                            {cartCount > 0 &&
                                <NotificationPin>{cartCount}</NotificationPin>
                            }
                        </IconContainer>

                    </DialogTrigger>
                    <Dialog.Portal>
                        <Dialog.Overlay />
                        <DialogContent>
                            <DialogTitle>Sacola de Compras {stripe}</DialogTitle>
                            <DialogClose>
                                <X size={24} />
                            </DialogClose>
                            <StyledScrollArea products={Object.entries(cartDetails)} removeItem={removeItem} />
                            <div className="orderDetails">
                                <p>
                                    <span>Quantidade</span>
                                    <span>{Object.keys(cartDetails).length} itens</span>
                                </p>
                                <p>
                                    <span>Valor Total</span>
                                    <span>{formattedTotalPrice}</span>
                                </p>
                            </div>


                            <NewPurchaseButton onClick={handleClick}>
                                Finalizar Compra
                            </NewPurchaseButton>
                        </DialogContent>
                    </Dialog.Portal>
                </Dialog.Root>
            }
        </HeaderContainer>
    )
}