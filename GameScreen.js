import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

// const Separator = () => (
//   <View style={styles.separator} />
// );

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {box1 : '', box2: '', box3: ''}

  }
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
    var box1 = this.state.box1
    var box2 = this.state.box2
    var box3 = this.state.box3
    return (
      <View>
        <Text >
          The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
      </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        // onChangeText={text => onChangeText(text)}
        value={this.state.box1}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          value={this.state.box2}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          value={this.state.box3}
        />

        {/* <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} > */}
          <TouchableOpacity
          onPress = {() => {
            // Alert.alert("A")
            box1 = 'B'
            this.setState({box1: box1})
          }}
          >
            <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}>
              <Text style = {{fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center'}}>B</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
          onPress = {() => {
            // Alert.alert("A")
            box2 = 'A'
            this.setState({box2: box2})
          }}
          >
            <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}>
              <Text style = {{fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center'}}>A</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
          onPress = {() => {
            // Alert.alert("A")
            box3 = 'T'
            this.setState({box3: box3})
          }}
          >
            <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}>
              <Text style = {{fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center'}}>T</Text>
            </View>
            </TouchableOpacity>
          {/* </View> */}
        




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
