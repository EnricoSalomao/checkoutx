import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 100%;

    justify-content: center;

    margin-top: -1rem;

    .forms{
        display: flex;

        width: 100%;

        align-items: center;

        flex-direction: column;

        .input-area{
            display: flex;

            width: 90%;

            flex-direction: column;

            margin-top: 1.5rem;

            margin-left: 1.5rem;

            h1{
                font-weight: 500;
                font-size: 18px;
            }

            input{
                width: 90%;
                height: 44px;

                background: #EDEDED;
                border-radius: 8px;

                font-weight: 500;
                font-size: 16px;

                color: #787878;

                border: 0;

                padding-left: 1rem;
                margin-top: .5rem;
            }
        }

        button{
            width: 90%;
            height: 50px;

            background: #099FC0;
            border-radius: 12px;

            font-weight: 600;
            font-size: 20px;

            letter-spacing: 0.12em;

            color: #FFFFFF;

            border: 0;

            margin-top: 2rem;
        }
    }
`;