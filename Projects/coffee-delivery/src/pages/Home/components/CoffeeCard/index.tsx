import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { OrdersContext } from "../../../../contexts/OrdersContext";
import { CoffeeType } from "../../../../reducers/orders/reducer";
import { CoffeeCardStyled, CoffeeCardTitleStyled, CoffeeCardTagStyled, CoffeeCardDescriptionStyled, CoffeeCardOptionsStyled, CoffeeCardOptionsPriceStyled, CoffeeCardOptionsButtonsStyled, CoffeeCardOptionsQuantityStyled, CoffeeCardOptionsCartButtontyled, CoffeeCardOptionsPriceValueStyled, CoffeeCardTagDisplayStyled, CoffeeImage } from "./styles";

export interface CoffeeCardProps {
    coffee: CoffeeType;
    // name: string;
    // description: string;
    // price: number;
    // tags: string[];
    // imageUrl: string;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
    const { addCoffeeToCart } = useContext(OrdersContext)
    return (
        <CoffeeCardStyled>
            <CoffeeImage>
                <img src={coffee.srcImg} width={120} height={120} />
            </CoffeeImage>
            <CoffeeCardTagDisplayStyled>
                {
                    coffee.tags.map(tag => <CoffeeCardTagStyled>{tag.toUpperCase()}</CoffeeCardTagStyled>)
                }
            </CoffeeCardTagDisplayStyled>
            <CoffeeCardTitleStyled>{coffee.title}</CoffeeCardTitleStyled>
            <CoffeeCardDescriptionStyled>{coffee.description}</CoffeeCardDescriptionStyled>
            <CoffeeCardOptionsStyled>
                <CoffeeCardOptionsPriceStyled>
                    R$ <CoffeeCardOptionsPriceValueStyled>{coffee.price.toString().padEnd(4, '0')}</CoffeeCardOptionsPriceValueStyled>
                </CoffeeCardOptionsPriceStyled>
                <CoffeeCardOptionsButtonsStyled>
                    <CoffeeCardOptionsQuantityStyled>
                        <Minus size={14} color="purple" onClick={() => { addCoffeeToCart(coffee, -11) }} />
                        1
                        <Plus size={14} color="purple" onClick={() => { addCoffeeToCart(coffee, 1) }} />
                    </CoffeeCardOptionsQuantityStyled>
                    <CoffeeCardOptionsCartButtontyled onClick={() => { window.location.href = '/checkout' }}
                     as='div'
                     primary
                     >
                        <ShoppingCart size={22} weight="fill" color="white"></ShoppingCart>
                    </CoffeeCardOptionsCartButtontyled>
                </CoffeeCardOptionsButtonsStyled>
            </CoffeeCardOptionsStyled>
        </CoffeeCardStyled>
    )
}