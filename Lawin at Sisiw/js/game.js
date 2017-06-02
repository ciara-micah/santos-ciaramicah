var w = 800,h = 600;
var player, score = 3, scoreText, timeText, gameText, bestText;
var btnRight;
var btnLeft;
var keyboard;
var bg;
var menuText;
var bounds = 15000;
var collectlawins;
var mano;
var lawin;

var game = new Phaser.Game(w, h, Phaser.CANVAS, '');

game.state.add("bootGame",bootGame);
game.state.add("loadGame",loadGame);
game.state.add("playGame",playGame);
game.state.add("menuGame",menuGame);

game.state.start("bootGame");