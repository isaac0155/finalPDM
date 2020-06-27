import React, { Component } from 'react';
import {StyleSheet, View, SafeAreaView, KeyboardAvoidingView} from 'react-native';

import LoginButton from '../../components/login/Button';
import TextInputForm from '../../components/login/TextInputForm';
import EmailTextField from '../../components/login/EmailTextField';

import LogoLogin from '../../components/login/Logo';

import DismissKeyboard from '../../components/login/DismissKeyboard';

import utils from '../../utils/utils';

import Colors from '../../config/Colors';
import constants from '../../config/constants';
import images from '../../config/images';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this._onPress = this._onPress.bind(this);
        this._onChangeTextUsername = this._onChangeTextUsername.bind(this);
        this._onChangeTextPassword = this._onChangeTextPassword.bind(this);
    }
    

    _onPress() {
        console.log("Button Pressed!");
        console.log(this.state.username);
        console.log(this.state.password);
    }
    _onChangeTextEmail(email) {
        
    }
    _onChangeTextUsername(username) {
        this.setState({
            username: username
        })

    }
    _onChangeTextPassword(password) {
        this.setState({
            password: password
        })
    }
    _validateEmailAddress(email) {
        
    }

    render() {
        return(
            <DismissKeyboard>
                 <KeyboardAvoidingView style={stylesLoginScreen.container} behavior="padding" enabled>
                    <View >
                        <SafeAreaView>
                            <LogoLogin style={stylesLoginScreen.logo}></LogoLogin>
                            <View style={stylesLoginScreen.form}>
                                <EmailTextField
                                    onChangeText={this._onChangeTextEmail}
                                    onEndEditing={this._validateEmailAddress}
                                    placeholder={constants.STRINGS.EMAIL}
                                    secureTextEntry={false}
                                    autoCorrect={false} >
                                </EmailTextField>
                                <TextInputForm
                                    onChangeText={this._onChangeTextUsername}
                                    source={images.USERNAME}
                                    placeholder={constants.STRINGS.USER}
                                    secureTextEntry={true}
                                    autoCorrect={false} >
                                </TextInputForm>
                                <TextInputForm
                                    onChangeText={this._onChangeTextPassword}
                                    source={images.PASSWORD}
                                    placeholder={constants.STRINGS.PASS}
                                    secureTextEntry={true}
                                    autoCorrect={false} >
                                </TextInputForm>
                                <LoginButton
                                    onPress={this._onPress}
                                    titleButton={constants.STRINGS.TITLE_BUTTON}>
                                </LoginButton>
                            </View>
                        </SafeAreaView>
                    </View>
                </KeyboardAvoidingView>
            </DismissKeyboard>
            
        );
    }
}

const stylesLoginScreen = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.dark,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      flex: 1,
      width: '100%',
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    form: {
      flex: 1,
      justifyContent: 'center',
      width: '80%',
    },
  });
  