import React, { Component } from 'react';
import {
    View,Text
  } from 'react-native';
import Background from '../component/LoginBackground/LoginBackground';
import Button from '../component/LoginButton/LoginButton';
import Logo from '../component/LoginIcon/LoginIcon';
import Header from '../component/LoginHeader/LoginHeader';
export default class Login extends Component {
    
  render() {
    return (
        <Background>
            <Header>Gelistiricim</Header>
        <Logo />
        <Button mode="contained" onPress={() => alert('Login')}>
        Login
        </Button>
        <Button
        mode="outlined"
        onPress={() => alert('Sign Up')}
        >
        Sign Up
        </Button>
      </Background>
    );
  }
}
