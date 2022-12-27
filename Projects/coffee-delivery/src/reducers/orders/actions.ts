import { OrderData } from '../../contexts/OrdersContext'
import { CartItem, CoffeeType } from './reducer'

export enum ActionTypes {
    ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
    REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
    COMPLETE_CURRENT_ORDER = 'COMPLETE_CURRENT_ORDER',
}

export function addCoffeeToCartAction(coffee: CoffeeType, quantity: number) {
    return {
        type: 'ADD_COFFEE_TO_CART',
        payload: {
            coffee,
            quantity,
        },
    }
}

export function removeCoffeeFromCartAction(coffeeId: string) {
    return {
        type: 'REMOVE_COFFEE_FROM_CART',
        payload: {
          id: coffeeId,
        },
      }
}

export function completeCurrentOrderAction(cart: CoffeeType[], orderData: OrderData) {
    return {
      type: 'COMPLETE_CURRENT_ORDER',
      payload: {
        cart,
        orderData,
      },
    }
}