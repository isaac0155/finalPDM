import React from 'react';

import LoginScreen from './src/View/Login/LoginScreen';
import MainNavigator from './src/Navigator/MainNavigator';


const App: () => React$Node = () => {
  return (
    <MainNavigator/>
  );
};

export default App;