import React from 'react';
import { StyleSheet, View } from 'react-native';

import Constants from '../../Config/Constants';

import Button from '../Onboarding/Button';

const ButtonInput = ({ onPressPrev, onPressNext }) => {
    return (
        <View >
            <View style={styles.butonPrev}>
                <Button
                    onPress={onPressPrev}
                    Accion={Constants.STRINGS.PREV}></Button>
            </View>
            <View style={styles.butonNext}>
                <Button
                    onPress={onPressNext}
                    Accion={Constants.STRINGS.NETX}></Button>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    butonPrev: {
        alignItems: 'flex-start',
        position: 'absolute',
        marginLeft: 10,
        marginTop: 50,
    },
    butonNext: {
        alignItems: 'flex-end',
        marginRight: 10,
        marginTop: 50,
    },
});
export default ButtonInput;