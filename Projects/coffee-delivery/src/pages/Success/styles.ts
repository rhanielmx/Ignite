import styled from "styled-components";

export const SuccessContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 6.375rem;
    position: relative;

    section > span:first-child {
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        font-weight: 800;
        line-height: 1.3;
        letter-spacing: 0em;
        text-align: left;
        color: ${props => props.theme["yellow-dark"]}
    }

    img {
        position: absolute;
        bottom: 0;
        right: 0
    }    
    
   
`


export const SuccessInfo = styled.section`
    display: flex;
    flex-direction: column;
    gap:0.25rem;
    color: ${props => props.theme["base-subtitle"]};
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: 0em;
    text-align: left;

`

export const BorderComponent = styled.div`
    background: linear-gradient(102.89deg, ${props => props.theme.yellow} 2.61%, ${props => props.theme.purple} 98.76%);
    border-image-source: linear-gradient(102.89deg, ${props => props.theme.yellow} 2.61%, ${props => props.theme.purple} 98.76%);
    padding: 1px;
    border-radius: 6px 36px;
    margin-top: 2.5rem;
`

export const SuccessOrderDetails = styled.div`
    display: flex;
    height: max-content;
    flex-direction: column;
    gap: 2rem;
    font-size: 1rem;
    padding: 2.5rem;
    border-radius: 6px 36px;
    background: ${props => props.theme.background};
`
interface DetailsCardsProps {
    variant: 'local' | 'time' | 'payment'
}

export const DetailsCards = styled('p')`
    display: flex;
    gap: 0.75rem;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
    }
`

export const DetailsCardsIcon = styled('div') <DetailsCardsProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;

    width: 32px;
    height: 32px;
    border-radius: 1000px;
    background-color: ${props => props.variant === 'local' ? props.theme.purple : (
        props.variant === 'time' ? props.theme.yellow : props.theme["yellow-dark"]
    )};
    svg {
        
        color: ${props => props.theme.white};

    }
`