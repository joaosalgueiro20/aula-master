import React, { useEffect, useState } from 'react';
import {SafeAreaView,StyleSheet,Text, AsyncStorage,TouchableOpacity,View,Image} from 'react-native';


export default function Index( { navigation } ){
    
    const [id] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('_id').then(storagedId => {
            const id = storagedId;
        }) 
    },[]);

    async function AcessoMeuCadastro(){
        navigation.navigate('User')
    }
    
    async function acessoNotas(){
        navigation.navigate('Notas')
    }

    function logoff(){
        alert('Voce Foi Deslogado')
        AsyncStorage.removeItem('_id')
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style = {style.container}>
     
            <Image style = {style.logo} source = {require('../../assets/logo-faccar.png')}/>

            <View style = {style.row}>
                <TouchableOpacity onPress={AcessoMeuCadastro}  style = {style.button}>
                    <View style={style.view}>
                    <Text style = {style.text}>Meu Cadastro</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={acessoNotas}  style = {style.button}>
                    <Text style = {style.text}>Notas</Text>
                </TouchableOpacity>
            </View>

            <View style = {style.row}>
                <TouchableOpacity  style = {style.button}>
                    <Text style = {style.text}>Horários</Text>
                </TouchableOpacity>
                <TouchableOpacity  style = {style.button}>
                    <Text style = {style.text}>Protocolos</Text>
                </TouchableOpacity>
            </View>

            <View style = {style.row}>
                <TouchableOpacity  style = {style.button}>
                    <Text style = {style.text}>Boletos</Text>
                </TouchableOpacity>
                <TouchableOpacity  style = {style.button}>
                    <Text style = {style.text}>Biblioteca</Text>
                </TouchableOpacity>
            </View>

            <View style = {style.row}>
                <TouchableOpacity onPress = {logoff}  style = {style.button, style.logoff}>
                    <Text style = {style.textOff}>Logoff</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )};

    
const style = StyleSheet.create({ 
    container :{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    logo: {
        height: 170 ,
        marginTop: 10,
        marginBottom: 30,
        alignSelf: "center",
        resizeMode:"contain"
      },
    row:{
        flexDirection : 'row'
    },
    logoff:{
        backgroundColor: "#EB5757",
        width:'82%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : 5,
        marginTop: 10,
        color: '#FFF'
    }
    ,textOff:{
        color:'#FFF',
        fontWeight:'bold'
    }
    ,button:{
        marginRight: 5,
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 5,
        width: '40%',
        height: 100,
        flex: 0,
        borderWidth: 1,
        borderRadius :5,
        borderColor : 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    }
    ,text:{
        color:"#000",
        textAlign: 'center'
    }
});