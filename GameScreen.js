import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity,ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {words} from './WordLists'

// const Separator = () => (
//   <View style={styles.separator} />
// );
var wordList = []
var wordSet = words

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

  componentDidMount(){

  }
  
  alphaGenerator(){
    //Randomly Generated Letters
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var alpha1 = alphabet.split('')
    var alpha = []
    
        for(var i = 0; i <= 5; i++){
        alpha.push(alpha1[Math.floor(Math.random() * (alpha1.length - i)) + i ])
    }
    console.log("Randomly Generated Letters:",alpha)
    
    // console.log(words.length)
    
    // Loop to find matched words based on the Randomly Generated Letters
    for (var i = 0; i < wordSet.length; i++) {
        var newWord = wordSet[i].split('')
        var one = 0
        var alpha2 = [...alpha]
        var newWord2 = [...newWord]
        for (var j = 0; j < newWord.length; j++) {
            for (var k = 0; k < alpha2.length; k++) {
                if (newWord[j] == alpha2[k]) {
                    one = one + 1
                    // console.log(newWord2[j], ' = ', alpha2[k], "MATCHES", one)
                    alpha2.splice(k, 1, 1)
                    break
    
                } else {
                    // console.log(newWord, 'didnt match for' ,newWord[j])
                }
            }
        }
        // console.log(one)
        if (one == wordSet[i].length) {
            // console.log("One:", one, " Word length:", words[i].length)
            wordList.push(wordSet[i])
        }
    }
        console.log("Generated Words:", wordList)
    
        
        //To generate an array of letters to be deleted from the Randomly selected letters
        var alpha3 = [...alpha]
        var x
        for(var i = 0; i < wordList.length; i++){
            var newWordList = wordList[i].split('')
            // console.log(newWordList)
            var newWordList2 = [...newWordList]
            for(var j = 0; j < newWordList2.length; j++){
                // console.log("hahaha")
                for(var k = 0; k < alpha3.length; k++){
                    if(newWordList2[j] == alpha3[k]){
                        // console.log(newWordList2[j], "=", alpha3[k])
                        alpha3.splice(k, 1)
                        newWordList2.splice(j, 1, '')
                        // console.log(alpha3)
                        // alpha3 = alpha3
    
    
                        // k += 1
                        break
                    }
                    else{
                    }
                }
            }
            
        }
        
    
            //To generate the final set of letters
            alpha4 = [...alpha]
            for(var i = 0; i < alpha3.length; i++){
                for(var j = 0; j < alpha4.length; j++){
                    if(alpha3[i] == alpha4[j]){
                        alpha3.splice(i, 1, '')
                        alpha4.splice(j, 1)
                        break
                    }
                }
            }
            console.log("Final Set of Letters:",alpha4)
            console.log(alpha4.length)
    
            // return(
            //     // alpha4
            //     wordList
            // )
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
                this.alphaGenerator()
                // console.log(alpha5)
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
