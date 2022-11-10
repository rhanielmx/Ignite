import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { CoffeeCardStyled, CoffeeCardTitleStyled, CoffeeCardTagStyled, CoffeeCardDescriptionStyled, CoffeeCardOptionsStyled, CoffeeCardOptionsPriceStyled, CoffeeCardOptionsButtonsStyled, CoffeeCardOptionsQuantityStyled, CoffeeCardOptionsCartButtontyled, CoffeeCardOptionsPriceValueStyled, CoffeeCardTagDisplayStyled, CoffeeImage } from "./styles";

export interface CoffeeCardProps {
    name: string;
    description: string;
    price: number;
    tags: string[];
    imageUrl: string;
}

export function CoffeeCard({ name, description, price, tags, imageUrl }: CoffeeCardProps) {
    return (
        <CoffeeCardStyled>
            <CoffeeImage>
                <img src={imageUrl} width={120} height={120} />
            </CoffeeImage>
            <CoffeeCardTagDisplayStyled>
                {
                    tags.map(tag => <CoffeeCardTagStyled>{tag.toUpperCase()}</CoffeeCardTagStyled>)
                }
            </CoffeeCardTagDisplayStyled>
            <CoffeeCardTitleStyled>{name}</CoffeeCardTitleStyled>
            <CoffeeCardDescriptionStyled>{description}</CoffeeCardDescriptionStyled>
            <CoffeeCardOptionsStyled>
                <CoffeeCardOptionsPriceStyled>
                    R$ <CoffeeCardOptionsPriceValueStyled>{price.toString().padEnd(4, '0')}</CoffeeCardOptionsPriceValueStyled>
                </CoffeeCardOptionsPriceStyled>
                <CoffeeCardOptionsButtonsStyled>
                    <CoffeeCardOptionsQuantityStyled>
                        <Minus size={14} color="purple" onClick={() => { alert('minus') }} />
                        1
                        <Plus size={14} color="purple" onClick={() => { alert('plus') }} />
                    </CoffeeCardOptionsQuantityStyled>
                    <CoffeeCardOptionsCartButtontyled onClick={() => { alert('bought') }}>
                        <ShoppingCart size={22} weight="fill" color="white"></ShoppingCart>
                    </CoffeeCardOptionsCartButtontyled>
                </CoffeeCardOptionsButtonsStyled>
            </CoffeeCardOptionsStyled>
        </CoffeeCardStyled>
    )
}