import React from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';

import Colors from '../../Config/Colors';
import Constants from '../../Config/Constants';
import Images from '../../Config/Images';

const EmailTextField = ({ onChangeText, onEndEditing, error, placeholder, secureTextEntry, autoCorrect,source }) => {
  return (
    <View>
      <Text style={styles.errorText}>{error}</Text>

      <View style={styles.textFieldView}>
        <Image
          style={styles.inlineImg}
          source={source} />
        <TextInput
          style={styles.textField}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          autoCorrect={autoCorrect}
          selectionColor={Colors.blue}
          placeholderTextColor={Colors.white}
          underlineColorAndroid="transparent">
        </TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textField: {
    height: Constants.CONFIG.HEADER_HEIGHT * 0.06,
    width: Constants.CONFIG.SCREEN_WIDTH * 0.85,
    backgroundColor: 'rgba(77, 202, 109, 0.5)',
    alignItems: 'center',
    height: 40,
    borderColor: Colors.black,
    borderWidth: 1,
    paddingLeft: 40,
    borderRadius: 15,
    marginBottom: 10,
    color: Colors.white,
  },
  textFieldView: {
   
    
  },
  errorText: {
    fontSize: 12,
    color: Colors.red,

    marginHorizontal: 20,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 22,
    left: 10,
    top: 9,
  },
});

export default EmailTextField;