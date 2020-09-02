import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';

// const Separator = () => (
//   <View style={styles.separator} />
// );

class GameScreen extends Component {
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
    
    constructor(props) {
        super(props);
        
      }

      render(){
        return(
          <View>
      <Text >
        The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
      </Text>
      
    </View>
        )
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

export default GameScreen;
