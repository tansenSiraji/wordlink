import React, { Component } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity,ImageBackground, FlatList, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import {words} from './WordLists'

// const Separator = () => (
//   <View style={styles.separator} />
// );
var words = ["ability","able","about","above","accept","match","math","according","account","across","act","action","activity","actually","add","address","administration","admit","adult","affect","after","again","against","age","agency","agent","ago","agree","agreement","ahead","air","all","allow","almost","alone","along","already","also","although","always", "male", "meal", "am", "American","among","amount","analysis","and","animal","another","answer","any","anyone","anything","appear","apply","approach","area","argue","arm","around","arrive","art","article","artist","as","ask","assume","at","attack","attention","attorney","audience","author","authority","available","avoid","away","baby","back","bad","bag","ball","bank","bar","base","be","beat","beautiful","because","become","bed","before","begin","behavior","behind","believe","benefit","best","better","between","beyond","big","bill","billion","bit","black","blood","blue","board","body","book","born","both","box","boy","break","bring","brother","budget","build","building","business","but","buy","by","call","camera","campaign","can","cancer","candidate","capital","car","card","care","career","carry","case","catch","cause","cell","center","central","century","certain","certainly","chair","challenge","chance","change","character","charge","check","child","choice","choose","church","citizen","city","civil","claim","class","clear","clearly","close","coach","cold","collection","college","color","come","commercial","common","community","company","compare","computer","concern","condition","conference","Congress","consider","consumer","contain","continue","control","cost","could","country","couple","course","court","cover","create","crime","cultural","culture","cup","current","customer","cut","dark","data","daughter","day","dead","deal","death","debate","decade","decide","decision","deep","defense","degree","Democrat","democratic","describe","design","despite","detail","determine","develop","development","die","difference","different","difficult","dinner","direction","director","discover","discuss","discussion","disease","do","doctor","dog","door","down","draw","dream","drive","drop","drug","during","each","early","east","easy","eat","economic","economy","edge","education","effect","effort","eight","either","election","else","employee","end","energy","enjoy","enough","enter","entire","environment","environmental","especially","establish","even","evening","event","ever","every","everybody","everyone","everything","evidence","exactly","example","executive","exist","expect","experience","expert","explain","eye","face","fact","factor","fail","fall","family","far","fast","father","fear","federal","feel","feeling","few","field","fight","figure","fill","film","final","finally","financial","find","fine","finger","finish","fire","firm","first","fish","five","floor","fly","focus","follow","food","foot","for","force","foreign","forget","form","former","forward","four","free","friend","from","front","full","fund","future","game","garden","gas","general","generation","get","girl","give","glass","go","goal","good","government","great","green","ground","group","grow","growth","guess","gun","guy","hair","half","hand","hang","happen","happy","hard","have","he","head","health","hear","heart","heat","heavy","help","her","here","herself","high","him","himself","his","history","hit","hold","home","hope","hospital","hot","hotel","hour","house","how","however","huge","human","hundred","husband","I","idea","identify","if","image","imagine","impact","important","improve","in", "ink","include","including","increase","indeed","indicate","individual","industry","information","inside","instead","institution","interest","interesting","international","interview","into","investment","involve","issue","it","item","its","itself","job","join","just","keep","key","kid","kill","kind","kitchen","know","knowledge","land","language","large","last","late","later","laugh","law","lawyer","lay","lead","leader","learn","least","leave","left","leg","legal","less","let","letter","level","lie","life","light","like","likely","line","list","listen","little","live","local","long","look","lose","loss","lot","love","low","machine","magazine","main","maintain","major","majority","make","man","manage","management","manager","many","market","marriage","material","matter","may","maybe","me","mean","measure","media","medical","meet","meeting","member","memory","mention","message","method","middle","might","military","million","mind","minute","miss","mission","model","modern","moment","money","month","more","morning","most","mother","mouth","move","movement","movie","Mr","Mrs","much","music","must","my","myself","name","nation","national","natural","nature","near","nearly","necessary","need","network","never","new","news","newspaper","next","nice","night","no","none","nor","north","not","note","nothing","notice","now","n't","number","occur","of","off","offer","office","officer","official","often","oh","oil","ok","old","on","once","one","only","onto","open","operation","opportunity","option","or","order","organization","other","others","our","out","outside","over","own","owner","page", "pie", "pile", "lip", "pain","painting","paper","parent","part","participant","particular","particularly","partner","party","pass","past","patient","pattern","pay","peace","people","per","perform","performance","perhaps","period","person","personal","phone","physical","pick","picture","piece","place","plan","plant","play","player","PM","point","police","policy","political","politics","poor","popular","population","position","positive","possible","power","practice","prepare","present","president","pressure","pretty","prevent","price","private","probably","problem","process","produce","product","production","professional","professor","program","project","property","protect","prove","provide","public","pull","purpose","push","put","quality","question","quickly","quite","race","radio","raise","range","rate","rather","reach","read","ready","real","reality","realize","really","reason","receive","recent","recently","recognize","record","red","reduce","reflect","region","relate","relationship","religious","remain","remember","remove","report","represent","Republican","require","research","resource","respond","response","responsibility","rest","result","return","reveal","rich","right","rise","risk","road","rock","role","room","rule","run","safe","same","save","say","scene","school","science","scientist","score","sea","season","seat","second","section","security","see","seek","seem","sell","send","senior","sense","series","serious","serve","service","set","seven","several","sex","sexual","shake","share","she","shoot","short","shot","should","shoulder","show","side","sign","significant","similar","simple","simply","since","sing","single","sister","sit","site","situation","six","size","skill","skin","small","smile","so","social","society","soldier","some","somebody","someone","something","sometimes","son","song","soon","sort","sound","source","south","southern","space","speak","special","specific","speech","spend","sport","spring","staff","stage","stand","standard","star","start","state","statement","station","stay","step","still","stock","stop","store","story","strategy","street","strong","structure","student","study","stuff","style","subject","success","successful","such","suddenly","suffer","suggest","summer","support","sure","surface","system","table","take","talk","task","tax","teach","teacher","team","technology","television","tell","ten","tend","term","test","than","thank","that","the","their","them","themselves","then","theory","there","these","they","thing","think","third","this","those","though","thought","thousand","threat","three","through","throughout","throw","thus","time","to","today","together","tonight","too","top","total","tough","toward","town","trade","traditional","training","travel","treat","treatment","tree","trial","trip","trouble","true","truth","try","turn","TV","two","type","under","understand","unit","until","up","upon","us","use","usually","value","various","very","victim","view","violence","visit","voice","vote","wait","walk","wall","want","war","watch","water","way","we","weapon","wear","week","weight","well","west","western","what","whatever","when","where","whether","which","while","white","who","whole","whom","whose","why","wide","wife","will","win","wind","window","wish","with","within","without","woman","wonder","word","work","worker","world","worry","would","write","writer","wrong","yard","yeah","year","yes","yet","you","young","your","yourself"]

var alpha = [], alpha1 = [], alpha2 = [], alpha3 = [],  alpha5 = [], wordList = []
class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {box1 : '', box2: '', box3: '', alpha4: [], storeWord: [], splitMatchedWord: [], wordListLength: 0, wordListLengthArray: []}

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
    var that = this;
    var wordListLengthArray = this.state.wordListLengthArray
    wordListLengthArray.length = 0
    this.alphabetGenerator()
    this.wordBoxGenerator()
    // items = () => {
    //   for(var i = 0; i < alpha4.length; i++){
    //     arr = alpha4[i]
    //   }
    //   return { id: i, src: alpha4[i]};
   

    // };
    // that.setState({
    //   dataSource: items,
    // });
  }

  // addAlphabets() {

    // return this.state.arr.map((data, key) => {
    //   return (
    //     <View key = {key} style={{ width: 50, height: 50, backgroundColor: 'beige' }} value = {data.key}><Text>{data.key}</Text></View>
    //   )
    // })

// }

wordBoxGenerator(){
  // wordList = []
  var wordListLength = this.state.wordListLength
  var wordListLengthArray = this.state.wordListLengthArray

  console.log(wordListLength, "WordList Length")

  // var splitWordList = wordList[0].split('')
  // var length = splitWordList.length
  return this.state.wordListLengthArray.map((data, key) => {
    const index = key
    return (
      <View>
      <View key = {index} style={{ width: 50, height: 50, backgroundColor: 'beige' }} ><Text>{wordListLength}</Text></View>
      </View>
    )
  })
  
  }


  alphabetGenerator(){
    wordList = []
    var alpha4 = this.state.alpha4
    var wordListLength = this.state.wordListLength
    var wordListLengthArray = this.state.wordListLengthArray
    

    //Randomly Generated Letters
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    alpha1 = alphabet.split('')
    // console.log(alpha1)
    alpha = []
    for (var i = 0; i <= 5; i++) {
      alpha.push(alpha1[Math.floor(Math.random() * (alpha1.length - i)) + i])
    }

    console.log("Randomly Generated Letters:", alpha)


    // Loop to find matched words based on the Randomly Generated Letters
    for (var i = 0; i < words.length; i++) {
      var newWord = words[i].split('')
      var one = 0
      alpha2 = [...alpha]
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
      if (one == words[i].length) {
        wordList.push(words[i])
      }
    }
    this.setState({wordList: wordList})
    console.log("Generated Words:", wordList)


    //To generate an array of letters to be deleted from the Randomly selected letters
    alpha3 = [...alpha]
    
    // var x
    for (var i = 0; i < wordList.length; i++) {
      var newWordList = wordList[i].split('')
      var newWordList2 = [...newWordList]
      for (var j = 0; j < newWordList2.length; j++) {
        for (var k = 0; k < alpha3.length; k++) {
          if (newWordList2[j] == alpha3[k]) {
            alpha3.splice(k, 1)
            newWordList2.splice(j, 1, '')
            break
          }
          else {
            // console.log(newWordList[j], "!=", alpha[k])
          }
        }
      }
    }

    // wordListLengthArray = []
    var wordListJoin = wordList.join('')
    console.log(wordListJoin, "WordList Join")
    wordListLength = wordListJoin.length
    while(wordListLength > 0){
      wordListLengthArray.push(1)
      wordListLength -= 1
    }

    this.setState({wordListLength: wordListLength})
    console.log(wordListLengthArray, "Length")

    //To generate the final set of letters
    alpha4 = [...alpha]
    for (var i = 0; i < alpha3.length; i++) {
      for (var j = 0; j < alpha4.length; j++) {
        if (alpha3[i] == alpha4[j]) {
          alpha3.splice(i, 1, '')
          alpha4.splice(j, 1)
          break
        }
      }
    }
    console.log("Final Set of Letters:", alpha4)
    console.log(alpha4.length)

    if(alpha4.length != 4){
      this.alphabetGenerator()
    }else{
      this.setState({alpha4: alpha4})
    }

  }
  addLetters(alphabet){
    var storeWord = this.state.storeWord
    var splitMatchedWord = this.state.splitMatchedWord
    storeWord.push(alphabet)
    var wordForMatch = storeWord.join('')
    for(var i = 0; i < words.length; i++){
      if(wordForMatch == words[i]){
        var matchedWord = words[i]
        splitMatchedWord = words[i].split('')
      }
    }
    this.setState({splitMatchedWord: splitMatchedWord})
    console.log("STORE WORD", wordForMatch)
    console.log("MATCHED WORD", matchedWord)
    console.log("SPLIT MATCHED WORD", splitMatchedWord)
    return splitMatchedWord
  }

  render() {
    var box1 = this.state.box1
    var box2 = this.state.box2
    var box3 = this.state.box3
    var box4 = this.state.box4
    var arr = this.state.arr
    var alpha4 = this.state.alpha4
    var storeWord = this.state.storeWord
    var splitMatchedWord = this.state.splitMatchedWord
    console.log(splitMatchedWord)

    // let newArray = this.state.arr.map((item, key) => {
    //   for(var i = 0; i < alpha4.length; i++){
    //     arr.push(alpha[i])
    //     return(
    //        <View style={{ width: 50, height: 50, backgroundColor: 'beige' }}>
    //           <Text style={{ fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center', borderWidth: 5 }}
    //           value = {item[key]}>{item[key]}</Text>
    //             </View>
    //     )
    //   }
    //     // this.setState({arr: arr})
    // })
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
            {this.wordBoxGenerator()}
            {/* <View style={styles.middle}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center' }}>{this.state.splitMatchedWord[0]}</Text>
            </View>
            <View style={styles.middle}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center' }}>{this.state.splitMatchedWord[1]}</Text>
            </View>
            <View style={styles.middle}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center' }}>{this.state.splitMatchedWord[2]}</Text>
            </View>
            <View style={styles.middle}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center' }}>{this.state.splitMatchedWord[3]}</Text>
            </View> */}
          </View>
        </View>
        <View style={{
          // flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingBottom: 10
          // backgroundColor: "red"
        }}>
          <View style={{ width: 100,  backgroundColor: 'beige' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center', borderWidth: 5 }}>{storeWord}</Text>
              </View>
          </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingBottom: 0
          // backgroundColor: "red"
        }}><TouchableOpacity
        onPress = {() => {
          splitMatchedWord.length = 0
          storeWord.length = 0
          this.setState({splitMatchedWord: splitMatchedWord, storeWord: storeWord})
        }}
        >
          <View style={{ width: 100,  backgroundColor: 'beige' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center', borderWidth: 5 }}>CLEAR</Text>
              </View>
          </TouchableOpacity>
          </View>
        <View style={{
          flex: 2.2,
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          // backgroundColor: "red"
        }}>
          <View style={{
            // flexDirection: 'row',
            // alignItems: "center",
            // justifyContent: 'space-evenly',
          }}>
            {/* <Text>Lower Section</Text> */}
            <View style = {{
              flexDirection: 'row',
              alignItems: "center",
              justifyContent: 'space-evenly',
              paddingBottom: 20}}>
                <TouchableOpacity
              onPress={() => {
                this.addLetters(alpha4[0])
                // Alert.alert("A")
                box1 = alpha4[0]

                this.setState({ box1: box1 })
              }}
            >
              <View style={{ width: 50, height: 50, backgroundColor: 'beige' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center', borderWidth: 5 }}>{alpha4[0]}</Text>
              </View>
            </TouchableOpacity>
            </View>
            <View
              style = {{
                flexDirection: 'row',
              alignItems: "center",
              justifyContent: 'space-evenly'
            }}>
              <TouchableOpacity
              onPress={() => {
                this.addLetters(alpha4[3])
                // Alert.alert("A")
                box4 = alpha4[3]
                this.setState({ box4: box4 })
              }}
            >
              <View style={{ width: 50, height: 50, backgroundColor: 'beige' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center', borderWidth: 5 }}>{alpha4[3]}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.addLetters(alpha4[1])
                box2 = alpha4[1]
                this.setState({ box2: box2 })
              }}
            >
              <View style={{ width: 50, height: 50, backgroundColor: 'beige' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center', borderWidth: 5 }}>{alpha4[1]}</Text>
              </View>
            </TouchableOpacity>
              </View>
            <View style = {{
              flexDirection: 'row',
              alignItems: "center",
              justifyContent: 'space-evenly',
              paddingTop: 30}}>
                <TouchableOpacity
              onPress={() => {
                this.addLetters(alpha4[2])
                box3 = alpha4[2]
                this.setState({ box3: box3 })
              }}
            >
              <View style={{ width: 50, height: 50, backgroundColor: 'beige' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center', borderWidth: 5 }}>{alpha4[2]}</Text>
              </View>
            </TouchableOpacity>
            </View>
            
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
  item: {
     width: 50, 
     height: 50, 
     backgroundColor: 'beige' 

  },
  itemText: {
    fontSize: 30, fontWeight: 'bold', justifyContent: 'center', textAlignVertical: 'center', textAlign: 'center', borderWidth: 5 
  }

});

export default GameScreen;
