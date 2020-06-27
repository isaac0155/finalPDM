import {Dimensions} from 'react-native';

const config = {
    SCREEN_HEIGHT: Dimensions.get('window').height,
    SCREEN_WIDTH: Dimensions.get('window').width,
    HEADER_HEIGHT: Dimensions.get('window').height - 45
}

const strings = {
    NAME_APP: "UNSC",
    PASS: "Password",
    EMAIL: "E-mail",
    USER: "Username",
    TITLE_BUTTON:"Login",
    REGISTER_SCREEN: "Register Screen",
    EMAILERROR: 'Email Incorrecto..!!',
    PASSERROR: 'Password Invalido',
    EMPTY_TITLE: 'Review Email/Password values',
  EMPTY_VALUES: 'Empty values detected',
  REGISTER: 'Register',
}

export default {
    CONFIG: config,
    STRINGS: strings
}