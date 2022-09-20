import React from 'react';
import { Container } from './styles';

import Logo from '../../assets/reserva-logo.png'
import Bell from '../../assets/bell.png'

export default function Header() {
 return (
    <Container>
        <img src={Logo}/>
        <img src={Bell} className={"bell"}/>
    </Container>
 );
}