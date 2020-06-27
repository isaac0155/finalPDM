import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, KeyboardAvoidingView, Alert } from 'react-native';

import LoginButton from '../../Components/Login/Button';
import TextInputForm from '../../Components/Login/TextInput';
import EmailTextField from '../../Components/Login/EmailTextField';
import LogoLogin from '../../Components/Login/Logo';
import DismissKeyboard from '../../Components/Login/DismissKeyboard';
import FirebasePlugin from '../../Plugins/firebase/Firebase';

import Utils from '../../Utils/Utils';
import Colors from '../../Config/Colors';
import Constants from '../../Config/Constants';
import Images from '../../Config/Images';

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
            : setErrorEmail(Constants.STRINGS.EMAILERROR);
        return isValidEmail;
    };

    const _validatePassword = () => {
        let isValidPassword = Utils.isValidField(password);
        isValidPassword
            ? setErrorPassword('')
            : setErrorPassword(Constants.STRINGS.PASSERROR);
        return isValidPassword;
    };

    const _onPress = () => {
        let emailData = _validateEmailAddress();
        let passwordData = _validatePassword();

        if (emailData && passwordData) {
            loginApp(email, password);
        } else {
            Alert.alert(Constants.STRINGS.EMPTY_TITLE, Constants.STRINGS.EMPTY_VALUES);
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
                                source={Images.EMAIL}
                                placeholder={Constants.STRINGS.EMAIL}
                                secureTextEntry={false}
                                autoCorrect={false} >
                            </EmailTextField>
                            <TextInputForm
                                onChangeText={(password) => (setPassword(password))}
                                onEndEditing={_validatePassword}
                                error={errorPassword}
                                source={Images.PASSWORD}
                                placeholder={Constants.STRINGS.PASS}
                                secureTextEntry={true}
                                autoCorrect={false} >
                            </TextInputForm>
                            <LoginButton
                                onPress={_onPress}
                                titleButton={Constants.STRINGS.TITLE_BUTTON}>
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
        backgroundColor: Colors.blue,
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
        
    },
});

export default LoginScreen;