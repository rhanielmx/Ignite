import { IntroContainer, IntroInfoContainer, IntroInfoSubtitle, IntroInfoTitle, ItemsContainer, ItemsContainerIcon, ItemsContainerItem, Wrapper } from "./styles";
import introCoffee from '../../../../assets/intro-coffee.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Intro() {
    return (
            <IntroContainer >
                <IntroInfoContainer>
                    <IntroInfoTitle>Encontre o café perfeito para qualquer hora do dia</IntroInfoTitle>
                    <IntroInfoSubtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</IntroInfoSubtitle>
                    <ItemsContainer>
                        <ItemsContainerItem >
                            <ItemsContainerIcon backgroundColor="yellow-dark">
                                <ShoppingCart size={16} weight="fill" color="white" />
                            </ItemsContainerIcon>
                            Compra Simples e Segura
                        </ItemsContainerItem>
                        <ItemsContainerItem>
                            <ItemsContainerIcon backgroundColor="base-text">
                                <Package size={16} weight="fill" color="white" />
                            </ItemsContainerIcon>
                            Embalagem mantém o café intacto
                        </ItemsContainerItem>
                        <ItemsContainerItem>
                            <ItemsContainerIcon backgroundColor="yellow">
                                <Timer size={16} weight="fill" color="white" />
                            </ItemsContainerIcon>
                            Entrega rápida e rastreada
                        </ItemsContainerItem>
                        <ItemsContainerItem>
                            <ItemsContainerIcon backgroundColor="purple">
                                <Coffee size={16} weight="fill" color="white" />
                            </ItemsContainerIcon>
                            O café chega fresquinho até você
                        </ItemsContainerItem>
                    </ItemsContainer>
                </IntroInfoContainer>
                <img src={introCoffee}></img>
            </IntroContainer>
    )
}