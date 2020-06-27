import React, {Component, useState} from 'react';
import {StyleSheet,View,Text,TextInput,Image} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../Config/Colors';
import constants from '../../Config/constants';
const CVcasos=(props)=>{
    const {typeCase, placeholder, onChangeText, secureTextEntry, autoCorrect}=props;

    return(
        <View>
            <Text style={stylesTextInput.inlineImg}>{typeCase} </Text>

            <TextInput
                    style={stylesTextInput.textInput}
                    onChangeText={onChangeText}
                    selectionColor={Colors.blue}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    autoCorrect={autoCorrect}
                    placeholderTextColor={"#ffffff"}
                    underlineColorAndroid="transparent"
                />
        </View>
    )
};
CVcasos.propTypes={
    onChangeText: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    autoCorrect: PropTypes.bool,
    secureTextEntry: PropTypes.bool,
};
const stylesTextInput = StyleSheet.create({
    textInput: {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      alignItems: 'center',
      height: 40,
      borderColor: Colors.red,
      paddingLeft: 40,
      borderRadius: 15,
      borderBottomWidth: StyleSheet.hairlineWidth,
      marginBottom: 15,
      marginLeft:50,
    },
    inlineImg: {
      position: 'absolute',
      zIndex: 99,
      width: 100,
      height: 100,
      left: -40,
      top: 0,
      color:'white',
    },
    texto:{

        borderColor:Colors.white,
        color:'black',
        fontWeight:'bold',
        backgroundColor:'transparent',
    
    },
    container:{

        alignItems:'center',
        justifyContent:'center',
    },
  });
  export default CVcasos;
