import React from 'react';
import { View, StyleSheet} from 'react-native';
import Description from './Description';
import ButtonFooter from './ButtonFooter';


const OnboardFactory = ({Img,titulo,descripcion,funcionBoton1,funcionBoton2,color,botonsig,botonskip,colorFondo,iconoNext,iconoPrev}) => {
  return (
    <View style={[estilos.content, { backgroundColor: colorFondo }]}>
      <Description Img={Img} titulo={titulo} descripcion={descripcion} color={color} />
      <ButtonFooter botonsig={botonsig} botonskip={botonskip} pressPrev={funcionBoton1} presNext={funcionBoton2} colorPrev={color} colorNext={color} iconoPrev={iconoPrev} iconoNext={iconoNext}/>
    </View>
  );
}
const estilos = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
  },
});
export default OnboardFactory;
