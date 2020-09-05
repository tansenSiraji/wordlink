import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity,ImageBackground } from 'react-native';
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
      //Main View
      <View style={{
        flex: 1,
      }}>
        <ImageBackground source={require('./Assets/Background.png')} style={styles.image}>
        <View style={{
          flex:3,
          flexDirection: 'column',
          // alignItems: "center",
          justifyContent: 'space-evenly',
          // backgroundColor: "blue"
        }}>
          {/*Upper Section View*/}
          <View style={{
            flexDirection: "row",
            justifyContent: 'space-evenly',
          }}>
            {/* <Text>Upper Section</Text> */}
            <View style={styles.middle}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center' }}>{this.state.box1}</Text>
            </View>
            <View style={styles.middle}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center' }}>{this.state.box2}</Text>
            </View>
            <View style={styles.middle}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center' }}>{this.state.box3}</Text>
            </View>
          </View>
        </View>

        <View style={{
          flex: 2.2,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          // backgroundColor: "red"
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: 'space-evenly',
          }}>
            {/* <Text>Lower Section</Text> */}
            <TouchableOpacity
              onPress={() => {
                // Alert.alert("A")
                box1 = 'B'
                this.setState({ box1: box1 })
              }}
            >
              <View style={{ width: 50, height: 50, backgroundColor: 'beige' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center', borderWidth: 5 }}>B</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // Alert.alert("A")
                box2 = 'A'
                this.setState({ box2: box2 })
              }}
            >
              <View style={{ width: 50, height: 50, backgroundColor: 'beige' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center', borderWidth: 5 }}>A</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // Alert.alert("A")
                box3 = 'T'
                this.setState({ box3: box3 })
              }}
            >
              <View style={{ width: 50, height: 50, backgroundColor: 'beige' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center', borderWidth: 5 }}>T</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </ImageBackground>
      </ View>
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
  middle: {
    height: 50,
    width: 50,
    backgroundColor: "beige",
    borderWidth: 5,
    // shadowColor: "#FFFFFF",
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 2,
    
    // elevation: 10,
    
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

});

export default GameScreen;
