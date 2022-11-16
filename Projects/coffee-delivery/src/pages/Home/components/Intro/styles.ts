import styled, { css } from "styled-components";

interface WrapperProps {
    imageUrl: string;
}

interface ItemsContainerIconProps {
    backgroundColor: "yellow-dark" | "yellow" | "purple" | "base-text";
}

export const Wrapper = styled.div<WrapperProps>`
    padding: 0 10rem;
    background-image: url(${(props) => props.imageUrl});
    background-repeat: no-repeat;
`

export const IntroContainer = styled.div`
    display: flex;
    align-items: center;
    height: 34rem;
    padding: 5.75rem 0;
    gap: 3.5rem;
`

export const IntroInfoTitle = styled.p`
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    width: 36.75rem;
    color: ${(props) => props.theme["base-title"]}
`

export const IntroInfoSubtitle = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
    width: 36.75rem;
    color: ${(props) => props.theme["base-subtitle"]}
`

export const IntroInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: 100%;
    justify-content: space-between;
`

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    row-gap: 1.25rem;
    column-gap: 2.5rem;
`

export const ItemsContainerItem = styled.div`
    font-family: 'Roboto';
    display: flex;
    gap: 0.75rem;
    align-items: center;
    /* color: ${(props) => props.theme["base-text"]} */
`

export const ItemsContainerIcon = styled.div<ItemsContainerIconProps>`
    width: 2rem;
    height: 2rem;
    align-items: center;
    display: flex;
    justify-content: center;
    box-sizing: content-box;
    border-radius: 50%;
    background-color: ${(props) => props.theme[props.backgroundColor]}
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
    /* padding: 0 10rem; */
    color: ${(props)=>props.theme['base-title']};
`

export const CoffeeDisplayItems = styled.div`
    /* padding: 0 10rem; */
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-column-gap: 2rem;
    grid-row-gap: 2.5rem;
`

