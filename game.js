window.onload = function(){

    
const config = {
    width : 2170,
    height : 1040,
    scene: [Scene0, Scene1, Scene2, Scene3, Scene1_1, Scene1_2],
    physics:{
        default: 'arcade',
        arcade: {
            gravity: { y: 400
            }
        }
    }

}

var game = new Phaser.Game(config)




    
}