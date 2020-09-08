var word = ['box', 'job', 'to']

var obj = []
var obj2 = {}
// for(var i = 0; i < word.length; i++){
//     obj[i] = word[i]
// }

for(let [key, value] of Object.entries(word)){
   obj.push({num: key, word: value})
}
console.table(obj[0].word)