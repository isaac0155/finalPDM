import React, {Component}from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ButtonLogin from '../../Components/login/Button'
import TextInputLogin from '../../Components/login/TextInput';

import LogoLogin from '../../Components/login/logo';
import Constants from '../../Config/constants';
import Ciudades from '../../Config/ciudades';
import Colors from '../../Config/Colors';
import imgUsername from '../../../src/img/background.jpg';
import ciudades from '../../Config/ciudades';

export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''

        };
        this._onPress=this._onPress.bind(this);
        this._onChangeTextusername=this._onChangeTextusername.bind(this);
        this._onChangeTextPassword=this._onChangeTextPassword.bind(this);
    }
    _onPress(){
        console.log('button pressed!!');
        console.log (this.state.username);
        console.log(this.state.password);


    }
    _onChangeTextusername(username){
        this.setState({
            username: username,
        });

    }
    _onChangeTextPassword(password){
        this.setState({
            password:password,

        });

    }
    render(){
        return(
            <View style={stylesLoginScreen.container}>
                <LogoLogin style={stylesLoginScreen.logo}></LogoLogin>
                <View style={stylesLoginScreen.form}>

                    
                <TextInputLogin
            onChangeText={this._onChangeTextusername}
            source={imgUsername}
            placeholder={Constants.USERNAME}
            securetextEntry={false}
            autoCorrect={false}>
          </TextInputLogin>
          <TextInputLogin
            onChangeText={this._onChangeTextPassword}
            source={imgUsername}
            placeholder={Constants.PASSWORD}
            securetextEntry={true}
            autoCorrect={false}>
          </TextInputLogin>
          <ButtonLogin
                        onPress={this._onPress}
                        titleButton={Constants.TITLE_BUTTON}/>
                    
                    
                    
                    
                </View>
                
                
            </View>


        );
    }



}
const stylesLoginScreen = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.black,
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
      marginTop:100,
    },
  });