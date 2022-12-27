import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { addCoffeeToCartAction, completeCurrentOrderAction, removeCoffeeFromCartAction } from '../reducers/orders/actions';
import { CoffeeType, ordersReducer } from '../reducers/orders/reducer';




export type OrderData = {
  CEP: string;
  road: string;
  number: string;
  complement?: string;
  district: string;
  city: string;
  estate: string;
  date: string;
  id: string;
  paymentPreference: string;
};

interface OrderProps {
  totalPrice: number;
  cart: CoffeeType[];
  date: string;
  paymentPreference: string;
  road: string;
  number: string;
  city: string;
  estate: string;
  id: string;
  district: string;
}

interface OrdersContextProps {
  orders: OrderProps[];
  cart: CoffeeType[];
  productsPrice: number;
  deliveryPrice: number;
  totalPrice: number;
  addCoffeeToCart: (coffee: CoffeeType, amount: number) => void;
  removeCoffeeFromCart: (coffeeId: string) => void;
  completeCurrentOrder: (cart: CoffeeType[], orderData: OrderData) => void;
}

export const OrdersContext = createContext({} as OrdersContextProps);

interface OrdersContextProviderProps {
  children: ReactNode;
}

export const OrdersProvider = ({ children }: OrdersContextProviderProps) => {
  const [ordersState, dispatch] = useReducer(
    ordersReducer,
    {
      orders: [],
      currentOrder: {
        cart: [],
        totalPrice: 0,
        deliveryPrice: 0,
        productsPrice: 0,
      },
    },
    () => {
      const storedStateAsJSON = localStorage.getItem('@coffee-delivery/orders/1.0.0');

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return {
        orders: [],
        currentOrder: {
          cart: [],
          totalPrice: 0,
          deliveryPrice: 0,
          productsPrice: 0,
        },
      };
    },
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(ordersState);

    localStorage.setItem('@coffee-delivery/orders/1.0.0', stateJSON);
  }, [ordersState]);

  const { orders, currentOrder } = ordersState;
  const { cart, totalPrice, deliveryPrice, productsPrice } = currentOrder;

  const addCoffeeToCart = (coffee: CoffeeType, amount: number) => {
    dispatch(addCoffeeToCartAction(coffee, amount));
  };

  const removeCoffeeFromCart = (coffeeId: string) => {
    dispatch(removeCoffeeFromCartAction(coffeeId));
  };

  // const completeCurrentOrder = (orderData: OrderData) => {
  //   dispatch({
  //     type: 'COMPLETE_CURRENT_ORDER',
  //     payload: {
  //       cart,
  //       orderData,
  //     },
  //   });
  // };
  const completeCurrentOrder = (cart: CoffeeType[] ,orderData: OrderData) => {
    dispatch(completeCurrentOrderAction(cart, orderData));
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        cart,
        totalPrice,
        deliveryPrice,
        productsPrice,
        addCoffeeToCart,
        removeCoffeeFromCart,
        completeCurrentOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};