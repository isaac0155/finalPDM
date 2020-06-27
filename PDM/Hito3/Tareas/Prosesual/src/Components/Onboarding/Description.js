import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../Config/Colors';


const ScreenPMD = ({ source, Titulo, Contenido }) => {
    return (
        <View >
            <View style={styles.ContainerImg}>
                <Image source={source} style={styles.Image} />
            </View>
            <View style={styles.container}>
                <Text style={styles.TextTitulo} category='h2'>{Titulo}</Text>
                <Text style={styles.TextContenido} category='h5'>{Contenido}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextTitulo: {
        color: Colors.white,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        fontSize: 30,
        marginBottom:10,
    },
    TextContenido:{
        color: Colors.white,
        width:'80%',
        backgroundColor: 'transparent',
        fontSize: 20,
        textAlign: 'center',
    },
    ContainerImg: {
        marginTop: -145,
        marginLeft: 70,
    },
    Image: {
        width: 500,
        height: 600,
    },
});
export default ScreenPMD;
