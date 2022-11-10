import { CoffeeDisplay, CoffeeDisplayItems, CoffeeDisplayTitle, IntroContainer, IntroInfoContainer, IntroInfoSubtitle, IntroInfoTitle, ItemsContainer, ItemsContainerIcon, ItemsContainerItem, Wrapper } from "./styles";
import introBackground from '../../assets/intro-background.svg'
import introCoffee from '../../assets/intro-coffee.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { CoffeeCard } from "../CoffeeCard";
import { COFFEES } from "../../data/Coffees";

export function Intro() {
    return (
        <Wrapper imageUrl={introBackground}>
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
            <CoffeeDisplay>
                <CoffeeDisplayTitle>Nossos Cafés</CoffeeDisplayTitle>
                <CoffeeDisplayItems>
                    {COFFEES.map(coffee => {
                        return <CoffeeCard name={coffee.name} description={coffee.description} price={coffee.price} tags={coffee.tags} imageUrl={coffee.imageUrl} />
                    })}
                </CoffeeDisplayItems>
            </CoffeeDisplay>
        </Wrapper>
    )
}