import React from 'react';
import {StyleSheet,View,TouchableOpacity,Text} from 'react-native';
const Button = ({ color,onPress, titleButton }) => {
    return (
        <View>
            <TouchableOpacity style={[estilos.button, { borderColor: color }]} onPress={onPress}>
                <Text style={[estilos.text, { color: color }]}> {titleButton} </Text>
            </TouchableOpacity>
        </View>
    );
};

const estilos = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        marginBottom: 25,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default Button;
