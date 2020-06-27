import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, KeyboardAvoidingView, Alert } from 'react-native';

import LoginButton from '../../components/login/Button';
import TextInputForm from '../../components/login/TextInputForm';
import EmailTextField from '../../components/login/EmailTextField';
import LogoLogin from '../../components/login/Logo';
import DismissKeyboard from '../../components/login/DismissKeyboard';
import FirebasePlugin from '../../plugins/firebase/Firebase';

import Utils from '../../utils/utils';
import Colors from '../../config/Colors';
import constants from '../../config/constants';
import images from '../../config/images';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const _validateEmailAddress = () => {
        let isValidEmail = Utils.isValidEmail(email);
        isValidEmail
            ? setErrorEmail('')
            : setErrorEmail(Constants.STRING.EMAILERROR);
        return isValidEmail;
    };

    const _validatePassword = () => {
        let isValidPassword = Utils.isValidField(password);
        isValidPassword
            ? setErrorPassword('')
            : setErrorPassword(Constants.STRING.PASSERROR);
        return isValidPassword;
    };

    const _onPress = () => {
        let emailData = _validateEmailAddress();
        let passwordData = _validatePassword();

        if (emailData && passwordData) {
            loginApp(email, password);
        } else {
            Alert.alert(Constants.STRING.EMPTY_TITLE, Constants.STRING.EMPTY_VALUES);
        }
    };
    const loginApp = (email, password) => {
        try {
            setIsLoading(true);
            FirebasePlugin.auth()
                .signInWithEmailAndPassword(email, password)
                .then(user => {
                    setIsLoading(false);
                    navigation.navigate('Register');
                })
                .catch(error => {
                    FirebasePlugin.auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then(user => {
                            setIsLoading(false);
                            navigation.navigate('Register');
                        })
                        .catch(error => {
                            setIsLoading(false);
                            Alert.alert('Invalid Values', error.message);
                        });
                });
        } catch (error) {
            setIsLoading(true);
            Alert.alert('Firebase Error', error.message);
        }
    };

    return (
        <DismissKeyboard>
            <KeyboardAvoidingView style={stylesLoginScreen.container} behavior="heigth" enabled>
                <View >
                    <SafeAreaView>
                        <LogoLogin style={stylesLoginScreen.logo}></LogoLogin>
                        <View style={stylesLoginScreen.form}>
                            <EmailTextField
                                onChangeText={(email) => (setEmail(email))}
                                onEndEditing={_validateEmailAddress}
                                error={errorEmail}
                                placeholder={constants.STRINGS.EMAIL}
                                secureTextEntry={false}
                                autoCorrect={false} >
                            </EmailTextField>
                            <TextInputForm
                                onChangeText={(password) => (setPassword(password))}
                                onEndEditing={_validatePassword}
                                error={errorPassword}
                                source={images.PASSWORD}
                                placeholder={constants.STRINGS.PASS}
                                secureTextEntry={true}
                                autoCorrect={false} >
                            </TextInputForm>
                            <LoginButton
                                onPress={_onPress}
                                titleButton={constants.STRINGS.TITLE_BUTTON}>
                            </LoginButton>
                        </View>
                    </SafeAreaView>
                </View>
            </KeyboardAvoidingView>
        </DismissKeyboard>
    );
}
const stylesLoginScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.dark,
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
    },
});

export default LoginScreen;