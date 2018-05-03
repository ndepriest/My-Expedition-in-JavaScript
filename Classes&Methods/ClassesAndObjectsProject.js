class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

 get title() {
   return this._title;
 }

 get isCheckedOut() {
   return this._isCheckedOut;
 }

 get ratings() {
   return this._ratings;
 }

 set isCheckedOut(newCheckedOut) {
   this._isCheckedOut = newCheckedOut;
 }

 toggleCheckOutStatus() {
   this._isCheckedOut = !this._isCheckedOut;
  }

 getAverageRating() {
    let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = this._ratings.length;
    return ratingsSum / lengthOfArray;
  }

 addRating(newRating)  {
   if (isNaN(newRating) || newRating < 1 || newRating > 5) {
        console.log("Please enter a rating between 1 and 5.");
    } else {
        this._ratings.push(newRating);
        console.log("Thank you for your rating.");
    }
 }
}

class Book extends Media {
  constructor(author, pages, title) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

 get author() {
  return this._author;
}

 get pages()  {
   return this._pages;
 }
}

class Movie extends Media {
  constructor(director, runTime, title) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

 get director() {
   return this._director;
 }

 get runTime() {
   return this._runTime;
 }
}

class CD extends Media {
  constructor(artist, songs, title) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

 get artist() {
   return this._artist;
  }

 get songs() {
   return this._songs;
  }

 shuffle() {
  let n = this._songs.length;
  let tempSongs = [];
  for ( let i = 0; i < n-1; i++ ) {
    // The following line removes one random element from songs
    // and pushes it onto tempSongs
    tempSongs.push(this._songs.splice(Math.floor(Math.random()*this._songs.length),1)[0]);
  }
  // Push the remaining item onto tempSongs
  tempSongs.push(this._songs[0]);
  this._songs = tempSongs;
 }
}



const historyOfEverything = new Book('Bill Byson', 544, 'A Short History of Nearly Everything');
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 116, 'Speed');
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();
console.log(speed.getAverageRating());

const brothers = new CD("Brother's Osborne", ['Dirt Rich','21 Summer','Stay A Little Longer','Pawn Shop','Rum','Down Home', "It Ain't My Fault"], 'Pawn Shop');


brothers.shuffle();
console.log(brothers.songs);
