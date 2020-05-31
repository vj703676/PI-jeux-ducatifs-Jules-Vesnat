class Scene1 extends Phaser.Scene {

    constructor() {
        super("bootGame");
    }

    
    preload(){
        //this.load.video('menu', 'assets/video.mp4', 'loadeddata', false, true);
        this.load.image('back', 'assets/florence.png');
        this.load.image('ground', 'assets/ground.png');
        this.load.image('button', 'assets/button2.png');
        this.load.image('guard', 'assets/guard.png');
        this.load.image('menu1', 'assets/Menu1.Jpg');
        this.load.spritesheet('1', 'assets/1.png', { frameWidth: 203, frameHeight: 173 });
        this.load.spritesheet('2', 'assets/2.png', { frameWidth: 203, frameHeight: 175 });
        this.load.spritesheet('3', 'assets/3.png', { frameWidth: 167, frameHeight: 158 });
        this.load.audio('music', 'assets/music.mp3');
        this.load.audio('sound1', 'assets/town.ogg');
        this.load.audio('sound3', 'assets/italianmusic.mp3');
    
    }

    create(){
        //this.background = this.add.video(1100,460, 'menu').setScale(1.2).setLoop(true); 
        
        
        this.background = this.add.image(1050,500,'menu1').setScale(1.5);
        
        this.music = this.sound.add("music");
        
        

        var musicConf = {
            mute: false,
            volume: 1,
            rate: 1,
            loop : true,
        }

            
        var musicConf1 = {
            mute: true,
            volume: 0,
         
        }

     

        this.music.play(musicConf);
        
        const clickButton = this.add.image(1950, 850, 'button').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Time") && this.music.play(musicConf1)); 
    
        
        
        
        
    }   
}