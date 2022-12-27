import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface CartItem {
	// id: string
	title: string
	imageUrl: string
	quantity: number
	price: number
}

export interface ShoppingCartState {
	items: CartItem[]
	totalValue: number
}


export type CoffeeType = {
	title: string;
	tags: string[];
	amount: number;
	description: string;
	srcImg: string;
	price: string;
	id: string;
};

export const getNewOrderInfo = (cart: CoffeeType[]) => {
	console.log('djasid', cart)
	// cart = []
	// if (cart.length === 0) {
	// 	return { deliveryPrice: 0, productsPrice: 0, totalPrice: 0, cart: [] }
	// }
	const productsPrice = cart.reduce(
		(previousValue: number, coffee: CoffeeType) => {
			return (
				previousValue +
				parseFloat(coffee.price.replace(',', '.')) * coffee.amount
			);
		},
		0,
	);

	const deliveryPrice = cart.length * 2;
	const totalPrice = productsPrice + deliveryPrice;

	return { deliveryPrice, productsPrice, totalPrice, cart };
};

export function ordersReducer(state: any, action: any) {
	switch (action.type) {
		case 'ADD_COFFEE_TO_CART': {
			const { orders, currentOrder } = state;
			const { cart } = currentOrder;

			return produce(state, (draft) => {
				let coffeeIndex = cart.findIndex((coffee) => {
					return coffee.id === action.payload.coffee.id
				})

				if(!!coffeeIndex && action.payload.quantity < 0) {
					console.log('a')
					return state
				}
				console.log(coffeeIndex)
				if (coffeeIndex < 0) {
					// let cart = getNewOrderInfo({ ...action.payload.coffee, amount: 1 })
					// console.log('0',state.currentOrder.cart)
					let newCart = state.currentOrder.cart.filter((coffee) => {
						return coffee.id !== action.payload.coffee.id
					})

					newCart.push({ ...action.payload.coffee, amount: 1 })
					// draft.currentOrder.cart[coffeeIndex] = [{ ...action.payload.coffee, amount: 1 }]
					draft.currentOrder = getNewOrderInfo(newCart)
					console.log('a')
				} else {
					console.log('b')
					let amount = state.currentOrder.cart[coffeeIndex].amount
					let quantity = amount <= 0 ? 0 : action.payload.quantity
					console.log(amount, quantity)
					draft.currentOrder.cart[coffeeIndex].amount += quantity
					// draft.currentOrder.cart[coffeeIndex].amount += action.payload.quantity
					console.log('haha', getNewOrderInfo(draft.currentOrder.cart))
					let newCart = draft.currentOrder.cart

					draft.currentOrder = getNewOrderInfo(newCart)
				}
			})
		}

		case 'REMOVE_COFFEE_FROM_CART': {
			// const { orders, currentOrder } = state;
			// const { cart } = currentOrder;

			// let newCart = cart.filter((coffee: CoffeeType) => {
			// 	return coffee.id !== action.payload.id;
			// });

			// const newCurrentOrder = getNewOrderInfo(newCart);
			// //   toast.success('Café removido do carrinho com sucesso!');
			// return { orders, currentOrder: newCurrentOrder };

			return produce(state, (draft) => {
				let newCart = state.currentOrder.cart.filter((coffee) => {
					return coffee.id !== action.payload.id
				})

				draft.currentOrder = getNewOrderInfo(newCart)
			})
		}

		case 'COMPLETE_CURRENT_ORDER':
			const { orders, currentOrder } = state;
			const { cart, totalPrice } = currentOrder;

			const newCompleteOrder = {
				cart,
				totalPrice,
				...action.payload.orderData,
			};

			return {
				orders: [newCompleteOrder, ...orders],
				currentOrder: {
					cart: [],
					totalPrice: 0,
					deliveryPrice: 0,
					productsPrice: 0,
				},
			};

		default:
			return state;
	}
}
