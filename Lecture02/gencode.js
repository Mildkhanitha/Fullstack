function geneateTempId(){
    const randomPart = Math.random().toString(36).substring(2, 8);
    return randomPart.toUpperCase();
}
const orderId = geneateTempId();
console.log("Generated Order ID: " + orderId);