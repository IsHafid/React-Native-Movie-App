import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase' 
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import Register from './Register'



const Login = ({navigation}) => {

const[Email,setEmail]=useState('');
const[Password,setPassword]=useState('');

useEffect(() =>{
  auth.onAuthStateChanged(user =>{
    if (user) {
      navigation.navigate("Home")
    }
  })

},[]);



const login = () => {
    signInWithEmailAndPassword(auth,Email, Password); 
  }

  return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior = 'padding'>      
    <View style={styles.View}
    >
      <Text style={styles.SText}>Email:</Text>

      <TextInput
      style={styles.Tinput}
      placeholder='Email@abc.com'
      value={Email}
      onChangeText={text => setEmail(text)}
      />
      <Text style={styles.SText}>Password:</Text>

      <TextInput
      style={styles.Tinput}
      placeholder='Password'
      secureTextEntry
      value={Password}
      onChangeText={text => setPassword(text)}
      />



       
    </View>
    <View  style={styles.ViewT}>

    <TouchableOpacity

          style={styles.button}
          onPress={login}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Button
          title="Create account !!"
          onPress={() => navigation.push('Register')}
        />    
        </View>
    </KeyboardAvoidingView>
    
  )
  
}
export default Login;
const styles = StyleSheet.create({
    Tinput:{
        backgroundColor: 'white',
        paddingHorizontal: 30,
        paddingVertical: 10,

        marginTop: 5,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,

    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    View:{
    
        width:"80%"
    },
    ViewT:{
    
      width:"50%"
  },
    button: {

        backgroundColor: '#D0104C',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop:10,
        
    },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        
      },
      SText: {
        color: '#D0104C',
        fontWeight: '700',
        fontSize: 16,
      },

})