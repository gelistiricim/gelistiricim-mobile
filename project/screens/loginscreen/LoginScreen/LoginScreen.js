import React, { Component } from 'react';

import {
    View,Text,TouchableOpacity,StyleSheet
  } from 'react-native';
import Background from '../component/LoginBackground/LoginBackground';
import Logo from '../component/LoginIcon/LoginIcon';
import Header from '../component/LoginHeader/LoginHeader';
import TextInput from '../component/LoginInput/LoginInput';
import {theme} from '../../../core_component/theme';
import Button from '../component/LoginButton/LoginButton';
export default class LoginScreen extends Component {
    
  render() {
    return (
      <Background>

      <Logo />

      <Header>Tekrardan hoşgeldiniz</Header>

      <TextInput
        label="E-Posta"
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

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => alert('hi bro!')}
        >
          <Text style={styles.label}>Şifrenizi mi unuttunuz?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained">
        Giriş
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Hesabınız mı yok? </Text>
        <TouchableOpacity onPress={() => alert('Go')}>
          <Text style={styles.link}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </Background>
    );
  }
}
const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
