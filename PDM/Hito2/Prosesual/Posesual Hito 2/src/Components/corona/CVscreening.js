import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Button from '../../Components/corona/Button';
import Casosinput from '../../Components/corona/TextInput';
import CVciudad from '../../Components/corona/CVciudading';
import LogoLogin from '../../Components/corona/CVlogo';
import Constants from '../../Config/constants';
import Colors from '../../Config/Colors';
import imgUsername from '../../../src/img/background.jpg';
import ciudades from '../../Config/ciudades';
export default class CVscreening extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confCB: 0,
            sospCB: 0,

            confSC: 0,
            sospSC: 0,

            confOR: 0,
            sospOR: 0,

            search: ' '
        };
        this._onChangeTextConfCB = this._onChangeTextConfCB.bind(this);
        this._onChangeTextSospCB = this._onChangeTextSospCB.bind(this);

        this._onChangeTextConfSC = this._onChangeTextConfSC.bind(this);
        this._onChangeTextSospSC = this._onChangeTextSospSC.bind(this);

        this._onChangeTextConfOR = this._onChangeTextConfOR.bind(this);
        this._onChangeTextSospOR = this._onChangeTextSospOR.bind(this);

        this._onChangeTextInputSearch = this._onChangeTextInputSearch.bind(this);
        this._onPressCalcular= this._onPressCalcular.bind(this);
    }

    _onChangeTextConfCB(confCB) {
        this.setState({
            confCB: confCB
        });
    }
    _onChangeTextSospCB(sospCB) {
        this.setState({
            sospCB: sospCB
        });
    }
    _onChangeTextConfSC(confSC) {
        this.setState({
            confSC: confSC
        });
    }
    _onChangeTextSospSC(sospSC) {
        this.setState({
            sospSC: sospSC
        });
    }
    _onChangeTextConfOR(confOR) {
        this.setState({
            confOR: confOR
        });
    }
    _onChangeTextSospOR(sospOR) {
        this.setState({
            sospOR: sospOR
        });
    }

    _onChangeTextInputSearch(search){
        this.setState({
            search: search

        });
    }
    _onPressCalcular(){
        let n1CB, n2SC, n3OR, busqueda;

        if ( this.state.search === 'Conf'){
            n1CB= parseInt(this.state.confCB);
            n2SC= parseInt(this.state.confSC);
            n3OR= parseInt(this.state.confOR);


        }

        if (this.state.search === 'Sosp'){

            n1CB=parseInt(this.state.sospCB);
            n2SC= parseInt(this.state.sospSC);
            n3OR= parseInt(this.state.sospSC);
        }

        let mayor = Math.max(n1CB, n2SC, n3OR);


        console.log('boton calcular');
        console.log(this.state);
        console.log(mayor);

    }
    render() {

        return (
            <View style={styles.container}>
                <LogoLogin style={styles.logo} />
                <View>
                    <CVciudad
                        ciudad={ciudades.COCHA}
                        onChangeTextConf={this._onChangeTextConfCB}
                        onChangeTextSosp={this._onChangeTextSospCB}>
                    </CVciudad>
                    <CVciudad
                        ciudad={ciudades.SANTA}
                        onChangeTextConf={this._onChangeTextConfSC}
                        onChangeTextSosp={this._onChangeTextSospSC}>
                    </CVciudad>
                    <CVciudad
                        ciudad={ciudades.ORURO}
                        onChangeTextConf={this._onChangeTextConfOR}
                        onChangeTextSosp={this._onChangeTextSospOR}>
                    </CVciudad>

                </View>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this._onChangeTextInputSearch}
                    selectionColor={Colors.blue}
                    placeholder={Constants.BUSQUEDA}
                    secureTextEntry={false}
                    autoCorrect={false}
                    placeholderTextColor={"#ffffff"}
                    underlineColorAndroid="transparent"
                />
                <Button
                onPress={this._onPressCalcular}
                titleButton={Constants.CALCULAR}

                />




            </View>



        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.red,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        width: '80%',
        marginTop: 100,
    },
    textInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        alignItems: 'center',
        height: 40,
        borderColor: Colors.red,
        paddingLeft: 40,
        borderRadius: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom: 15,
        marginLeft:50,
      },

});
