import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/app/store';
import Home from './src/screens/Home';

export default function App() {
  return (
    <Provider store={store}>
      <Home/>
      <StatusBar style="auto" />
    </Provider>
  );
}
