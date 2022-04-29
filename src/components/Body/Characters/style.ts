import styled from 'styled-components';

export const Container = styled.div`
    width: 1200px;
    margin: 4rem auto;
    padding: 2rem 3%;
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    gap: 2rem;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(300px, 1fr));
    }
    @media (max-width: 450px) {
        grid-template-columns: 1fr; 
    }
`;
