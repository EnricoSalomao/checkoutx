import React, { useContext} from 'react';
import Footer from '../../components/footer';
import HeaderCheckout from '../../components/headerCheckout';
import UserDataForms from '../../components/userDataForms';
import { Container } from './styles';

import { AuthContext } from '../../contexts/auth';
import CardDataForm from '../../components/cardDataForm';
import ShipDataForm from '../../components/shipDataForm';
import LoggedData from '../../components/loggedData';

export default function Checkout() {
    const { level, user } = useContext(AuthContext);

 return (
    <Container>
        <HeaderCheckout data={true}/>
        {user == null ? (
            <>
            {level == 1 ? (
                <UserDataForms/>
            ) : level == 2 ? (
                <CardDataForm/>
            ) : (
                <ShipDataForm/>
            )}
            </>
        ) : (
            <LoggedData/>
        )}
       <Footer/>
    </Container>
 );
}