import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import Images from '../../Config/Images';

export default class logo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={Images.LOGO} style={styles.Image}/>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image: {
        width: 250,
        height: 250
    },
    Text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20
    }
})