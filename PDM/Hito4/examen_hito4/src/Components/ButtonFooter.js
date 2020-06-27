import React from 'react';
import { StyleSheet,View,} from 'react-native';
import ButtonSkip from './Button';
import ButtonNext from './Button';
const ButtonsFooter = ({  botonsig,  botonskip, pressPrev, presNext, colorPrev, colorNext }) => {

  return (
    <View style={estilos.cont}>
      <ButtonSkip titleButton={botonsig} onPress={pressPrev} color={colorPrev}/>
      <ButtonNext titleButton={botonskip} onPress={presNext} color={colorNext}/>
    </View>
  );
};

const estilos = StyleSheet.create({
  cont: {
    flex: 1,
    width: 550,
    paddingVertical: 40,
    paddingHorizontal: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
});

export default ButtonsFooter;
