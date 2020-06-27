import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';

import Constants from '../../config/constants';
import Images from '../../config/images';
import Colors from '../../config/Colors';

import ButtonLogin from '../../components/login/Button';

const RegisterScreen = ({ navigation }) => {
    const onPress = () => {
        console.log('register');
      };

    return (
        <View style={styles.container}>
            <Text>Register Screen</Text>
            <ButtonLogin onPress={onPress} titleButton={Constants.STRINGS.REGISTER} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.blue,
      alignItems: 'center',
    },
    text: {
      color: Colors.white,
      textAlign: 'center',
      fontWeight: 'bold',
      height: 20,
    },
  });

export default RegisterScreen;