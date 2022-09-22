import React, {useContext} from 'react';
import { Container } from './styles';

import { AuthContext } from '../../contexts/auth';
export default function LoggedData() {
    const { user } = useContext(AuthContext);

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
                <h2>{user.address}</h2>
            </div>
            <div className='second'>
                <h1>Bairro:</h1>
                <h2>{user.district}</h2>
            </div>
        </div>
    </Container>
 );
}