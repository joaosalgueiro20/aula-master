import React, {useState, useEffect} from 'react';

import {View, Image, Text, TextInput, StyleSheet,TouchableOpacity, AsyncStorage,Alert} from 'react-native'

import api from '../services/api';

import logo from '../../assets/logo-faccar.png';

export default function Login( { navigation } ){
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [id   , setId] = useState('');
    
    useEffect(() =>{
        AsyncStorage.getItem('_id').then( id => {
            if(id){
               setId(id);
               navigation.navigate('Index'); 
            }
        })
    },[]);
  
    console.log(email,senha);

    async function handleSubmit(){
        console.log('solicitando');
        
        // //email e senha
         const response = await api.post('/users/login',{
             "email" : email,
             "senha" : senha
            });
            
          const { _id }  = response.data.users;
          console.log(_id);
        //  const email = response.data.users.email;
         if(_id != null){
            await AsyncStorage.setItem('_id' , _id);
             navigation.navigate('Index');
         }
    }

    return ( 
    <View style = {style.container}>  
        <Image source = {logo} style = {style.logo} />
        
        <View style ={style.form}>
            <Text style = {style.label}>Informe seu e-mail</Text>
            <TextInput 
                style={style.input}
                placeholder = "Seu e-mail" 
                autoCompleteType = "email"
                placeholderTextColor = "#999"
                autoCapitalize = "none"
                keyboardType = "email-address"
                autoCorrect = {false}
                value = {email}
                onChangeText = {setEmail}
            ></TextInput>

            <Text style = {style.label}>Informe sua senha</Text>
            <TextInput 
                style={style.input}
                placeholder = "senha" 
                secureTextEntry = {true}
                autoCompleteType  = "password"
                placeholderTextColor = "#999"
                autoCapitalize = "none"
                autoCorrect = {false}
                value = {senha}
                onChangeText = {setSenha}
            ></TextInput>

            <TouchableOpacity onPress={handleSubmit}  style = {style.button}>
                <Text style = {style.textButton}>Logar</Text>
            </TouchableOpacity>
            <Text style = {style.recoverPass}>Recuperar senha</Text>
        </View>
    </View >
    );}

const style = StyleSheet.create({ 
    container :{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFF",
    },
    logo: {
        resizeMode: 'contain',
    },
    form : {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30 ,
    },
    label : {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 5,
        marginTop:10
    },
    input :{
        borderWidth  : 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 16,
        color: '#444',
        borderRadius: 5
    },
    button :{
        height: 40,
        backgroundColor: '#028134',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,

    },
    textButton :{
        color: '#FFF'
    }, 
    recoverPass  : {
        color: '#aaa',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    }
});