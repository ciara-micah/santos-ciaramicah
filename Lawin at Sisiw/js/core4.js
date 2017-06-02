playGame = {
	create: function () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0,0,'bg');
    player = game.add.sprite(0, 420,'man');
    keyboard = game.input.keyboard.createCursorKeys();
	
	lawin = game.add.group();
	lawin.enableBody = true;

	playGame.createlawin(1500);

    playGame.physics.arcade.enable(player);
    playGame.physics.arcade.enable(lawin);
	
	

    player.animations.add('walk-right',[4,5,6,7],10,true);
    player.animations.add('walk-left',[0,1,2,3],10,true);

},

update: function() {
	playGame.physics.arcade.collide(lawin);
	playGame.physics.arcade.collide(player);
	playGame.physics.arcade.overlap(player,lawin,collectlawins);
	if(keyboard.right.isDown){
		player.body.velocity.x = 600;
		player.animations.play('walk-right');
	}
	else if(keyboard.left.isDown){
		player.body.velocity.x = -700;
		player.animations.play('walk-left');
	}
	else{
		player.body.velocity.x = 0;
		player.animations.stop();
	}
	
},

 createlawin:function(time){
	setInterval(function(){
		lawins = lawin.create(Math.random()*w,0,'lawin');
		lawins.body.gravity.y = 1000;
	},time);
},

 collectlawin:function(player,lawin){
	score = score + 5;
    scoreText.text = "SCORE: "+score;
    lawin.kill();
	lawins.kill();

	if(getBest()<=score){
		saveBest(score);
		bestText.text = "BEST: " +score;
	}
	if(score<0){
        gameText.text = "GAME OVER";
    }
    else{
        gameText.text = "";
    }
},

 killlawin:function(player,lawin){
   score = score + 5;
    scoreText.text = "SCORE: "+score;
    brain.kill();
    
    if(getBest()<=score){
		saveBest(score);
		bestText.text = "BEST: " +score;
	}
    if(score<0){
        gameText.text = "GAME OVER";
    }
    else{
        gameText.text = "";
    }
},
saveBest:function (value){
	localStorage.setItem("gameStorage",value);
},


 goRight: function(){
	player.animations.play('walk-right');
	player.body.velocity.y = 300;
},

goLeft:function (){
	player.animations.play('walk-left');
	player.body.velocity.y = -400;
}
}
