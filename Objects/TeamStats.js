const team = {
  _players: [
    {
      firstName: "Brock",
     	lastName: "Osweiler",
    	age: 27
    },
    {
      firstName: "Von",
      lastName: "Miller",
      age: 28
    },
    {
      firstName: "John",
      lastName: "Elway",
      age: 57
    },
  ],
  _games: [
    {
      opponent: "Raiders",
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: "Ravens",
      teamPoints: 36,
      opponentPoints: 32
    },
    {
      opponent: "Patriots",
      teamPoints: 24,
      opponentPoints: 30
    },
  ],

  get players() {
    return this._players;
   },
  get games() {
    return this._games;
   },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
     };

    this.players.push(player);
   },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };

    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Spurs', 107, 110);
team.addGame('Rockies', 3, 5);
team.addGame('Chiefs', 28, 17);


console.log(team.players);
console.log(team.games);
