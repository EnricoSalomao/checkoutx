import React, { useState } from 'react';
import { Container } from './styles';

export default function Button() {
 const [ selected1, setSelected1 ] = useState('selected');
 const [ selected2, setSelected2 ] = useState(''); 

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
        <button onClick={handleSelected} className={selected1}>
            Feminino
        </button>

        <button onClick={handleSelected} className={selected2}>
            Masculino
        </button>
    </Container>
 );
}