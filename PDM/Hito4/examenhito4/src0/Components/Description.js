import React from 'react';
import { StyleSheet, View, Text, Image,} from 'react-native';

const Description = ({ Img, titulo, descripcion, color}) => {
  return (
    <View style={estilos.content}>
      <Image source={Img} style={estilos.img}/>
      <View style={estilos.text}>
        <Text style={[estilos.titulo, { color: color }]}> {titulo} </Text>
        <Text style={[estilos.contenido, { color: color }]}> {descripcion} </Text>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '80%'
  },
  img: {
    width: 500,
    height: 560,
    marginLeft: '40%',
    marginTop:'-60%'
  },
  text: {
    marginTop: '-20%',
    paddingVertical:'20%',
  },
  titulo: {
    fontSize: 50,
    textAlign: 'center',
  },
  contenido: {
    marginTop: '20%',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Description;
