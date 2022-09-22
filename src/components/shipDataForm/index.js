import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';
import { Container } from './styles';

export default function ShipDataForm() {
    const { address, setAddress, district, setDistrict, extra, setExtra, signUp} = useContext(AuthContext);

    let history = useHistory()

    function finish(){
        signUp()
        history.push('/order')
    }
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
                <h1>Bairro</h1>
                <input
                placeholder="ex: Jardim Paulista"
                value={district}
                onChange={text => setDistrict(text.target.value)}
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

            <button onClick={finish}>
                Cadastrar
            </button>
        </div>
    </Container>
 );
}