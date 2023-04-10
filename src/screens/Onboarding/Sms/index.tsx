import {Button, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const Sms = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Sms</Text>
      <Button title='Home' onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
};

export default Sms;
