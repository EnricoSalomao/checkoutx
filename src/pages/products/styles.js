import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 100vw;

    justify-content: center;
    align-items: center;

    flex-direction: column;

    img{
        width: 100%;

        border-bottom: 3px solid #000;
    }

    .close{
        position: fixed;

        top: 1rem;
        left: 1rem;
    }

    .info{
        display: flex;
        width: 95%;

        margin-top: 1rem;

        flex-direction: column;

        h1{
            font-weight: 500;
            font-size: 18px;
        }

        .sub-info{
            display: flex;

            align-items: center;

            margin-top: 1rem;

            h2{
                font-weight: 600;
                font-size: 16px;
            }

            .error{
                font-weight: 500;
                font-size: 16px;

                color: #BBB8B8;

                margin-left: 1rem;

                text-decoration: line-through;
                text-decoration-color: red;
            }
        }

        .description{
                margin-top: 1rem;

                h1{
                    font-weight: 500;
                    font-size: 13px;     
                }
            }
    }

    .purchase{
        display: flex;

        width: 100%;

        background: #000;

        justify-content: center;
        align-items: center;

        position: fixed;

        height: 70px;

        bottom:0;

        h1{
            font-weight: 500;
            font-size: 24px;

            color: #fff;
        }
    }
`;