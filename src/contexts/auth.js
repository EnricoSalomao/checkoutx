import React, { createContext, useEffect, useState } from 'react';

import firebase from '../services/firebase';

import { toast } from 'react-toastify'; //ToastContainer
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadStorage = () => {
            const storageUser = localStorage.getItem('SistemaUser');

            if (storageUser) {
                setUser(JSON.parse(storageUser));
            }

        }

        return loadStorage();
    }, [])


    const storageUser = async (data) => {
        localStorage.setItem('SistemaUser', JSON.stringify(data))
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('checkout');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [celular, setCelular] = useState('');
    const [namecard, setNamecard] = useState('');
    const [numbercard, setNumbercard] = useState('');
    const [expire, setExpire] = useState('');
    const [cvv, setCvv] = useState('');
    const [address, setAddress] = useState('');
    const [district, setDistrict] = useState('');
    const [extra, setExtra] = useState('');

    const [level, setLevel] = useState(1);

    async function signUp() {
        setLoading(true);
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value?.user?.uid;

                await firebase.firestore().collection('users').doc(uid).set({
                    email,
                    name,
                    cpf,
                    celular,
                    namecard,
                    numbercard,
                    expire,
                    cvv,
                    address,
                    district,
                    extra,
                })
                    .then(() => {
                        let data = {
                            email,
                            name,
                            cpf,
                            celular,
                            namecard,
                            numbercard,
                            expire,
                            cvv,
                            address,
                            district,
                            extra,
                        }
                        setUser(data);
                        storageUser(data)
                        setLoading(false);
                    })
                    .catch((error) => {
                        alert(error.code);
                        if (error.code === 'auth/email-already-exists') {
                            toast.error('E-mail já cadastrado :(', {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: true,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });


                        }
                        if (error.code === 'auth/internal-error') {
                            toast.error('Um erro ocorreu no servidor, digite email e senha novamente, se o erro persistir, entre em contato conosco.', {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: true,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });


                        }
                        if (error.code === 'auth/invalid-argument') {
                            toast.error('Um argumento inválido foi fornecido', {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: true,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });


                        }
                        if (error.code === 'auth/session-cookie-expired') {
                            toast.error('O cookie da sessão expirou. Digite novamente o email.', {
                                position: "top-right",
                                autoClose: 2000,
                                hideProgressBar: true,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });


                        }
                    })

            })
    }

    async function signIn(email, password) {
        var data = {}

        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;

                const userProfile = await firebase.firestore().collection('users')
                    .doc(uid).get()

                data = {
                    uid,
                    ...userProfile.data()
                }

            }).then(() => {
                setUser(data);
                storageUser(data);

                toast.success('Conectando...', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch((error) => {
                if (error.code === 'auth/wrong-password')
                    toast.error('E-mail e/ou senha estão incorretos! :(', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });


            });

    }


    async function signOut() {
        await firebase.auth().signOut();
        localStorage.removeItem('SistemaUser');
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{
            signed: Boolean(user),
            user,
            loading,
            signUp,
            signIn,
            signOut, 
            email,
            setEmail,
            name,
            setName,
            cpf,
            setCpf,
            celular,
            setCelular,
            namecard,
            setNamecard,
            expire,
            setExpire,
            cvv,
            setCvv,
            setAddress,
            address,
            district,
            setDistrict,
            setExtra,
            extra,
            level, 
            setLevel,
            numbercard,
            setNumbercard
        }}>
            {children}
        </AuthContext.Provider>
    )
}