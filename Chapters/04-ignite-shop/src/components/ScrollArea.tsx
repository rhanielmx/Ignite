import * as ScrollArea from '@radix-ui/react-scroll-area';
import Image from 'next/image';
import { Box, BoxItem, BoxItemDetails, ImageContainer, ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from "../styles/components/ScrollArea";

export default function StyledScrollArea({ products, removeItem }) {

    const handleRemoveClick = (product) => {
        removeItem(product)
    }

    return (
        <ScrollAreaRoot>
            <ScrollAreaViewport>
                <Box>
                    {
                        products.map((product) => {
                            return (
                                <BoxItem key={product[1].id}>
                                    <ImageContainer>
                                        <Image src={product[1].image} width={102} height={92} alt="" />
                                    </ImageContainer>
                                    <BoxItemDetails>
                                        <div>
                                            <span>{product[1].quantity}x {product[1].name}</span>
                                            <strong>{product[1].formattedPrice}</strong>
                                        </div>
                                        <button onClick={()=>removeItem(product[0])}>Remover</button>
                                    </BoxItemDetails>
                                </BoxItem>
                            )
                        })
                    }
                </Box>
            </ScrollAreaViewport>
            <ScrollAreaScrollbar orientation="horizontal">
                <ScrollAreaThumb />
            </ScrollAreaScrollbar>
            <ScrollAreaScrollbar orientation="vertical">
                <ScrollAreaThumb />
            </ScrollAreaScrollbar>
            <ScrollArea.Corner />
        </ScrollAreaRoot>
    )
}