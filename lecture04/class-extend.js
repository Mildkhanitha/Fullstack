class Media {
    constructor(info){
        this.publishDate = info.publishDate;
        this.name = info.name;
    }

}
class Song extends Media { 
    constructor(SongData){
        super(SongData);
        this.artist = SongData.artist;
    }
}
const mysong = new Song({
    artist: "Queen",
    publishDate: "1975",
    name: "Bohemian Rhapsody"
});
console.log(mysong);    