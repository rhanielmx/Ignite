import { HeaderContainer } from "./styles";
import introBackground from '../../assets/cover.png'
import githubLogo from '../../assets/logo.svg'

export function Header(){
    return (
        <HeaderContainer imageUrl={introBackground}>
            <img src={githubLogo} />
        </HeaderContainer>
    )
}