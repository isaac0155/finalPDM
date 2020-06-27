import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
import Colors from '../../Config/Colors';
import CVcasos from '../../Components/corona/CVcasosing';
import Constants from '../../Config/constants';

const CVciudad=(props)=> {
    const {ciudad,onChangeTextConf,onChangeTextSosp}=props;
    return(

        <View>
            <Text>{ciudad}</Text>
            <CVcasos
            onChangeText={onChangeTextConf}
            placeholder={Constants.nro}
            autoCorrect={false}
            secureTextEntry={false}
            typeCase={Constants.CONFIRMA}
            />
            <CVcasos
            onChangeText={onChangeTextSosp}
            placeholder={Constants.nro}
            autoCorrect={false}
            secureTextEntry={false}
            typeCase={Constants.SOSPECHA}
            />




        </View>


    )



};
const styles = StyleSheet.create({
    text:{
        position: 'absolute',
        
        fontWeight:'bold',
        color: Colors.black,
        
        




    },


});
export default CVciudad;