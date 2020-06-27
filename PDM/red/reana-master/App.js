import 'react-native-gesture-handler';

import {decode, encode} from 'base-64';
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

import React from 'react';
import { View,  Text, Alert } from 'react-native';
import MainNavigator from './src/Navigator/MainNavigator';
import imagenes from "./src/srcOnb/config/Imagenes";
import Images from './src/Config/Images';
import Onboarding from "./src/srcOnb/Pantallas/OnboardingFactory";

const navig = MainNavigator;
function Ejemplo({navigation}) {
  return (
    <View>
      <mainNavigator></mainNavigator>
    </View>
  )
}
const App: () => React$Node = () => {
  return <Onboarding
    pantallas = {[
      {
        color : "#EAF1F2",
        Titulo : "Bienvenido a emergencias.guide",
        Descripcion : "Un App donde econtrará información confiable acerca de los centros de salud de Cochabamba",
        imagen : Images.LOGO
      },
      {
        color : "#EAF1F2",
        Titulo : "Vea lo nuevo: Modo de Emergencias",
        Descripcion : "Donde podrá Enviar solicitudes de Emergencias a los centros de salud cercanos a Ud.",
        imagen : Images.LOGO
      }
    ]}
    Ultimo = {navig}
    />;
};

export default App;
