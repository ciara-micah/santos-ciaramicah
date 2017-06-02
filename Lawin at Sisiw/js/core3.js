menuGame = {
	create:function (){
    bg = game.add.image(0,0, "bg");
    bg.scale.x = 3;
    bg.scale.x = 2;

 menuText = game.add.text(w/2-200,h/3,"playGame", {"fill":"#0000FF"});
menuText = game.add.text(w/3-230,h/5,"Lawin at Sisiw", {"fill":"#A52A2A"});
    menuText.scale.x = 3;
    menuText.scale.y = 3;

	keyboard = game.input.keyboard.createCursorKeys();
    },
    update:function(){
    if(keyboard.up.isDown){
    	game.state.start("playGame");

    	}
    }
}