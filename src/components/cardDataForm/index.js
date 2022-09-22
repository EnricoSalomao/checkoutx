import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';
import { Container } from './styles';

export default function CardDataForm() {
    const { namecard, setNamecard, numbercard, setNumbercard, expire, setExpire, cvv, setCvv, setLevel} = useContext(AuthContext);
 return (
    <Container>
        <div className='forms'>
            <div className='input-area'>
                <h1>Nome do responsável</h1>
                <input
                placeholder="Insira seu nome completo"
                value={namecard}
                onChange={text => setNamecard(text.target.value)}
                />
            </div>

            <div className='input-area'>
                <h1>Número do cartão</h1>
                <input
                placeholder="**** **** **** ****"
                value={numbercard}
                onChange={text => setNumbercard(text.target.value)}
                />
            </div>

            <div className='input-area'>
                <h1>Validade</h1>
                <input
                placeholder="Mês/ano"
                value={expire}
                onChange={text => setExpire(text.target.value)}
                />
            </div>

            <div className='input-area'>
                <h1>cvv</h1>
                <input
                placeholder="***"
                value={cvv}
                onChange={text => setCvv(text.target.value)}
                />
            </div>

            <button onClick={() => setLevel(3)}>
                Cadastrar
            </button>
        </div>
    </Container>
 );
}