import styled from "styled-components";

interface IntroContainerProps {
    imageUrl: string;
}
export const IntroContainer = styled.div<IntroContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 34rem;
    padding: 5.75rem 10rem;
    gap: 3.5rem;
    background-image: url(${(props) => props.imageUrl});
`

export const IntroInfoTitle = styled.p`
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    width: 36.75rem;
    color: ${(props)=>props.theme["base-title"]};
    margin-bottom: 1rem;
`

export const IntroInfoSubtitle = styled.p`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
    width: 36.75rem;
    color: ${(props)=>props.theme["base-subtitle"]}
`

export const IntroInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 100%;
    justify-content: space-between;
`

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`