import {Dimensions} from 'react-native';

const config = {
  SCREEN_WIDTH: Dimensions.get('window').width,
  SCREEN_HEIGHT: Dimensions.get('window').height,
  HEADER_HEIGHT: Dimensions.get('window').height - 46,
};

const strings = {
  NAME_APP: 'Emergencias.guide',
  PASSWORD: 'Password',
  USERNAME: 'Username',
  TITLE_BUTTON: 'LOG IN',
  REGISTER: 'Register',
  EMAIL: 'Email',
  EMAIL_ERROR: 'Email invalid!',
  PASSWORD_ERROR: 'Password invalid!',
  EMPTY_TITLE: 'Review Email/Password values',
  EMPTY_VALUES: 'Empty values detected',
  ADD_EMAIL: 'Enter Email',
  ADD_EMAIL_BUTTON: 'ADD',
  REVIEW_EMAIL: 'Please review email data',
  ENTER_EMAIL: 'Enter email value',
  REGISTER_FORM: 'REGISTER FORM',
  ID:'Ingrese su ID',
  NOMBRE:'Ingrese su nombre',
  AP_PAT:'Ingrese su Apellido Paterno',
  AP_MAT:'Ingrese su Apellido Materno',
  CORR:'Ingrese su Correo',
  TELF:'Ingrese su telefono',
  CONTRA:'Ingrese una contraseña',
  RP:'Registrar paciente',
  QUEJA:'Ingrese su reclamo',
  EVIAR:'Enviar reclamo',
  NOMBREC:'Nombre centro de salud',
  IDC:'Id del centro de salud',
  UBIC:'Ubicacion del centro',

};

export default {
  CONFIG: config,
  STRING: strings,
};
