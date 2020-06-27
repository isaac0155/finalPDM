import React, { Component } from "react";
import { View,  Text, Alert,  StyleSheet, Image } from 'react-native';

import Colores from "./../config/colores";


export default class Actual extends Component {
  constructor(props){
    super(props);
  }
  render()
  {
    console.disableYellowBox = true;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={this.props.imagen} style={{width: 150, height: 150, marginTop: 180, marginRight:0}}/>
        <Text style = {{width: 250, fontSize: 30, margin: 10, marginTop:150,textAlign: "center", color : Colores.black}}>
          {this.props.Titulo}
        </Text>
        <Text style = {{width: 250, fontSize: 20, margin: 10,marginTop:50, textAlign: "center", color : Colores.black}}>
          {this.props.Descripcion}
        </Text>
      </View>
    )
  }
}
