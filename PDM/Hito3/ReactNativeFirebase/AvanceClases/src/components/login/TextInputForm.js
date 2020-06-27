import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../config/Colors';
import Constants from '../../config/constants';

export default class TextInputForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <View>
                <Text style={stylesTextInput.errorText}>{this.props.error}</Text>
                <View>
                <Image
                    style={stylesTextInput.inlineImg}
                    source={this.props.source} />

                <TextInput
                    onChangeText={this.props.onChangeText}
                    onEndEditing = {this.props.onEndEditing}
                    style={stylesTextInput.textInput}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    placeholderTextColor={Colors.white}
                    underlineColorAndroid="transparent" />
                    </View>
            </View>
        )
    }

}

TextInputForm.propTypes = {
    source: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
    autoCorrect: PropTypes.bool,
    secureTextEntry: PropTypes.bool
};

const stylesTextInput = StyleSheet.create({
    textInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        alignItems: 'center',
        height: 40,
        borderColor: Colors.silver,
        paddingLeft: 40,
        borderRadius: 15,
        height: Constants.CONFIG.HEADER_HEIGHT * 0.06,
        width: Constants.CONFIG.SCREEN_WIDTH * 0.85,
        marginBottom: 20,
        color: Colors.white
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 10,
        top: 9
    },
    errorText: {
        fontSize: 12,
        color: Colors.red,
        marginHorizontal: 20,
    },

});