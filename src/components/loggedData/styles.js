import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 100%;

    align-items: center;

    flex-direction: column;

    margin-top: 1rem;

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

    .info{
        width: 360px;

        padding: 1REM 0;

        border: 2px solid #CECECE;
        border-radius: 6px;

        margin: 1rem;

        display: flex;

        flex-direction: column;

        align-items: center;

        .first{
            display: flex;

            width: 95%;

            justify-content: space-between;

            h1{
                font-weight: 500;
                font-size: 16px;  


            }
        }

        .second{
            display: flex;

            width: 95%;

            justify-content: space-between;

            margin-top: 1rem;

            h1{
                font-weight: 600;
                font-size: 14px;
            }

            h2{
                font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height */


color: #BBB8B8;
            }
        }
    }
`;