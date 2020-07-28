import React, { useEffect, useState  } from 'react';
import {View, Image, Text, TextInput, StyleSheet, AsyncStorage, TouchableOpacity, ScrollView} from 'react-native'

import api from '../services/api';

export default function User( { navigation } ){

  const [id,    setId]    = useState();
  const [email, setEmail] = useState();
  const [nome,  setNome]  = useState();
  const [idade, setIdade] = useState();
  const [senha, setSenha] = useState();
  
  useEffect( () => {
      AsyncStorage.getItem('_id').then(storagedId => {
        if(storagedId){
          setId(storagedId);
          fetchData(storagedId); 
        }else{
          navigation.navigate("Login");
        }
      });
      async function fetchData(id) {
        await api.get('/users/' + id).then(function(response){
            setEmail(response.data.email);
            setNome(response.data.nome);
            setIdade(response.data.idade.toString);
            setSenha(response.data.senha);
        }); 
      }
  },[]);
  
  async function handleSubmit(){
      console.log('solicitando');
      
      // //email e senha
       const response = await api.put('/users/'+id,{
           "nome" : nome,
           "email" : email,
           "idade" : idade,
           "senha" : senha, 
          }).then(function(response){
            alert("Atualização realizada com sucesso!")
          }).catch(function(response){
            alert("houve um erro na atualização. Tente novamente")
          });
  }

  function BackIndex(){ 
    navigation.navigate('Index')
  }
  
  return ( 
  <View style = {style.container}>  
      <ScrollView  style={style.scrollView}>
          <Image style = {style.picture} source = {require('../../assets/IMG_20181110_162300.jpg')}/>
      <View style ={style.form}>
      <Text style = {style.label}>Nome</Text>
          <TextInput 
              style={style.input}
              autoCompleteType = "name"
              placeholderTextColor = "#999"
              autoCapitalize = "none"
              autoCorrect = {false}
              value = {nome} 
              onChangeText = {setNome}
          ></TextInput>

          <Text style = {style.label}>E-mail</Text>
          <TextInput 
              style={style.input}
              autoCompleteType = "email"
              placeholderTextColor = "#999"
              autoCapitalize = "none"
              keyboardType = "email-address"
              autoCorrect = {false}
              value = {email}
              onChangeText = {setEmail}
          ></TextInput>

        <Text style = {style.label}>Idade</Text> 
          <TextInput 
              style={style.input}
              placeholderTextColor =  "#999"
              value = {idade}
              onChangeText = {setIdade}
          ></TextInput>

          <Text style = {style.label}>Senha</Text>
          <TextInput 
              style={style.input}
              secureTextEntry = {true}
              autoCompleteType  = "password"
              placeholderTextColor = "#999"
              autoCapitalize = "none"
              autoCorrect = {false}
              value = {senha}
              onChangeText = {setSenha}
          ></TextInput>
 
          <TouchableOpacity onPress={handleSubmit}  style = {style.button}>
              <Text style = {style.textButton}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={BackIndex}>
            <Text style = {style.recoverPass} > Voltar</Text>
          </TouchableOpacity>
      </View>
      </ScrollView>
  </View >
  );}

const style = StyleSheet.create({ 
  container :{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#FFF",
  }, 
  picture: {
      resizeMode: 'contain',
      borderRadius: 100,
      marginTop: 10,
      marginLeft: 50,
      marginRight: 50,
      width: 300
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