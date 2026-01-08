class Song {
    constructor(title,artist){
        this.title = title;
        this.artist = artist;
    }
}
const mysong = new Song("Bohemian Rhapsody", "Queen");
console.log(mysong);
console.log(typeof mysong);