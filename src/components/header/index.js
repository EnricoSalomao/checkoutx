import React, { useContext } from 'react';
import { Container } from './styles';

import Logo from '../../assets/reserva-logo.png'
import Bell from '../../assets/bell.png'
import Logo2 from '../../assets/integralmedica.png'

import { useParams } from 'react-router';

import { AuthContext } from '../../contexts/auth';

export default function Header() {
    const { signOut, setLevel } = useContext(AuthContext);

    setLevel(1)

    let { id } = useParams();
 return (
    <Container>
        {id == 'reserva' ? (
            <img src={Logo}/>
        ) : (
            <img src={Logo2}/>
        )}
        <img src={Bell} className={"bell"} onClick={() => signOut()}/>
    </Container>
 );
}