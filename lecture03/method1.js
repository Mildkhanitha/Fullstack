const book = {
    title : "1984",
    author : "George Orwell",
    isAvalilable : true,
    chekOut : function() {
        this.isAvalilable = false;
    },
    checkIn : function() {
        this.isAvalilable = true;
    }

};
console.log(book.isAvalilable);
book.chekOut();
console.log(book.isAvalilable);
book.checkIn();
console.log(book.isAvalilable);