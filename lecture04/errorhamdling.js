function criticalCode(){
    throw "Throwing a critical error!";
}
function logError(theException){
    console.log("Error logged: "+ theException);
}
console.log("\n********Try...Catch Example********");

try {
    criticalCode();
} catch (ex) {
    console.log("got an error");
    logError(ex);
}
console.log("\n*******Throw Example********");

try {
    throw "This is a custom thrown error!";
} catch (ex) {
    console.log("Caught a thrown error: ");
    logError(ex);
}
console.log("\n********Finally Example********");

try {
    throw "Another error!";
} catch (ex) {
    console.log("Caught an error: ");
    logError(ex);
} finally {
    console.log("This finally block always runs.");
}
