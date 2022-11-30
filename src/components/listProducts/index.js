import React from 'react';
import { Container } from './styles';

import Logo from '../../assets/nike.png'
import Logo2 from '../../assets/huger.png'

import { useHistory } from 'react-router-dom';

import { useParams } from 'react-router';

export default function ListProducts() {
 const history = useHistory();

 let {id} = useParams();

 function goToProduct(){
    history.push(`/${id}/product`)
 }

 return (
    <Container>
        <div className='product' onClick={goToProduct}>
            {id == 'reserva' ? (
                <>
                    <img src={Logo} onClick={goToProduct}/>
                    <h1>Blusa Tricot Dec...</h1>
                    <div className="info">
                        <h2>R$500</h2>
                        <h2 className='discount'>R$700</h2>
                    </div>
                </>
            ) : (
                <>
                    <img src={Logo2} onClick={goToProduct}/>
                    <h1>Huger - Pré-Workout</h1>
                    <div className="info">
                        <h2>R$90</h2>
                        <h2 className='discount'>R$120</h2>
                    </div>
                </>
            )}
        </div>
    </Container>
 );
}