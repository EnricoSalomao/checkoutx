import React from 'react';
import { Container } from './styles';

import Logo from '../../assets/reserva-logo.png'

export default function HeaderCheckout() {
 return (
    <Container>
        <img src={Logo}/>

        <div className='header-info'>
            <h1>Sacola</h1>
        </div>
    </Container>
 );
}