import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import LoginScreen from '../View/login/LoginScreen';
import RegisterScreen from '../View/register/Register';
import AppScreen from '../View/App/AppScreen';
import SettingScreen from '../View/Setting/SettingScreen';
import SplashScreen from '../View/Splash/SplashScreen';
import RegisterPaciente from '../View/App/registerPaciente';
import RegisterCentro from '../View/App/registerCentro';
import Modoguia from '../View/App/modiguia';
import ModoEmer from '../View/App/modoEmerg';

import Colors from '../Config/Colors';

const Stack = createStackNavigator();
const StackScreen = ({ route }) => {
  return (
    <Stack.Navigator independent={true}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        initialParams={{ route }}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Register Form',
          headerStyle: {
            backgroundColor: Colors.appPrimary,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.white,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name='App'
        component={AppScreen}
        options={{
          title: 'Inicio',
          headerStyle: {
            backgroundColor: Colors.appPrimary,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: Colors.white,
            fontSize: 25,
          },
        }}
      />

      <Drawer.Screen
        name="1"
        component={Modoguia}
        options={{title: 'Iniciar Modo Guía'}}
      />
      <Drawer.Screen
        name="2"
        component={ModoEmer}
        options={{title: 'Iniciar Modo de Emergencias'}}
      />
      <Drawer.Screen
        name="Registrar Paciente"
        component={RegisterPaciente}
        options={{title: 'Registrar Paciente'}}
      />
      <Drawer.Screen
        name="Registrar Centro"
        component={RegisterCentro}
        options={{title: 'Registrar Centro de Salud'}}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{title: 'Raclamos'}}
      />
    </Drawer.Navigator>
  );
};

const MainStack = createStackNavigator();
const MainStackScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLogged, setIsLogged] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <MainStack.Navigator headerMode="none">
      {isLoading ? (
        <MainStack.Screen name="Loading" component={SplashScreen} />
      ) : isLogged ? (
          <MainStack.Screen name="DrawerNavigation" component={DrawerScreen} />
        )
        : (
          <MainStack.Screen name="LoginRegister" component={StackScreen} initialParams={{ setIsLogged }}/>
        )
      }
    </MainStack.Navigator>
  );
};

const mainNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <MainStackScreen />
    </NavigationContainer>
  );
};

export default mainNavigator;
