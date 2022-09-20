import React from 'react';
import { Container } from './styles';

import Logo from '../../assets/nike.png'

import { useHistory } from 'react-router-dom';

export default function ListProducts() {
 const history = useHistory();

 function goToProduct(){
    history.push('/product')
 }

 return (
    <Container>
        <div className='product' onClick={goToProduct}>
            <img src={Logo}/>
            <h1>Blusa Tricot Dec...</h1>
            <div className="info">
                <h2>R$500</h2>
                <h2 className='discount'>R$700</h2>
            </div>
        </div>
    </Container>
 );
}