import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 95%;

    justify-content: space-between;

    margin-top: 2rem;

    .selected{
        width: 150px;
        height: 55px;

        background: #000000;
        border-radius: 33px;

        font-weight: 400;
        font-size: 16px;

        color: #FFFFFF;
        border: 0;
    }

    button{
        width: 150px;
        height: 55px;

        background: #f3f3f3;
        border-radius: 33px;

        font-weight: 400;
        font-size: 16px;

        color: #000000;

        border: 0;
    }
`;