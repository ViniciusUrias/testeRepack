import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import Routes from './src/routes';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const libs = [
    '@haskkor/react-native-recaptchav3',
    '@react-native-async-storage/async-storage',
    '@react-native-masked-view/masked-view',
    '@react-navigation/native',
    '@react-navigation/native-stack',
    '@react-navigation/stack',
    'react-native-gesture-handler',
    'react-native-safe-area-context',
    'react-native-screens',
    'react-native-reanimated',
  ];
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={libs}
        renderItem={({item}) => (
          <Text style={styles.item}>{item}</Text>
        )}></FlatList>
        <Routes />
    </SafeAreaView>
    </NavigationContainer>
        </GestureHandlerRootView>
  );
}

export default App;
