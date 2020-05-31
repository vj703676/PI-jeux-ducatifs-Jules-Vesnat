class Scene1_2 extends Phaser.Scene {

    constructor() {
        super("Time2");
    }

      
    preload(){
        //this.load.video('firenze', 'assets/Firenze.mp4', 'loadeddata', false, true);
        this.load.audio('vortex1', 'assets/1.mp3');
        this.load.audio('vortex2', 'assets/2.mp3');
        this.load.audio('vortex3', 'assets/3.mp3');
     }
     create(){

        var musicConf2_11 = {
            mute: false,
            volume: 3,
            rate: 1,
            loop : false,
        }


        var musicConf2_1 = {
            mute: false,
            volume: 1.5,
            rate: 1,
            loop : false,
        }

        this.music2_1 = this.sound.add("vortex1");
        this.music2_2 = this.sound.add("vortex2");
        this.music2_3 = this.sound.add("vortex3");
        this.music2_1.play(musicConf2_11);
        //this.background = this.add.video(1100,460,'firenze').setScale(1.5);
        this.time.addEvent({ delay: 8700, callback: ()=>{this.music2_2.play(musicConf2_1) && this.music2_3.play(musicConf2_1); }, loop: false });
        this.time.addEvent({ delay: 27000, callback: ()=>{ this.music2_1 = this.scene.start("playGame")}, loop: false });
    }
}
