import React, { useContext, useEffect } from 'react';

import { AuthContext } from '../../contexts/auth';
import { Container } from './styles';

export default function ShipDataForm() {
    const { address, setAddress, district, setDistrict, extra, setExtra, setLevel, cep, number, setNumber, city, setCity} = useContext(AuthContext);

    useEffect(() => {
        async function getAddress(){
            const cepvalid = cep?.replace(/[^0-9]/g, '');
    
            if (cepvalid?.length !== 8) {
              return;
            }  
        
            await fetch(`https://viacep.com.br/ws/${cepvalid}/json/`)
              .then((res) => res.json())
              .then((data) => {
                setAddress(data.logradouro)
                setDistrict(data.bairro)
                setCity(data.localidade)
              });
        }

        getAddress()
    }, [])

 return (
    <Container>
        <div className='forms'>
            <div className='input-area'>
                <h1>Endereço completo</h1>
                <input
                placeholder="ex: rua guarara"
                value={address}
                onChange={text => setAddress(text.target.value)}
                />
            </div>

            <div className='input-area'>
                <h1>Número</h1>
                <input
                placeholder="Número do endereço"
                value={number}
                onChange={text => setNumber(text.target.value)}
                />
            </div>

            <div className='input-area'>
                <h1>Bairro</h1>
                <input
                placeholder="ex: Jardim Paulista"
                value={district}
                onChange={text => setDistrict(text.target.value)}
                />
            </div>

            <div className='input-area'>
                <h1>Cidade</h1>
                <input
                placeholder="ex: São Paulo"
                value={city}
                onChange={text => setCity(text.target.value)}
                />
            </div>

            <div className='input-area'>
                <h1>Complemento</h1>
                <input
                placeholder="Opcional"
                value={extra}
                onChange={text => setExtra(text.target.value)}
                />
            </div>

            <button onClick={() => setLevel(3)}>
                Cadastrar
            </button>
        </div>
    </Container>
 );
}