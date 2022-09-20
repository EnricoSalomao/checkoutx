import React from 'react';

import Button from '../../components/button';
import Header from '../../components/header';
import ListProducts from '../../components/listProducts';
import SearchInput from '../../components/searchInput';

import { Container } from './styles';

export default function home() {
 return (
    <Container>
        <Header/>
        <SearchInput/>
        <Button/>
        <ListProducts/>
    </Container>
 );
}