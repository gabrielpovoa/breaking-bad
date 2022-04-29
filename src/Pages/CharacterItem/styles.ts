import styled from 'styled-components';

export const Container = styled.div`
    width: 360px;
    overflow: hidden;
    box-shadow: 0px 0px 15px -5px;
    cursor: pointer;


    
    @media (max-width: 768px) {
        display: flex;
        justtify-content: center;
        flex-direction: column;
        width: 100%;
    }
    @media (max-width: 450px) {
        margin: 0 auto;
        width: 100%;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    overflow: hidden;
    object-fit: cover;
    height: 500px; width: 100%;
`;

export const Content = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: .8rem;
    width: 100%;
    border-top: .6rem solid black;
    padding: .6rem 1rem;
`;

export const ContentTitle = styled.div`
    font-size: 1.3rem;
`;

export const ContentInfo = styled.div`
    font-size: 1.5rem;
    letter-spacing: 2px;

    && p {
        padding: .7rem 0;
    }
`;