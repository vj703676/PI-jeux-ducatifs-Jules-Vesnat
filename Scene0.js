class Scene0 extends Phaser.Scene {

    constructor() {
        super("Preload");
    }

    preload(){
        this.load.video('chargement', 'assets/preload.mp4', 'loadeddata', false, true);
        this.load.audio('preson', 'assets/preload_son.mp3');
    }

    create(){


        var musicConf0 = {
            mute: false,
            volume: 1,
            rate: 1,
            loop : false,
        }

        this.music0 = this.sound.add("preson");
        this.background = this.add.video(1100,500, 'chargement').setScale(2.8);  
        this.music0.play(musicConf0);
        this.time.addEvent({ delay: 10000, callback: ()=>{ this.scene.start("bootGame")}, loop: false });
    }
}