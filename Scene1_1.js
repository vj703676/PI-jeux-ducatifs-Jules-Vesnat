class Scene1_1 extends Phaser.Scene {

    constructor() {
        super("Time");
    }

    preload(){
        this.load.image('fleche', 'assets/arrow.png');
        this.load.audio('timesound', 'assets/time_son.mp3');
        this.load.image('machine', 'assets/couloir.jpg');
    }

    create(){


        var musicConf1_1 = {
            mute: false,
            volume: 1.5,
            rate: 1,
            loop : true,
        }

        var musicConf1_2 = {
            mute: true,
            volume: 0,
            rate: 0,
            loop : false,
        }

        this.music1_1 = this.sound.add("timesound");
        this.background = this.add.image(1100,460,'machine').setScale(0.5);

        this.music1_1.play(musicConf1_1);

        const clickButton = this.add.image(1090, 800, 'fleche').setScale(0.25).setInteractive().on('pointerdown', () =>this.scene.start("Time2") && this.music1_1.play(musicConf1_2)); 
       
        
    }

}