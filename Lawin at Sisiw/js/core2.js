loadGame = {
	preload:function (){
	game.load.image('lawin','img/lawin.png');
	game.load.image('bg','img/bg.png');
	game.load.spritesheet('btnLeft','img/btnLeft.png',10,50);
	game.load.spritesheet('btnRight','img/btnRight.png',10,20);
	game.load.image('mano','img/mano.png');
	game.load.spritesheet('man','img/man.png',77, 115);		
},

create: function(){
	game.state.start("menuGame");
	}
}