import { IntroContainer, IntroInfoContainer, IntroInfoSubtitle, IntroInfoTitle, ItemsContainer } from "./styles";
import introBackground from '../../assets/intro-background.svg'
import introCoffee from '../../assets/intro-coffee.svg'

export function Intro() {
    return (
        <IntroContainer imageUrl={introBackground}>
            <IntroInfoContainer>
                <div>
                    <IntroInfoTitle>Encontre o café perfeito para qualquer hora do dia</IntroInfoTitle>
                    <IntroInfoSubtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</IntroInfoSubtitle>
                </div>
                <ItemsContainer>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                </ItemsContainer>
            </IntroInfoContainer>
            <img src={introCoffee}></img>
        </IntroContainer>
    )
}