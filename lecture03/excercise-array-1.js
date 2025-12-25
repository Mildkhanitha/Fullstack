const furniture = ['Table', 'Chairs', 'Couch'];
for (let i = 0; i < furniture.length; i++) {
    for (let j = 0; j < furniture[i].length; j++) {
        console.log(furniture[i][j]);
    }
}
console.log("----------")
for (const fur of furniture) {
    for (const name of fur) {
        console.log(name)
    }};
console.log("----------")
furniture.forEach(name =>{
    for (const fur of name){
        console.log(fur)
    }
})
