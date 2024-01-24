import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Login from './screens/Login';

export default function App() {
  return (

  <View className="flex-1 items-center justify-center bg-blue-200">
    <Login/>
  </View>
  );
}