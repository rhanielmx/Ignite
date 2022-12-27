import styled from "styled-components";

interface HeaderContainerProps {
    imageUrl: string;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${(props) => props.imageUrl});
    width: 100%;
    padding: 4rem 0 8.375rem;
    background-repeat: no-repeat;    
    background-size: cover;
`