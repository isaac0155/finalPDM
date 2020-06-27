import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../Config/Colors';

import MyApp from '../Views/Register/Register';
import LoginScreen from '../Views/Login/LoginScreen';
import ScreenPDM from '../Views/Onboarding/WelcomeScreen';
import ScreenDefensa from '../Views/Onboarding/TaskScreen';
import ScreenFireBase from '../Views/Onboarding/AboutScreen';

const Stack = createStackNavigator();
function mainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="ScreenPDM"
                    component={ScreenPDM}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ScreenDefensa"
                    component={ScreenDefensa}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ScreenFireBase"
                    component={ScreenFireBase}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        title: 'Login Form App',
                        headerStyle: {
                            backgroundColor: Colors.blue
                        },
                        headerTintColor: Colors.white,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: Colors.white,
                        },
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={MyApp}
                    options={{
                        title: 'My App',
                        headerStyle: {
                            backgroundColor: Colors.black2
                        },
                        headerTintColor: Colors.white,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            color: Colors.white,
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default mainNavigator;
