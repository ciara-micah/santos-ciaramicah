bootGame = {
	
		create:function (){
		game.world.setBounds(0,0,bounds,0);
		game.stage.backgroundColor = "#ddd";
    	game.physics.startSystem(Phaser.Physics.ARCADE);
		game.state.start("loadGame");
    },

}