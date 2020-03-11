import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../component/LoginBackground/LoginBackground';
import Logo from '../component/LoginIcon/LoginIcon';
import Header from '../component/LoginHeader/LoginHeader';
import TextInput from '../component/LoginInput/LoginInput';
import {theme} from '../../../core_component/theme';
import Button from '../component/LoginButton/LoginButton';
export default class componentName extends Component {
  render() {
    return (
        <Background>
  
        <Logo />
  
        <Header>Hesap oluşturma</Header>
  
        <TextInput
          label="İsim"
          returnKeyType="next"
        />
  
        <TextInput
          label="E-posta"
          returnKeyType="next"
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
  
        <TextInput
          label="Şifre"
          returnKeyType="done"
          secureTextEntry
        />
  
        <Button mode="contained" style={styles.button}>
          Kayıt Ol
        </Button>
  
        <View style={styles.row}>
          <Text style={styles.label}>Zaten bir hesabın mı var? </Text>
          <TouchableOpacity onPress={() => alert('Login screen')}>
            <Text style={styles.link}>Giriş</Text>
          </TouchableOpacity>
        </View>
      </Background>
    );
  }
}
const styles = StyleSheet.create({
    label: {
      color: theme.colors.secondary,
    },
    button: {
      marginTop: 24,
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
  });