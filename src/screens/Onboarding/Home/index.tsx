import {Button, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Home</Text>
      <Button title='Sms' onPress={() => navigation.navigate('Sms')}></Button>
    </View>
  );
};

export default Home;
