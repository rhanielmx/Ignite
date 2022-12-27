import styled from 'styled-components';

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    width: 54rem;
    margin-top: -5.5rem;
`

export const ProfileContainer = styled.section`
    display: flex;
    box-shadow: 0px 2px 28px 0px #00000033;
    border-radius: 10px;
    width: 100%;
    background-color: ${props => props.theme['base-profile']};


    img {
        margin: 2rem 2rem 2rem 2.5rem;
        width: 148px;
        height: 148px;
        border-radius: 8px;
    }
`

export const ProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 2.5rem;

    .name {
        font-family: 'Nunito';
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.3;
        text-align: left;
        color: ${props => props.theme['base-title']}
    }

    .bio {
        padding-top: 0.5rem;
        font-family: 'Nunito';
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
        padding-right: 2rem;
    }

    .name_github{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 2rem;
    }

    .info {
        padding-top: 1.5rem;
        display: flex;
        height: fit-content;
        gap: 1.5rem;
        font-family: 'Nunito';
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
        align-items: center;
        color: ${props => props.theme['base-subtitle']};


        span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        svg {
            color: ${props => props.theme['base-label']};
        }
    }

    .github {
            font-family: 'Nunito';
            font-size: 0.75rem;
            font-weight: 700;
            line-height: 1.6;
            letter-spacing: 0em;
            text-align: left;
            color: ${props => props.theme.blue};
            text-decoration: none;
        }
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;

    p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        padding: 4.5rem 0 0.75rem;

        > :first-child {
            font-family: 'Nunito';
            font-size: 1.125rem;
            font-weight: 700;
            line-height: 1.8;
            color: ${props => props.theme['base-subtitle']};
        }

        span {
            font-family: 'Nunito';
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 1.6;
            letter-spacing: 0em;
            text-align: right;
            color: ${props => props.theme['base-span']};
        }        
    }
  
    
    input {
        padding: 0.75rem 1rem;
        background-color: ${props => props.theme['base-input']};
        border: 1px solid ${props => props.theme['base-border']};
        border-radius: 6px;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6;
        color: ${props => props.theme['base-text']};
        
        &::placeholder{
            color: ${props => props.theme['base-label']};            
        }
    }   
`

export const PostsContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 2rem;
    margin: 3rem 0;
    width: 100%;    
    `

export const PostCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme['base-post']};
    padding: 2rem;
    border-radius: 10px;
    gap: 1.25rem;
    max-width: 26rem;


    &:hover {
        cursor: pointer;
    }
`

export const PostHeader = styled.header`
    display: flex;
    border-radius: 10px;
    max-width: 26rem;
    gap: 1rem;

    > :first-child {
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        font-family: 'Nunito';
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.6;
        color: ${props => props.theme['base-title']};
        max-width: 17.5rem;
        overflow: hidden;
        white-space: nowrap;               
        text-overflow: ellipsis;

    }

    span {
        display: flex;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.6;
        color: ${props => props.theme['base-span']};
    }    
`

export const PostBody = styled.div`
    font-family: 'Nunito';
    max-width: 22rem;
    overflow: hidden;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
    
`