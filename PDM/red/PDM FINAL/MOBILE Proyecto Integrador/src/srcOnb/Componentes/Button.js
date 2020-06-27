import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import Colores from './../config/colores';

const Button = ({texto, funcion}) => {

    return (
      <TouchableOpacity style={styles.button} onPress={funcion}>
        <Text style={styles.text}>{texto}</Text>
      </TouchableOpacity>
    );

};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 40,
    width: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colores.trasparente,
    borderColor: Colores.black,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10
  },
  text: {
    width: 150,
    color: Colores.black,
    textAlign: 'center',
    fontWeight: 'bold',
    height: 20,
  },
});

export default Button;
