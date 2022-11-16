import { CoffeeDisplay, CoffeeDisplayItems, CoffeeDisplayTitle, HomeContainer } from "./style";

import introBackground from '../../assets/intro-background.svg'
import { COFFEES } from "../../data/Coffees";

import { Intro } from "./components/Intro";
import { CoffeeCard } from "./components/CoffeeCard";



export function Home(){
    return (
        <HomeContainer imageUrl={introBackground}>
            <Intro/>
            <CoffeeDisplay>
                <CoffeeDisplayTitle>Nossos Cafés</CoffeeDisplayTitle>
                <CoffeeDisplayItems>
                    {COFFEES.map(coffee => {
                        return <CoffeeCard name={coffee.name} description={coffee.description} price={coffee.price} tags={coffee.tags} imageUrl={coffee.imageUrl} />
                    })}
                </CoffeeDisplayItems>
            </CoffeeDisplay>
        </HomeContainer>
    )
}