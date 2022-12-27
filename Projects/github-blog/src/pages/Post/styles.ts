import styled from "styled-components";

export const PostContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 54rem;
    margin-top: -5.5rem;
`

export const PostInfo = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme['base-profile']};
    padding: 2rem;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    div {
        display: flex;
        justify-content: space-between;
        text-transform: uppercase;
            
        a {
            font-family: 'Nunito';
            font-weight: 700;
            font-size: 0.75rem;
            line-height: 1.6;
            text-decoration: none;
            color: ${props => props.theme.blue};
            gap: 0.5rem;
        }
    }

    > span {
            display: inline-flex;
            font-family: 'Nunito';
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: 0em;
            text-align: left;
            color: ${props => props.theme["base-title"]};
            margin: 1.25rem 0 0.5rem;
        }
`

export const LinksContainer = styled.p`
    display: flex;
    gap: 2rem;
    width: fit-content;
    align-items: center;
    margin: 0;
    padding: 0;
    height: fit-content;
    
    span, a {        
        display: flex;
        gap: 0.5rem;
        text-decoration: none;
        align-items: center;
        color: ${props => props.theme["base-span"]};
        font-family: 'Nunito';
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6;
    }
`

export const PostBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
    max-width: 54rem;
    color: ${props => props.theme["base-text"]};
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 400;

    h1, h2, h3, h4, h5, h6 {
        color: ${props => props.theme["base-title"]};
    }

    pre {
        white-space: pre-wrap;
        overflow-wrap: break-word;
    }

    strong {
        font-family: 'Nunito';
        font-weight: 700;
    }

    a {
        color: ${props => props.theme.blue};
    }

    ul, ol {
        
        margin-left: 1rem;     
    }
    
    img { 
        max-width: 50rem;
    }

`