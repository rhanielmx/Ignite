import { ActionsContainer, CartContainer, LocationContainer, NavContainer } from "./styles";
import coffeeLogo from '../../assets/coffe-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Navbar() {
    return (
        <>
            <NavContainer>
                <img src={coffeeLogo} alt="" />
                <ActionsContainer>
                    <LocationContainer>
                        <MapPin size={22} weight="fill" /> Itapipoca, CE
                    </LocationContainer>
                    <CartContainer numberOfNotifications={2}>
                        <ShoppingCart size={22} weight="fill" />
                    </CartContainer>
                </ActionsContainer>
            </NavContainer>
        </>
    )
}