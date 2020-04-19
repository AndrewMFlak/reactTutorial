//declare object
var player = {score: 3,name: "Joe"}
console.log(player);
//directly mutating state causes you to lose history or updates made
player.score = 5
console.log(player);