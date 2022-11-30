import React, { useContext } from 'react';
import { Container } from './styles';

import { AuthContext } from '../../contexts/auth';

import InputMask from "react-input-mask";

export default function UserDataForms() {
    const { name, setName, cpf, setCpf, email, setEmail, celular, setCelular, setLevel, setCep, cep } = useContext(AuthContext);
 return (
    <Container>
        <div className='forms'>
            <div className='input-area'>
                <h1>CPF</h1>
                <InputMask   
                mask={'999.999.999-99'}
                placeholder="Insira seu CPF"
                value={cpf}
                onChange={text => setCpf(text.target.value)}
                />
            </div>
            <div className='input-area'>
                <h1>Número de celular</h1>
                <InputMask   
                mask={'(99)99999-9999'}
                placeholder="(00) 00000-0000"
                value={celular}
                onChange={text => setCelular(text.target.value)}
                />
            </div>
            <div className='input-area'>
                <h1>Nome completo</h1>
                <input
                placeholder="Insira seu nome completo"
                value={name}
                onChange={text => setName(text.target.value)}
                />
            </div>
            <div className='input-area'>
                <h1>E-mail</h1>
                <input
                placeholder="email@email.com"
                value={email}
                onChange={text => setEmail(text.target.value)}
                />
            </div>
            <div className='input-area'>
                <h1>cep</h1>
                <InputMask   
                mask={'99999-999'}
                placeholder="Insira o cep para entrega"
                value={cep}
                onChange={text => setCep(text.target.value)}
                />
            </div>

            <button onClick={() => setLevel(2)}>
                Cadastrar
            </button>
        </div>
    </Container>
 );
}