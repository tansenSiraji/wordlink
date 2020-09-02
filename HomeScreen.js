import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

// const Separator = () => (
//   <View style={styles.separator} />
// );

class HomeScreen extends Component {
    static navigationOptions = {
        // headerTitleStyle: { 
        //   textAlign:"center", 
        //   flex:1,
        //   },
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerLeft: null,
        }

    render() {
        const {navigate} = this.props.navigation

        return(
            <SafeAreaView >
                <View>
                    {/* <Text style={styles.title}>
                        The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
                    </Text> */}
                    <Button
                        title="Play"
                        onPress={() => navigate("Game")}
                    />
                </View>
            </SafeAreaView>
);

        
    }
     
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default HomeScreen;
