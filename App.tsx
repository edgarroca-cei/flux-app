import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import MainScreen from './src/screens/MainScreen';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar hidden />
      <MainScreen />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
