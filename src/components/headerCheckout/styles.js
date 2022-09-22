import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 100%;

    flex-direction: column;

    align-items: center;

    img{
        display: flex;

        width: 130px;

        padding: 1rem;
    }

    .header-info{
        display: flex;
        
        width: 100%;

        height: 50px;

        background: #000;

        flex-direction: column;

        align-items: center;

        justify-content: flex-end;

        h1{
            padding: .75rem;
            padding-bottom: 0;
            font-weight: 300;
            font-size: 24px;

            border-bottom: 3px solid red;

            color: #fff;
        }
    }

    .product{
        display: flex;

        width: 100%;

        align-items: center;

        img{
            width: 60px;
            height: 83.08px;
        }

        .info{
            display: flex;
            flex-direction: column;

            h1{
                font-weight: 500;
                font-size: 18px;
            }

            .sub-info{
                display: flex;

                flex-direction: row;

                align-items: center;

                margin-top: .5rem;

                h1{
                    font-weight: 600;
                    font-size: 18px;
                }

                svg{
                    margin-left: .5rem;
                }
            }
        }
    }
`;