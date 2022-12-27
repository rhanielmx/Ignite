import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react';
import { OrdersContext } from '../../../../contexts/OrdersContext';
import { CoffeeType } from '../../../../reducers/orders/reducer';
import { CoffeeCardOptionsButtonsStyled, CoffeeCardOptionsQuantityStyled, CoffeeCardOptionsCartButtontyled } from '../../../Home/components/CoffeeCard/styles'
import { CartItemContainer, CartItemDetails } from './styles'

interface CartItemProps {
    coffee: CoffeeType;
    // quantity?: number;
    // price?: number;
}


export function CartItem({ coffee }: CartItemProps) {
    const { addCoffeeToCart, removeCoffeeFromCart } = useContext(OrdersContext)
    // console.log('dsdas',coffee)

    return (
        <CartItemContainer>
            <img src={coffee.srcImg} alt="Imagem do Café no carrinho de compras" />
            <CartItemDetails>
                <p><strong>{coffee.amount}x</strong> {coffee.title}</p>
                <CoffeeCardOptionsButtonsStyled>
                    <CoffeeCardOptionsQuantityStyled>
                        <Minus size={14} color="purple" onClick={() => { addCoffeeToCart(coffee, -1) }} />
                        1
                        <Plus size={14} color="purple" onClick={() => { addCoffeeToCart(coffee, 1) }} />
                    </CoffeeCardOptionsQuantityStyled>
                    <CoffeeCardOptionsCartButtontyled
                        onClick={() => { removeCoffeeFromCart(coffee.id) }}
                        as='div'
                    >
                        <Trash size={16} color="#8047F8"></Trash>
                        Remover
                    </CoffeeCardOptionsCartButtontyled>
                </CoffeeCardOptionsButtonsStyled>
            </CartItemDetails>
            <span>R$ {coffee.price}</span>
        </CartItemContainer>
    )
}