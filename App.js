import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import GameScreen from './GameScreen';

class TomarScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen,
    
  },
  {
    initialRouteName: 'Home',
  }
);
const AppContainer = createAppContainer(RootStack);

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: GridTable,
//   },
// });

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}