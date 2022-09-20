import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    width: 95%;

    flex-wrap: wrap;

    flex-direction: row;

    margin-top: 2rem;

    .product{
        width: 150px;
        height: 255px;

        background: #FFFFFF;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
        border-radius: 40px;

        img{
            width: 150px;
            height: 200px;

            border-radius: 40px;
        }

        h1{
            font-weight: 500;
            font-size: 11px;
            line-height: 16px;

            color: #000000;

            margin-left: 1rem;
        }

        .info{
            display: flex;

            margin-left: 1rem;

            h2{
                font-weight: 700;
                font-size: 10px;

                color: #000000;
            }

            .discount{
                font-weight: 500;
                font-size: 9px;
                line-height: 14px;
                /* identical to box height */


                color: #CECECE;


                margin-left: .5rem;
            }
        }
    }
`;