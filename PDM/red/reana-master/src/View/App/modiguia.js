import React, { Component } from "react";
import { View,  Text, Alert,StyleSheet, Image } from 'react-native';

//import firebase
import FirebasePlugin, {firestore} from '../../Plugins/firebase/Firebase';
//
import TextInputForm from '../../Components/login/TextInput';
import EmailTextField from '../../Components/login/EmailTextField';
import Button from '../../Components/login/Button';
import Images from '../../Config/Images';
import Constants from '../../Config/Constants';
import MapView from 'react-native-maps';
import {Marcador} from 'react-native-maps';
import Colors from '../../Config/Colors';

export default class Pruebas extends Component {
constructor(props){
  super(props);
  this.state = {
    nombre:'',
    id:'',
    correo:'',
    pass:'',
    apPa:'',
    apMa:''
  };
// Para actualizar this.setState( {atributo: "valor"} )
}
  render()
  {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Modo Guía de Centro de Salud</Text>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.ibb.co/vm7zzc7/Logo.png',
            }}
          />

        </View>
        <View style={styles.caja}>
            <MapView
              style={styles.map}
              initialRegion={{
              latitude: -17.393100099999998,
              longitude: -66.3013981,
              latitudeDelta: 0.022,
              longitudeDelta: 0.021,
            }}>
            </MapView>
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.cel,
    alignItems: 'center',
  },
  map:{
    width: "90%",
    height: 350,
    marginLeft: "5%",

  },
  image:{
    marginTop: 20,
    width: 190,
    height: 60,
    margin: 30
  },
  caja:{
    width: "100%",
    flexDirection : "row",
    alignItems: "center",
    borderRadius: 0
  },
  texto:{
    color: "#0d326b",
    textAlign: 'center',
    fontSize:40,
    marginTop: 50
  },
  desc:{
    color: "#0d326b",
    textAlign: 'justify',
    fontSize: 18,
    marginBottom: 50,
    width:"80%"
  },
  button:{
    marginTop: 15,
    display: 'flex',
    height: 250,
    width: "95%",
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
    borderColor: Colors.blanco,

  },
  imgButton:{
    marginTop:-97,
    width: "100%",
    height: 255,
  },
  txt:{
    color:"#f1e8ee",
    marginTop: "-30%",
    marginLeft:-150,
    fontWeight: 'bold',
    fontSize:20,
  },
  txt1:{
    color:"#f1e8ee",
    marginTop: "-30%",
    marginLeft:100,
    fontWeight: 'bold',
    fontSize:20,
  }
});
