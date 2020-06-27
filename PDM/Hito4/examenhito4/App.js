import { YellowBox } from 'react-native'
import React, {Component} from 'react';
import Vista from './src';
import Img from './src/img/images';

let str = [
  {
    Img:Img.IMG,
    titulo: 'UNIFRANZ',
    descripcion: 'Estudiante: Isaac Herrera Mareño',
    colortexto: '#fff',
    colorFondo: '#1fb3a9',
    textoBotonPrev: '',
    textoBotonNext: 'Next',
  },
  {
    Img:Img.IMG2,
    titulo: 'Onboarding',
    descripcion: 'Hito 4 - 7° Semestre',
    colortexto: '#1fb3a9',
    colorFondo: '#fff',
    textoBotonPrev: 'Prev',
    textoBotonNext: 'Next',
  },
  {
    Img:Img.IMG3,
    titulo: 'PDM',
    descripcion: 'ING: William Barra',
    colortexto: '#fff',
    colorFondo: '#1fb3a9',
    textoBotonPrev: 'Prev',
    textoBotonNext: '',
  },
];
export default class App extends Component {
  render() {
    return (
      <Vista str={str} />
    );
  }
}
