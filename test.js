let fs = require("fs")

var words = []
let text = fs.readFileSync("tenThouWords.txt").toString().split(" ")
for(var i = 0; i < text.length; i++){
    words.push(text[i])
}

try {
    fs.writeFileSync('WordLists3.js', JSON.stringify(words));
  } catch(err) {
    
    console.error(err);
  }