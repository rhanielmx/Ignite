import { CoffeeDisplay, CoffeeDisplayItems, CoffeeDisplayTitle, HomeContainer } from "./style";

import introBackground from '../../assets/intro-background.svg'
import coffees from "../../data/Coffees";

import { Intro } from "./components/Intro";
import { CoffeeCard } from "./components/CoffeeCard";



export function Home(){
    return (
        <HomeContainer imageUrl={introBackground}>
            <Intro/>
            <CoffeeDisplay>
                <CoffeeDisplayTitle>Nossos Cafés</CoffeeDisplayTitle>
                <CoffeeDisplayItems>
                    {coffees.map(coffee => {
                        return <CoffeeCard coffee={coffee} />
                    })}
                </CoffeeDisplayItems>
            </CoffeeDisplay>
        </HomeContainer>
    )
}