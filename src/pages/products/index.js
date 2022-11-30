import React from 'react';
import { Container } from './styles';

import Logo from '../../assets/nike.png'
import Logo2 from '../../assets/huger.png'

import { FiX } from "react-icons/fi";

import { useHistory } from 'react-router-dom';

import { useParams } from 'react-router';

export default function Products() {
    const history = useHistory();

    let {id} = useParams();

    function goToProduct(){
       history.push(`/${id}`)
    }

    function goToCheck(){
        history.push(`/${id}/checkout`)
    }

 return (
    <Container>
        {id == 'reserva' ? (
            <>
                <img src={Logo}/>

                <div className='close' onClick={goToProduct}>
                    <FiX size={30}/>
                </div>

                <div className='info'>
                    <h1>Blusa Tricot Decote Listrado</h1>

                    <div className='sub-info'>
                        <h2>R$500</h2>
                        <h2 className='error'>R$700</h2>
                    </div>

                    <div className='description'>
                        <h1>Urban mood! A blusa tricot listra barra tem modelagem justa com gola e manga listrada. Aposte em combinações com sobreposição em jeans, sarja couro ou tricot.</h1>
                    </div>
                </div>

                <div className='purchase' onClick={goToCheck}>
                    <h1>Comprar</h1>
                </div>
            </>
        ) : (
            <>
                <img src={Logo2}/>

                <div className='close' onClick={goToProduct}>
                    <FiX size={30}/>
                </div>

                <div className='info'>
                    <h1>Huger - Pré-Workout</h1>

                    <div className='sub-info'>
                        <h2>R$90</h2>
                        <h2 className='error'>R$120</h2>
                    </div>

                    <div className='description'>
                        <h1>Huger é o pré-treino que tem o objetivo de te levar as maiores conquistas.</h1>
                    </div>
                </div>

                <div className='purchase' onClick={goToCheck}>
                    <h1>Comprar</h1>
                </div>
            </>
        )}
    </Container>
 );
}