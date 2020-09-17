import { StatusBar } from 'expo-status-bar';
import React ,{useState }from 'react';
import { StyleSheet, Text, View,Image,TextInput,Button } from 'react-native';
import MyButton from './component/MyButton.js'

export default function App() {
  const [input,setInput]= useState('')
  const [color,setColor]= useState('')

  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://www.igeargeek.com/_nuxt/img/835647d.png' }}
      style={styles.logo}
      >
      </Image>
      <Text style={styles.title}> I Gear Geek</Text>
      <TextInput  
      style={styles.input} 
      placeholder="   Input here"
      value={input}
      onChangeText={(text) => {setInput(text) }}
      ></TextInput>
      <Text style={{fontSize:18,marginTop:20, color: color}}>{input}</Text>
      <View style={styles.buttonLayout}>
        <MyButton title='Red' color='red' onChangeColor={(color) => { setColor(color)}}></MyButton>
        <MyButton title='Blue' color='blue' onChangeColor={(color) => { setColor(color)}}></MyButton>
        <MyButton title='Green' color='green' onChangeColor={(color) => { setColor(color)}}></MyButton>
      </View>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#85C1E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo : {
    width: 150,
    height: 150,
  },
  title:{
    fontSize:25,
    fontWeight: 'bold',
    marginTop:25,
  },
  input:{
    height:40,
    borderColor:'#F4D03F',
    borderStyle:'solid',
    borderWidth:1,
    width: '50%',
    marginTop:25,
  },
  buttonLayout:{
    flexDirection: 'row',
    marginTop:25

  }
});
