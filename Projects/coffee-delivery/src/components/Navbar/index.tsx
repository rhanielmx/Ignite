import { ActionsContainer, CartContainer, LocationContainer, NavContainer } from "./styles";
import coffeeLogo from '../../assets/coffe-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { OrdersContext } from "../../contexts/OrdersContext";
import { useContext } from "react";

export function Navbar() {
    const { cart } = useContext(OrdersContext)
    return (
        <>
            <NavContainer>
                <img src={coffeeLogo} alt="" onClick={()=>window.location.href='/'} />
                <ActionsContainer>
                    <LocationContainer>
                        <MapPin size={22} weight="fill" /> Itapipoca, CE
                    </LocationContainer>
                    <CartContainer href="/checkout" numberOfNotifications={cart.length}>
                        <ShoppingCart size={22} weight="fill" />
                    </CartContainer>
                </ActionsContainer>
            </NavContainer>
        </>
    )
}