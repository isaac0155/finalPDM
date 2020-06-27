import React, {Component} from  'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class Input extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  state = {
      text: ''
    };
  render(){
    return(
      <View style={styles.container}>
        <Text tyle={styles.text}>{this.props.text}</Text>
        <TextInput
        underlineColorAndroid="black"
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
      />
      </View>
    );
  }
}

Input.PropTypes={
  source: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoCorrect: PropTypes.bool,
  secureTextEntry: PropTypes.bool
};
const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginBottom:0
  },
  input: {
    backgroundColor: 'rgba(40, 64, 111, 0.62)',
    width: 10,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: 'black',
    marginBottom: 0
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 35,
    top: 9,
  },
  text:{
    color: 'black',
    fontWeight:'bold',
    backgroundColor: 'black',
    marginTop: 1,
  }
});
