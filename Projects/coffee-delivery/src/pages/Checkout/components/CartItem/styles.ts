import styled from "styled-components";

export const CartItemContainer = styled.main`
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0.5rem;

    img {
        width: 4rem;
        height: 4rem;
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.3;
        color: ${(props)=>props.theme["base-text"]}; 
        
    }
`

export const CartItemDetails = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    
    color: ${(props)=>props.theme["base-subtitle"]}; 
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    
`

export const Divider = styled.div`
    height: 1px;
    background-color: ${(props)=>props.theme["base-button"]};
`