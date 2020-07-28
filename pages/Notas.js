import React, { useState, useEffect } from 'react';
import {SafeAreaView, ScrollView, Text, View, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';;

import StyleTemplate from '../../assets/Style/template'
import NotasList from '../../src/components/NotasList'

import api from '../services/api';

export default function Notas( {navigation} ){
    
    const [materias, setMateria] = useState([]);

    useEffect(() => {
        buscaMaterias();
    },[]);

    async function buscaMaterias(){
        const response = await api.get('/materia/');
        setMateria(response.data);
        console.log(response.data)  
    }
   
    function BackIndex(){ 
        navigation.navigate('Index'); 
    }

    return (
        <SafeAreaView style={StyleTemplate.container}>
            <ScrollView  style={StyleTemplate.scroll}>
                <Text style={StyleTemplate.titulo}>Notas</Text>
                <View> 
                    <View style = {style.container}>
                        <Text style = {style.TableHeader}>Matéria</Text>
                        <Text style = {style.TableHeader}>1 Bim</Text>
                        <Text style = {style.TableHeader}>2 Bim</Text>
                        <Text style = {style.TableHeader}>3 Bim</Text>
                        <Text style = {style.TableHeader}>4 Bim</Text>
                    </View>
                    {materias.map(item => <NotasList key={item._id} materia ={item.materia} />)}
                </View>
                <View>
                <TouchableOpacity onPress={BackIndex}>
                    <Text style = {style.back2Index} > Voltar</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};
const style = StyleSheet.create({ 
    container: {
        flexDirection :'row'
    },
    back2Index  : {
        color: '#000',
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    },
    TableHeader:{
        flex: 0,
        borderColor :"#FFF",
        backgroundColor: '#000',
        color: "#FFF",
        paddingVertical: 5,
        paddingHorizontal: 15,
        fontSize:16,
        
    }
})