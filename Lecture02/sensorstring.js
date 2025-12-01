function censorWord(sentence, wordtoCensor){
    const regex = new RegExp(wordtoCensor, 'gi');
    const censoredSentence = sentence.replace(regex, '****');
    return censoredSentence;
}
const originalPost = "javaScript is the best programming language. I love JavaScript!";
const cleanpost = censorWord(originalPost, "JavaScript");
console.log(cleanpost);