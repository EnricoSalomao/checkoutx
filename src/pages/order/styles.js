import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 100vw;

    flex-direction: column;

    align-items: center;


    .check{
        width: 30%;

        margin-top: 4rem;
    }

    h1{
        font-weight: 600;
        font-size: 32px;
        margin-top: 2.5rem;
    }

    h2{
        font-weight: 500;
        font-size: 14px;
        color: #BBB8B8;
        margin-top: 1.5rem;

        text-align: center;
    }

    button{
        width: 300px;
        height: 55px;

        background: #000000;
        border-radius: 12px;
        border: 0;

        font-weight: 500;
        font-size: 14px;

        color: #FFFFFF;

        margin-top: 2rem;
    }
`;