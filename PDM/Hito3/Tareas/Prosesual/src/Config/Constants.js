import {Dimensions} from 'react-native';

const config = {
    SCREEN_HEIGHT: Dimensions.get('window').height,
    SCREEN_WIDTH: Dimensions.get('window').width,
    HEADER_HEIGHT: Dimensions.get('window').height - 45
}

const strings = {
    NAME_APP: "UNSC",
    PASS: "Password",
    EMAIL: "Email",
    USER: "Username",
    TITLE_BUTTON:"Login",
    REGISTER_SCREEN: "Register Screen",
    EMAILERROR: 'Email Incorrecto',
    PASSERROR: 'Password Incorrecto',
    EMPTY_TITLE: 'Revise los datos ingresados',
  EMPTY_VALUES: 'Verifique que sean caracteres validos',
  REGISTER: 'Register',
  NETX: 'Siguiente',
  PREV: 'Anterior',
  TITULO1: 'PDM',
  TITULO2: 'HITO 3',
  TITULO3: 'FIREBASE',
  CONTENIDO1: 'PDiM - Unifranz',
  CONTENIDO2: 'Univ: Isaac Limbert Herrera Mareño Gestion 2020',
  CONTENIDO3: 'Integracion de React Native - FireBase',
}

export default {
    CONFIG: config,
    STRINGS: strings
}
