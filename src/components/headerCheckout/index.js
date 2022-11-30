import React from 'react';
import { Container } from './styles';

import Logo from '../../assets/reserva-logo.png'
import Nike from '../../assets/nike.png'

import { FiTrash2 } from "react-icons/fi";

import { useHistory } from 'react-router-dom';

import { useParams } from 'react-router';

import Logo2 from '../../assets/integralmedica.png'
import huger from '../../assets/huger.png'

export default function HeaderCheckout({data}) {
    let { id } = useParams();

    const history = useHistory();

    function goToProduct(){
       history.push(`${id}`)
    }
    
 return (
    <Container>
        {id == 'reserva' ? (
            <>
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
            </>
        ) : (
            <>
                <img style={{ height: 80, margin: '-1rem', marginBottom: '-2rem' }} src={Logo2}/>

                <div className='header-info'>
                    <h1>Sacola</h1>
                </div>

                {data == true ? (
                            <div className='product'>
                            <img src={huger}/>
                            <div className='info'>
                                <h1>Huger - Pré-Workout</h1>
                                <div className='sub-info'>
                                    <h1>R$90,00</h1> 
                                    <FiTrash2 size={22} color="red" onClick={goToProduct}/>
                                </div>
                            </div>
                        </div>
                ) : (
                    <>
                    </>
                )}
            </>
        )}
    </Container>
 );
}