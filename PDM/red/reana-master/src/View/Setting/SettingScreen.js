import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert, Image} from 'react-native';

import CTextField from '../../Components/CTextField';
import Button from '../../Components/login/Button';
import FirebasePlugin, {firestore} from '../../Plugins/firebase/Firebase';

import Constants from '../../Config/Constants';
import Utils from '../../utils/utils';

const SettingScreen = () => {
  const [reclamName, setEmailName] = useState('');
  const [errorEmailName, setErrorEmailName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateCTextField = () => {
    let isValidField = Utils.isValidField(reclamName);
    isValidField ?
      setErrorEmailName('') :
      setErrorEmailName(Constants.STRING.QUEJA);
    return isValidField;
  };

  const onPressAdd = () => {
    let isValid = validateCTextField();
    if (isValid) {
      addReclamRowToFirebase();
    } else {
      Alert.alert(Constants.STRING.REVIEW_EMAIL);
    }
  }

  const addGroupReclam = (reclamID, userID) => {
    const reclamAddedRef = firestore
      .collection('groupEmails').doc(userID)
      .collection('email').doc('RECLAM_ADDED');

    reclamAddedRef.set({
      userID: userID,
    })
      .then(function () {
        setIsLoading(false);
        Alert.alert('El reclamo ha sido enviado:', reclamAddedRef.id);
      })
      .catch(function (error) {
        Alert.alert('Error al crear', error.message);
        setIsLoading(false);
      });
  }

  const addReclamRowToFirebase = () => {
    setIsLoading(true);

    const reclamRef = firestore.collection('Reclams').doc();
    const userID = FirebasePlugin.auth().currentUser.uid;

    reclamRef.set({
      reclamID: reclamRef.id,
      reclamName: reclamName,
      userID: userID,
    })
      .then(function () {
        setIsLoading(false);
        addGroupReclam(reclamRef.id, userID);
        Alert.alert('Reclamo Enviado:', reclamRef.id);
      })
      .catch(function (error) {
        Alert.alert('Error al crear', error.message);
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.ibb.co/vm7zzc7/Logo.png',
            }}
          />
        </View>
      <CTextField style={styles.loco}
        value={reclamName}
        autoCorrect={false}
        placeholder={Constants.STRING.QUEJA}
        error={errorEmailName}
        onChange={(newEmailName) => {
          setEmailName(newEmailName);
        }}
        onValidate={validateCTextField}
      />
    <Image style={styles.loco}></Image>
    <Button
        style={styles.loco}
        titleButton={Constants.STRING.EVIAR}
        onPress={onPressAdd}
        isLoading={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    marginTop: 50,
    width: 190,
    height: 60,
    margin: 50,
    marginBottom:100
  },
  loco:{
    marginTop:100,
  }
});

export default SettingScreen;
