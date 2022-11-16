import styled from "styled-components";

interface HomeContainerProps {
    imageUrl: string;
}

export const HomeContainer = styled.div<HomeContainerProps>`
    background-image: url(${(props) => props.imageUrl});
    background-repeat: no-repeat;
`
export const CoffeeDisplay = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10rem;
`

export const CoffeeDisplayTitle = styled.div`
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 3.375rem;
    color: ${(props)=>props.theme['base-title']};
`

export const CoffeeDisplayItems = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-column-gap: 2rem;
    grid-row-gap: 2.5rem;
`
