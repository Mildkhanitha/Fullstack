const err_status = 700;

if(err_status === 200){
    console.log("OK"); }

else if(err_status === 404){
    console.log("Not Found");
}
else{
    console.log("Error");
}
//--------------------------------------
switch(err_status){
    case 200:
        console.log("OK");
        break;
    case 404:
        console.log("Not Found");
        break;
    default:
        console.log("Error");
}
//--------------------------------------
const messege = (err_status === 200) ? "OK" : "Error";
console.log(messege);