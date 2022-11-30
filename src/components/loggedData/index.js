import React, {useContext} from 'react';
import { Container } from './styles';

import { AuthContext } from '../../contexts/auth';
import { useHistory } from 'react-router-dom';
export default function LoggedData() {
    const { user } = useContext(AuthContext);

    let history = useHistory();

    function go(){
        history.push('/order')
    }

 return (
    <Container>
        <div className='info'>
            <div className='first'>
                <h1>Pagamento</h1>
            </div>
            <div className='second'>
                <h1>{user.numbercard}</h1>
                <h2>{user.expire}</h2>
            </div>
        </div>

        <div className='info'>
            <div className='first'>
                <h1>Endereço de entrega</h1>
            </div>
            <div className='second'>
                <h1>Nome: </h1>
                <h2>{user.name}</h2>
            </div>
            <div className='second'>
                <h1>Endereço:</h1>
                <h2>{user.address}, {user.number}</h2>
            </div>
            <div className='second'>
                <h1>Bairro:</h1>
                <h2>{user.district}</h2>
            </div>
            <div className='second'>
                <h1>Cidade:</h1>
                <h2>{user.city}</h2>
            </div>
        </div>

        <button onClick={go}>Finalizar Compra</button>
    </Container>
 );
}