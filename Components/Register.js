import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase' 
import { createUserWithEmailAndPassword } from 'firebase/auth'
const Register = ({navigation}) => {

const[Email,setEmail]=useState('');
const[Password,setPassword]=useState('');

const register = () => {
    createUserWithEmailAndPassword(auth,Email, Password); 
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
    <View>
    <TouchableOpacity

          style={styles.button}
          onPress={register}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Button
          title="Go Back To Login !!"
          onPress={() => navigation.navigate('Login')}
        />    

        </View>
    </KeyboardAvoidingView>
  )
}
export default Register;
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