class Scene3 extends Phaser.Scene {

    constructor() {
        super("Math1");
    }

    preload(){

        this.load.image('tableau', 'assets/tableau.png');
        this.load.image('1euro', 'assets/tableau.png');
        this.load.image('2euro', 'assets/tableau.png');

    }

    create(){

        
        this.background = this.add.image(1080,510,'tableau').setScale(1);
    }

}