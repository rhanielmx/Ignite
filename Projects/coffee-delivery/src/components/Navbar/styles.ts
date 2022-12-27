import styled, { css } from "styled-components";

export const NavContainer = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 10rem;

    background-color: ${(props) => props.theme.background};
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;

    img:hover {
        cursor: pointer;
    }
    
`
export const ActionsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    position: relative;
`

export const LocationContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;

    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
`
type CartContainerProps = {
    numberOfNotifications?: number
}

export const CartContainer = styled.a<CartContainerProps>`
    padding: 0.5rem;
    border-radius: 8px;

    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    flex: 1;
    
    ${({ numberOfNotifications }) => numberOfNotifications && css`
    &:after {
        content: '${numberOfNotifications}';
        display: flex;
        align-items: center;
        justify-content: center;
        width: 1.25rem;
        height: 1.25rem;

 

        background-color: ${(props) => props.theme["yellow-dark"]};
        color: ${(props) => props.theme.white};
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size:0.75rem;
        border-radius: 50%;

        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
    }
    `
    }
`