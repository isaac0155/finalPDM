import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Colors from '../../Config/Colors';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Cargando la App!!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.cel,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
