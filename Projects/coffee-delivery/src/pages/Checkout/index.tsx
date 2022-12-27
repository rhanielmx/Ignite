import { MapPinLine, CurrencyDollar, Trash, CreditCard, Money, Bank } from "phosphor-react";
import React, { useContext, useEffect, useState } from "react";
import { OrderData, OrdersContext } from "../../contexts/OrdersContext";
import { BillingForm } from "./components/BillingForm";
import { CartItem } from "./components/CartItem";
import { Divider } from "./components/CartItem/styles";
import { CheckoutContainer, TitleInfoContainer, BillingInfoContainer, OrderInfoContainer, InfoItemsContainer, BillingHeader, BillingHeaderSubtitle, BillingHeaderText, PaymentButtonscontainer, PaymentButton, OrderDetails, OrderSpan, PurchaseButton } from "./style";

import coffees from "../../data/Coffees";
import { FormProvider, useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const newOrderFormSchema = z.object({
    cep: z.string(),
    rua: z.string(),
    numero: z.string(),
    complemento: z.string().optional(),
    bairro: z.string(),
    cidade: z.string(),
    uf: z.string(),
})

type NewOrderFormInput = z.infer<typeof newOrderFormSchema>

export function Checkout() {
    const [selected, setSelected] = useState('')
    const { productsPrice, deliveryPrice, totalPrice, cart, completeCurrentOrder } = useContext(OrdersContext)

    const newOrderForm = useForm<NewOrderFormInput>({
        resolver: zodResolver(newOrderFormSchema)
    })

    const {
        reset,
        getValues,
        formState: { isSubmitting, isSubmitSuccessful }
    } = newOrderForm

    const toggleSelected = (option: string) => {
        selected === option ? setSelected('') : setSelected(option)
    }

    const handleCreateNewOrder = (data: NewOrderFormInput) => {
        const newOrder: OrderData = {
            CEP: data.cep,
            road: data.rua,
            number: data.numero,
            complement: data.complemento,
            district: data.bairro,
            city: data.cidade,
            estate: data.uf,
            date: (new Date()).toISOString(),
            paymentPreference: selected,
            id: String(new Date().getTime())

        }
        console.log('newOrder',newOrder)
        completeCurrentOrder(cart, newOrder)
        setSelected('')
        reset()        
        window.location.href = '/success';
    }


    return (
        <CheckoutContainer>
            <BillingInfoContainer>
                <TitleInfoContainer>
                    Complete seu pedido
                </TitleInfoContainer>
                <InfoItemsContainer>
                    <BillingHeader>
                        <MapPinLine size={22} color="#C47F17" />
                        <p>
                            <BillingHeaderSubtitle>Endereço de Entrega</BillingHeaderSubtitle>
                            <BillingHeaderText>Informe o endereço onde deseja receber seu pedido</BillingHeaderText>
                        </p>
                    </BillingHeader>

                    <form >
                        <FormProvider {...newOrderForm}>
                            <BillingForm />
                        </FormProvider>
                    </form>
                </InfoItemsContainer>
                <InfoItemsContainer>
                    <BillingHeader>
                        <CurrencyDollar size={22} color="#8047F8" />
                        <p>
                            <BillingHeaderSubtitle>Pagamento</BillingHeaderSubtitle>
                            <BillingHeaderText>O pagamento é feito na entrega. Escolha a forma que deseja pagar</BillingHeaderText>
                        </p>
                    </BillingHeader>
                    <PaymentButtonscontainer>
                        <PaymentButton
                            as='div'
                            selected={selected == 'credit'}
                            onClick={() => toggleSelected('credit')}
                        >
                            <CreditCard size={16} color="#8047F8" />
                            Cartão de Crédito
                        </PaymentButton>
                        <PaymentButton
                            as='div'
                            selected={selected == 'debit'}
                            onClick={() => toggleSelected('debit')}
                        >
                            <Bank size={16} color="#8047F8" />
                            Cartão de Débito
                        </PaymentButton>
                        <PaymentButton
                            as='div'
                            selected={selected == 'money'}
                            onClick={() => toggleSelected('money')}
                        >
                            <Money size={16} color="#8047F8" />
                            Dinheiro
                        </PaymentButton>
                    </PaymentButtonscontainer>
                </InfoItemsContainer>
            </BillingInfoContainer>
            <OrderInfoContainer>
                <TitleInfoContainer>
                    Cafés Selecionados
                </TitleInfoContainer>
                <InfoItemsContainer style={{ borderRadius: "0.75rem 2.75rem" }}>
                    {
                        cart.map((item) => {
                            return (
                                <React.Fragment key={item.id}>
                                    <CartItem coffee={item} />
                                    <Divider />

                                </React.Fragment>
                            )
                        })
                    }
                    {/* <CartItem coffee={coffees[1]} />
                    <Divider /> */}
                    <OrderDetails>
                        <OrderSpan >
                            <span>Total de Itens</span>
                            <span>R$ {productsPrice}</span>
                        </OrderSpan>
                        <OrderSpan >
                            <span>Entrega</span>
                            <span>R$ {deliveryPrice}</span>
                        </OrderSpan>
                        <OrderSpan bold>
                            <span>Total</span>
                            <span>R$ {totalPrice}</span>
                        </OrderSpan>
                    </OrderDetails>
                    <PurchaseButton disabled={isSubmitting} onClick={()=>{handleCreateNewOrder(getValues())}}>Confirmar Pedido</PurchaseButton>
                </InfoItemsContainer>
            </OrderInfoContainer>
        </CheckoutContainer>

    )
}