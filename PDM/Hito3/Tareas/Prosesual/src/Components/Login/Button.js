import React, { Component } from 'react';
import {StyleSheet, View, TouchableOpacity,Text} from 'react-native';
import Colors from '../../Config/Colors.js';

class LoginButton extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <View style={stylesButton.container}>
              <TouchableOpacity style={stylesButton.button}
                onPress={this.props.onPress}>
                <Text
						      style={stylesButton.text}>{this.props.titleButton}
					      </Text>
              </TouchableOpacity>       
            </View>
        );
    }
}
const stylesButton = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.appPrimary,
    marginBottom: 10,
    paddingVertical: 12,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.7)',
  },
  text: {
    color: Colors.white,
    textAlign: 'center',
    height: 20,
  },
});


LoginButton.propTypes = {

};

export default LoginButton;