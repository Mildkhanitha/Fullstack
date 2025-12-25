const names = ['Justin', 'Sarah', 'Christopher'];

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.log("------------")

names.forEach(name => {
    console.log(name);
});
console.log("------------")
for (const name of names) {
    console.log(name);
}
console.log("------------")
names.forEach(myFunction);
function myFunction(name) {
    console.log(name);
}
