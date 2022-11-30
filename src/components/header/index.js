import React from 'react';
import { Container } from './styles';

import Logo from '../../assets/reserva-logo.png'
import Bell from '../../assets/bell.png'
import Logo2 from '../../assets/integralmedica.png'

import { useParams } from 'react-router';

export default function Header() {
    let { id } = useParams();
 return (
    <Container>
        {id == 'reserva' ? (
            <img src={Logo}/>
        ) : (
            <img src={Logo2}/>
        )}
        <img src={Bell} className={"bell"}/>
    </Container>
 );
}