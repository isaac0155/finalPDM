import React, { Component } from "react";
import { View,  Text, Alert } from 'react-native';

import Description from "./description";
import ButtonsFotter from "./../Componentes/ButtonsFotter";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Pantalla(datos, siguiente) {
  this.crear = ({navigation})=>{
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  backgroundColor: datos.color }}>
        <Description
          imagen = {datos.imagen}
          Titulo = {datos.Titulo}
          Descripcion = {datos.Descripcion}
        />
        <ButtonsFotter
          navigation = {navigation}
          atras = {"Ultimo"}
          adelante = {siguiente}
          ></ButtonsFotter>
      </View>
    )
  }
}

export default class Onboarding extends Component {
  constructor(props){
    super(props)
  }
  render()
  {
    console.disableYellowBox = true;
    return (
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{
            headerShown: false
          }}>
          {
            this.props.pantallas.map((a,i)=>{
              var sig = "";
              if(i+1>=this.props.pantallas.length) sig="Ultimo"
              else sig = (i+1).toString();
              const pants = new Pantalla(a,sig);
              return(
                <Stack.Screen
                  name={i.toString()}
                  component={pants.crear}
                  options={{
                    title: i.toString()
                  }}
                  />
              )
            })
          }
          <Stack.Screen
            name="Ultimo"
            component={this.props.Ultimo}
            options={{
              title: "Ultimo"
            }}
            />

        </Stack.Navigator>
      </NavigationContainer>

    );

  }
}
