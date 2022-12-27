import styled from "styled-components";

export const FormContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: 2.5rem;
    grid-gap: 1rem;
`

export const InputLine = styled.div`
    grid-column: span 12;
    column-gap: 0.75rem;
    position: relative;
`

export const BaseInput = styled('input')<{ columns: number }>`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props)=>props.theme["base-text"]};

    grid-column: span ${(props) => props.columns};
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-button"]};
    border-radius: 0.25rem;
    padding: 0.75rem;
    gap: 0.25rem;

    &::placeholder {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.3;
        color: ${(props) => props.theme["base-label"]};
    }

    &:active {
        outline: ${(props) => props.theme["yellow-dark"]};
    }
`