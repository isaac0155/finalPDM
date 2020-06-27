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
    nombre:'',
    id:'',
    correo:'',
    pass:'',
    apPa:'',
    apMa:''
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
          <Text style={stylesForm.text}>{Constants.STRING.NOMBRE} </Text>
          <TextInputForm
          onChangeText={(texto)=>{
            this.setState({nombre:texto});
          }}
          onEndEditing={()=>{
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.NOMBRE}
          secureTextEntry={false}
          autoCorrect={false}>
          </TextInputForm>
        </View>
        <View>
          <Text style={stylesForm.text}> {Constants.STRING.ID} </Text>
          <TextInputForm
          onChangeText={(texto)=>{
            this.setState({id:texto});
          }}
          onEndEditing={()=>{
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.ID}
          secureTextEntry={false}
          autoCorrect={false}>
          </TextInputForm>
        </View>
        <View>
          <Text style={stylesForm.text}> {Constants.STRING.CORR} </Text>
          <TextInputForm
          onChangeText={(texto)=>{
            this.setState({correo:texto});
          }}
          onEndEditing={()=>{
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.CORR}
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
          <Text style={stylesForm.text}> {Constants.STRING.AP_PAT} </Text>
          <TextInputForm
          onChangeText={(texto)=>{
            this.setState({apPa:texto});
          }}
          onEndEditing={()=>{
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.AP_PAT}
          secureTextEntry={false}
          autoCorrect={false}>
          </TextInputForm>
        </View>
        <View>
          <Text style={stylesForm.text}> {Constants.STRING.AP_MAT} </Text>
          <TextInputForm
          onChangeText={(texto)=>{
            this.setState({apMa:texto});
          }}
          onEndEditing={()=>{
          }}
          error={""}
          source={Images.USERNAME}
          placeholder={Constants.STRING.AP_MAT}
          secureTextEntry={false}
          autoCorrect={false}>
          </TextInputForm>
        </View>
        <Button
        isLoading={false}
        onPress={() => {

          const pacientefire = firestore
            .collection('Paciente').doc();

          pacientefire.set(this.state)
            .then(function () {
              Alert.alert('Nuevo Paciente creado con el ID:', pacientefire.id);
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
