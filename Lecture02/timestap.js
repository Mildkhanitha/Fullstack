const starttime = Date.now();
function someHevyTask(){
    let result = 0;
}
const endtime = Date.now();
const duration = endtime - starttime;
console.log("Task duration: " + duration + " milliseconds");