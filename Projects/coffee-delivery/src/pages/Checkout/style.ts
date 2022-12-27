import styled from "styled-components";

export const TitleInfoContainer = styled.span`
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 2.3;
    color: ${(props) => props.theme["base-subtitle"]};
`

export const CheckoutContainer = styled.main`
    display: flex;
    gap: 2rem;
    padding-top: 2.5rem;
`

export const InfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;    
`


export const BillingInfoContainer = styled(InfoContainer)`
    width: 640px;
`

export const BillingHeader = styled.header`
    display: flex;
    gap: 0.5rem;

    p {
        display: flex;
        flex-direction: column;
        gap: 0.125rem;
    }
`

export const BillingHeaderSubtitle = styled.span`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme["base-subtitle"]};
`

export const BillingHeaderText = styled.span`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme["base-text"]};
`



export const OrderInfoContainer = styled(InfoContainer)`  
    width: 28rem;
    `

export const InfoItemsContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: fit-content;
    padding: 2.5rem;
    background-color: ${(props) => props.theme["base-card"]};
    border-radius: 0.75rem;
`

export const PaymentButtonscontainer = styled.section`
    display: flex;
    gap: 0.75rem;
`

export const PaymentButton = styled('button') <{ selected: boolean }>`
    display: flex;
    flex: 1 1 0px;
    align-items:center;
    gap: 0.75rem;
    padding: 1rem;
    background-color: ${(props) => props.selected ? props.theme["purple-light"] : props.theme["base-button"]};


    outline: ${(props) => props.selected ? `1px solid ${props.theme.purple}` : ''};
    border-radius: 0.375rem;

    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
    text-transform: uppercase;

    &:hover {
        cursor: pointer;
    }
`

export const OrderDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`

export const OrderSpan = styled('span') <{ bold?: boolean }>`
    display: flex;
    justify-content: space-between;

    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.bold ? '1.25rem' : '0.875rem'};
    font-weight: ${(props) => props.bold ? '700' : '400'};
    line-height: 1.3;

`

export const PurchaseButton = styled.button`
    padding: 0.75rem 0.5rem;

    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.6;
    text-transform: uppercase;

    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    
    border: none;
    border-radius: 0.375rem;

    &:hover {
        background-color: ${(props) => props.theme["yellow-dark"]};
        cursor: pointer;
    }
`