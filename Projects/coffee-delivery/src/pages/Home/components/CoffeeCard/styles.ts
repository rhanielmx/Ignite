import styled from "styled-components";


export const CoffeeCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    max-width: 16rem;
    padding: 0 1.25rem;
    border-top-right-radius: 25%;
    background-color: ${(props) => props.theme['base-card']};
`

export const CoffeeImage = styled.div`
    position: relative;
    top: -1.25rem;
`

export const CoffeeCardTitleStyled = styled.span`
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
`

export const CoffeeCardDescriptionStyled = styled.div`
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
    text-align: center;
    margin: 0.5rem;
    color: ${(props) => props.theme['base-label']};
`

export const CoffeeCardTagDisplayStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0.75rem 0;
    gap: 0.25rem;
`

export const CoffeeCardTagStyled = styled.span`
    font-family: 'Roboto';
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 1.3;
    width: fit-content;
    padding: 0.25rem 0.5rem;
    border-radius: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
`

export const CoffeeCardOptionsStyled = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.25rem;
    gap: 29px;
`
export const CoffeeCardOptionsPriceStyled = styled.div`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.3;
`

export const CoffeeCardOptionsPriceValueStyled = styled.span`
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.3;
`


export const CoffeeCardOptionsButtonsStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem
`

export const CoffeeCardOptionsQuantityStyled = styled.div`
    display: flex;
    flex-direction: row;
    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    gap: 0.25rem;
    padding: 0 0.25rem;
    border-radius: 0.25rem;
    color: ${(props) => props.theme['base-title']};
    background-color: ${(props) => props.theme['base-button']};
    align-items: center;

    &:hover{
        cursor: pointer;
    }
`

export const CoffeeCardOptionsCartButtontyled = styled.div`
    display: flex;
    border-radius: 0.25rem;
    padding: 0.25rem;
    background-color: ${(props) => props.theme['purple-dark']};

    &:hover{
        cursor: pointer;
    }

`