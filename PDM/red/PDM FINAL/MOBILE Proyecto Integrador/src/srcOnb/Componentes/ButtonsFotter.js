import React, { Component } from "react";
import { View,  Text, Alert,  StyleSheet, Image } from 'react-native';

import Colores from "./../config/colores";
import Button from "./Button";

export default class ButtonsFotter extends Component {
  constructor(props){
    super(props);
    this.navegarAtras = this.navegarAtras.bind(this);
    this.navegarAdelante = this.navegarAdelante.bind(this);
  }
  navegarAtras()
  {
    if(this.props.atras)
    this.props.navigation.navigate(this.props.atras)
  }
  navegarAdelante()
  {
    if(this.props.adelante)
    this.props.navigation.navigate(this.props.adelante)
  }
  render()
  {
    console.disableYellowBox = true;
    return (
      <View style = {{width: "90%", flexDirection : "row", alignItems: "stretch", marginTop: 250, marginBottom: 20}}>
        <View style = {{marginLeft: 10, marginRight: 150}}>
          <Button
            texto = "Saltar"
            funcion = {this.navegarAtras}
            />
        </View>
        <View style = {{marginRight: 10, alignItems: "flex-end"}}>
          <Button
            texto = "Sig"
            funcion = {this.navegarAdelante}
            />
        </View>
      </View>
    );
  }
}
