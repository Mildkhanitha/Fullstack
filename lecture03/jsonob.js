const bookobj = {
    titile: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isAvailable: false,
};

const bookJSON = JSON.stringify(bookobj);
console.log(bookJSON);
console.log(typeof bookJSON);

const receivedBookObj = JSON.parse(bookJSON);
console.log(receivedBookObj.author);
console.log(typeof receivedBookObj);