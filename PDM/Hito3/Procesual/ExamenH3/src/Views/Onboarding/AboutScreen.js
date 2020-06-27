import React from 'react';
import { StyleSheet, View } from 'react-native';

import Constants from '../../Config/Constants';
import Images from '../../Config/Images';
import Colors from '../../Config/Colors';

import Onboarding from '../../Components/OnboardingFactory';


const FormRegScreen = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <Onboarding
            source={Images.FONDO3}
            Titulo={Constants.STRINGS.TITULO3}
            Contenido={Constants.STRINGS.CONTENIDO3}
            onPressPrev={()=>{navigation.navigate('ScreenDefensa');}}
            onPressNext={()=>{navigation.navigate('Login');}}
            ></Onboarding>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.blue,
        flex: 1,
    },
    

});
export default FormRegScreen;

