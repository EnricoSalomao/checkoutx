import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';
import { Container } from './styles';

import InputMask from "react-input-mask";

import { useHistory } from 'react-router-dom';

import { useParams } from 'react-router';

export default function CardDataForm() {
    const { namecard, setNamecard, numbercard, setNumbercard, expire, setExpire, cvv, setCvv, signUp, setLevel} = useContext(AuthContext);

    let { id } = useParams();

    let history = useHistory()

    function finish(){
        signUp()
        history.push(`/${id}/order`)
    }
 return (
    <Container>
        <div className='forms'>
            <div className='input-area'>
                <h1>Nome que está no cartão</h1>
                <input
                placeholder="Insira o nome completo"
                value={namecard}
                onChange={text => setNamecard(text.target.value)}
                />
            </div>

            <div className='input-area'>
                <h1>Número do cartão</h1>
                <InputMask   
                mask={'9999 9999 9999 9999'}
                placeholder="**** **** **** ****"
                value={numbercard}
                onChange={text => setNumbercard(text.target.value)}
                />
            </div>

            <div className='input-area'>
                <h1>Validade</h1>
                <InputMask   
                mask={'99/99'}
                placeholder="Mês/ano"
                value={expire}
                onChange={text => setExpire(text.target.value)}
                />
            </div>

            <div className='input-area'>
                <h1>cvv</h1>
                <InputMask   
                mask={'999'}
                placeholder="***"
                value={cvv}
                onChange={text => setCvv(text.target.value)}
                />
            </div>

            <button onClick={finish}>
                Cadastrar
            </button>
        </div>
    </Container>
 );
}