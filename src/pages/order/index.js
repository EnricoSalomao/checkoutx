import React from 'react';
import Header from '../../components/header';
import HeaderCheckout from '../../components/headerCheckout';
import { Container } from './styles';

import Check from '../../assets/Check.png'
import { useHistory } from 'react-router-dom';


import { useParams } from 'react-router';

export default function Order() {
    let { id } = useParams();

    let history = useHistory()

    function go(){
        history.push(`/${id}`)
    }

 return (
    <Container>
        <HeaderCheckout data={false}/>
        <img src={Check} className={"check"}/>
        <h1>Pedido feito!</h1>
        <h2>Seu pagamento foi recebido e você receberá uma notificação com o  status do seu pedido.</h2>
        <button onClick={go}>Voltar para a home</button>
    </Container>
 );
}