import React from 'react';
import { Container } from './styles';

import { FiSearch } from "react-icons/fi";

export default function SearchInput() {
 return (
    <Container>
        <FiSearch size={20} color={'#000'}/>
        <input
            placeholder='Search product'
        />
    </Container>
 );
}