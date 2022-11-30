import React, { useState } from 'react';
import { Container } from './styles';

import { useParams } from 'react-router';


export default function Button() {
 const [ selected1, setSelected1 ] = useState('selected');
 const [ selected2, setSelected2 ] = useState(''); 

 let {id} = useParams();

 function handleSelected(){
     if(selected1 == 'selected'){
        setSelected1('');
        setSelected2('selected');
     }else if(selected2 == 'selected'){
        setSelected1('selected');
        setSelected2('');         
     }
 }

 return (
    <Container>
        {id == 'reserva' ? (
            <button onClick={handleSelected} className={selected1}>
                Feminino
            </button>
        ) : (
            <button onClick={handleSelected} className={selected1}>
                Whey protein
            </button>
        )}

        {id == 'reserva' ? (
            <button onClick={handleSelected} className={selected2}>
                Masculino
            </button>
        ) : (
            <button onClick={handleSelected} className={selected2}>
                Creatina
            </button>
        )}
    </Container>
 );
}