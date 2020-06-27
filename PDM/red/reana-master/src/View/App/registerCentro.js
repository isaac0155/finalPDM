import React, { Component } from "react";
import { View,  Text, Alert,StyleSheet, Image } from 'react-native';

//import firebase
import FirebasePlugin, {firestore} from '../../Plugins/firebase/Firebase';
//
import TextInputForm from '../../Components/login/TextInput';
import EmailTextField from '../../Components/login/EmailTextField';
import Button from '../../Components/login/Button';
import Images from '../../Config/Images';
import Constants from '../../Config/Constants';

export default class Pruebas extends Component {
constructor(props){
  super(props);
  this.state = {
    nombreCentro:'',
    idCentro:'',
    ubicacion:'',
    pass:'',
    tefls:'',
    mail:''
  };
// Para actualizar this.setState( {atributo: "valor"} )
}
  render()
  {
    return (
      <View style={stylesForm.container}>
        <View>
          <Image
            style={stylesForm.image}
            source={{
              uri: 'https://i.ibb.co/vm7zzc7/Logo.png',
            }}
          />
        </View>
        <View>
          <Text style={stylesForm.text}>{Constants.STRING.NOMBREC} </Text>
          <TextInputForm
          onChangeText={(texto)=>{
            this.setState({nombreCentro:texto});
          }}
          onEndEditing={()=>{
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.NOMBREC}
          secureTextEntry={false}
          autoCorrect={false}>
          </TextInputForm>
        </View>
        <View>
          <Text style={stylesForm.text}> {Constants.STRING.IDC} </Text>
          <TextInputForm
          onChangeText={(texto)=>{
            this.setState({idCentro:texto});
          }}
          onEndEditing={()=>{
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.IDC}
          secureTextEntry={false}
          autoCorrect={false}>
          </TextInputForm>
        </View>
        <View>
          <Text style={stylesForm.text}> {Constants.STRING.UBIC} </Text>
          <TextInputForm
          onChangeText={(texto)=>{
            this.setState({ubicacion:texto});
          }}
          onEndEditing={()=>{
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.UBIC}
          secureTextEntry={false}
          autoCorrect={false}>
          </TextInputForm>
        </View>
        <View>
          <Text style={stylesForm.text}> {Constants.STRING.CONTRA} </Text>
          <TextInputForm
          onChangeText={(texto)=>{
            this.setState({pass:texto});
          }}
          onEndEditing={()=>{
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.CONTRA}
          secureTextEntry={true}
          autoCorrect={false}>
          </TextInputForm>
        </View>
        <View>
          <Text style={stylesForm.text}> {Constants.STRING.TELF} </Text>
          <TextInputForm
          onChangeText={(texto)=>{
            this.setState({tefls:texto});
          }}
          onEndEditing={()=>{
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.TELF}
          secureTextEntry={false}
          autoCorrect={false}>
          </TextInputForm>
        </View>
        <View>
          <Text style={stylesForm.text}> {Constants.STRING.EMAIL} </Text>
          <TextInputForm
          onChangeText={(texto)=>{
            this.setState({mail:texto});
          }}
          onEndEditing={()=>{
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.EMAIL}
          secureTextEntry={false}
          autoCorrect={false}>
          </TextInputForm>
        </View>
        <Button
        isLoading={false}
        onPress={() => {

          const pacientefire = firestore
            .collection('Centros de Salud').doc();

          pacientefire.set(this.state)
            .then(function () {
              Alert.alert('Nuevo Creado creado con el ID:', pacientefire.id);
            })
            .catch(function (error) {
              Alert.alert('Error al crear', error.message);
            });

        }}
        titleButton={Constants.STRING.RP}>
        </Button>
      </View>
    );
  }
}

const stylesForm = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#EAF1F2'
  },
  text:{
    fontSize:18,
  },
  image:{
    marginTop: 20,
    width: 190,
    height: 60,
    margin: 20,
  },

});
