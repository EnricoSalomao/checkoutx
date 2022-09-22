import React from 'react';
import { Container } from './styles';

import Logo from '../../assets/reserva-logo.png'
import Nike from '../../assets/nike.png'

import { FiTrash2 } from "react-icons/fi";

import { useHistory } from 'react-router-dom';

export default function HeaderCheckout({data}) {
    const history = useHistory();

    function goToProduct(){
       history.push('/')
    }
    
 return (
    <Container>
        <img src={Logo}/>

        <div className='header-info'>
            <h1>Sacola</h1>
        </div>

        {data == true ? (
                    <div className='product'>
                    <img src={Nike}/>
                    <div className='info'>
                        <h1>Blusa Tricot Decote Listrado</h1>
                        <div className='sub-info'>
                            <h1>R$459,00</h1> 
                            <FiTrash2 size={22} color="red" onClick={goToProduct}/>
                        </div>
                    </div>
                </div>
        ) : (
            <>
            </>
        )}
    </Container>
 );
}