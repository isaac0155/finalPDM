import React, {useLayoutEffect, useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert, Image, TouchableOpacity} from 'react-native';

import MapView from 'react-native-maps';
import {Marcador} from 'react-native-maps';

import ButtonIcon from '../../Components/ButtonIcon';
import FirebasePlugin from '../../Plugins/firebase/Firebase';
import MainNavigator from './../../Navigator/MainNavigator';
import Colors from '../../Config/Colors';
import Images from '../../Config/Images';

const AppScreen = ({navigation}) => {
  const onPressSetting = () => {
    navigation.navigate('Setting');
  };

  const onPressLogout = () => {
    try {
      FirebasePlugin.auth().signOut()
        .then(() => {
            Alert.alert('Logout App', 'Successfully Logout', [{
              text: 'Login App', onPress: () => {navigation.navigate('Login1')}
            }]);
        });
    } catch (e) {
      Alert.alert('Contact admin', e.message);
    }
  };



  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <ButtonIcon imageSrc={Images.LOGOUT} onPressButton={onPressLogout}/>
      ),
      headerRight: () => (
        <ButtonIcon imageSrc={Images.SETTING} onPressButton={onPressSetting}/>
      ),
    });
  });

  const onPressEmergen=()=>{
    navigation.navigate('2');
  };
  const onPressGuia=()=>{
    navigation.navigate('1');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://i.ibb.co/vm7zzc7/Logo.png',
        }}
      />
    <Text style={styles.desc}>Bienvenido, este en este sitio podrá encontrar información de centros de salud, también podrá ultilizar el modo de emrgencias y realizar una solicitud de emrgencias.</Text>
    <View style={styles.caja}>
        <MapView

          initialRegion={{
          latitude: -17.393100099999998,
          longitude: -66.3013981,
          latitudeDelta: 0.022,
          longitudeDelta: 0.021,
        }}>
        </MapView>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPressGuia}>
        <Image
          style={styles.imgButton}
          source={{
            uri: 'https://fotos.subefotos.com/1ef8f9599b8db36c8d10f718ee95dc0ao.jpg',
          }}
        />
      <Text style={styles.txt}>Iniciar Modo Guía</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressEmergen}>
        <Image
          style={styles.imgButton}
          source={{
            uri: 'https://fotos.subefotos.com/ba34e8b36e46de969cc7b5932583b9fdo.jpg',
          }}
        />
      <Text style={styles.txt1}>Iniciar Modo Emergencias</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.cel,
    alignItems: 'center',
  },
  map:{
    width: "90%",
    height: 150,
    marginLeft: "5%",

  },
  image:{
    marginTop: 80,
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

export default AppScreen;
