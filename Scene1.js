class Scene1 extends Phaser.Scene {

    constructor() {
        super("bootGame");
    }

    
    preload(){
        //this.load.video('menu', 'assets/video.mp4', 'loadeddata', false, true);
        this.load.image('back', 'PI-jeux-educatifs-Jules-Vesnat/assets/florence.png');
        this.load.image('ground', 'PI-jeux-educatifs-Jules-Vesnat/assets/ground.png');
        this.load.image('button', 'PI-jeux-educatifs-Jules-Vesnat/assets/button2.png');
        this.load.image('guard', 'PI-jeux-educatifs-Jules-Vesnat/assets/guard.png');
        this.load.image('menu1', 'PI-jeux-educatifs-Jules-Vesnat/assets/Menu1.jpg');
        this.load.spritesheet('1', 'PI-jeux-educatifs-Jules-Vesnat/assets/1.png', { frameWidth: 203, frameHeight: 173 });
        this.load.spritesheet('2', 'PI-jeux-educatifs-Jules-Vesnat/assets/2.png', { frameWidth: 203, frameHeight: 175 });
        this.load.spritesheet('3', 'PI-jeux-educatifs-Jules-Vesnat/assets/3.png', { frameWidth: 167, frameHeight: 158 });
        this.load.audio('music', 'PI-jeux-educatifs-Jules-Vesnat/assets/music.mp3');
        this.load.audio('sound1', 'PI-jeux-educatifs-Jules-Vesnat/assets/town.ogg');
        this.load.audio('sound3', 'PI-jeux-educatifs-Jules-Vesnat/assets/italianmusic.mp3');
    
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
