import  React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

//import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function App() {

  const [nome, setNome] = useState ('');
  
  function enviarInfo(){
    alert('Olá ' +  (nome) + ', seja bem vindo(a)!');
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Meu Primeiro Aplicativo </Text>

      <Text style={styles.linha}> </Text>

      <TextInput style ={styles.campo} value = {nome} placeholder="Digite o seu nome" placeholderTextColor='white' onChangeText={ (nome) => setNome(nome) }/>

      <TouchableOpacity style ={styles.botao} onPress = {enviarInfo}>
        <Text style ={styles.textoBotao}> Enviar </Text>
      </TouchableOpacity> 
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',
    padding: 8,
  },
  
  titulo:{
    fontSize: 40,
    textAlign: 'center',
    marginTop: 10,
    color: '#6BFAC6',
    fontFamily: 'arial',
    fontWeight: 'bold',
  },
  
  linha:{
    backgroundColor: 'white',
    borderRadius: 12,
    color: 'black',
    margin: 10,
    height: 5,
    marginTop: 15,
  },

  campo:{
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 25,
    backgroundColor: 'gray',
    borderColor: '#6BFAC6',
    borderWidth: 3,
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
    
  },

  botao:{
    justifyContent: 'center',
    alignItems:'center',
    margin: 10,
    padding: 10,
    backgroundColor: 'transparent',
    borderTopColor: '#6BFAC6',
    borderLeftColor: 'white',
    borderBottomColor: '#6BFAC6',
    borderRightColor: 'white',
    borderWidth: 3,
  },
  
  textoBotao:{
    fontSize: 25,
    color: 'white',
    fontWeight: 450,
  },
});