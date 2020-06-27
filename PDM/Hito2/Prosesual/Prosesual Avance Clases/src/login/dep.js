import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import imgLogo from '../images/logo.jpg'

export default class Logo extends Component {
  constructor(props) {
    console.log(props.text);
    super(props);
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom:10
  },

  text:{
    color: 'black',
    fontWeight:'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  }
});
