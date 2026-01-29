function promiseeTimeout(ms) {
    return new Promise((resolove,reject) => {
        setTimeout(resolove, ms);
    });
}
promiseeTimeout(2000).then(() => {
    console.log("Done");
    return promiseeTimeout(1000);

})
.then(() => {
    console.log("Again Done");
    return Promise.resolve(42);

})
.then((result) => {
    console.log("Result:", result);
})
.catch(() =>{
    console.log("Error occurred");
});