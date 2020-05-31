class Scene2 extends Phaser.Scene {

    constructor() {
        super("playGame");
    }

   

    create(){

        var chevalier; 
        var garde;
        var cursors; 
        var platforms;

        var musicConf2_13 = {
            mute: false,
            volume: 1,
            rate: 1,
            loop : true
        }

    

        

        this.music2 = this.sound.add("sound1");
        this.music3 = this.sound.add("sound3");

        this.music2.play(musicConf2_13);
        this.music3.play(musicConf2_13);

        
        this.platforms = this.physics.add.staticGroup();
        
        this.background = this.add.image(1085,500,'back').setScale(1);
        
        this.chevalier = this.physics.add.sprite(100, 100, '3').setScale(1.6);

        this.garde = this.physics.add.image(1900,100, 'guard').setScale(0.5);

        this.chevalier.setBounce(-1);
        this.garde.setBounce(-1);
        this.chevalier.collideWorldBounds=true;
        this.garde.collideWorldBounds=true;

        this.physics.add.collider(this.chevalier, this.garde);
      
        
        
    
        this.cursors = this.input.keyboard.createCursorKeys()
    
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('1', { start: 0, end: 9 }),
            frameRate: 15,
            repeat: -1
        });
    
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('2', { start: 0, end: 9 }),
            frameRate: 15,
            repeat: -1
        });
    
        this.platforms.create(1000, 1260, 'ground').setScale(0.5).refreshBody();
        this.platforms.create(100, 1260, 'ground').setScale(0.5).refreshBody();
        this.platforms.create(500, 1260, 'ground').setScale(0.5).refreshBody();
        this.platforms.create(1500, 1260, 'ground').setScale(0.5).refreshBody();
        this.platforms.create(2000, 1260, 'ground').setScale(0.5).refreshBody();
    
        this.physics.add.collider(this.chevalier, this.platforms);
        this.physics.add.collider(this.garde, this.platforms);
       
        
    }
    
    update(){

        var musicConf2_14 = {
            mute: true,
            volume: 0,
            rate: 0,
            loop : false
        }
        
        this.chevalier.setVelocityX(0);

        this.garde.setVelocityX(0);
    
        if(this.cursors.up.isDown){
            this.chevalier.setVelocity(0, -300);
        }
    
        if(this.cursors.right.isDown){
            this.chevalier.setVelocity(200, 0);
            this.chevalier.body.offset.y = 11;
            this.chevalier.anims.play('right', true);
        }
    
        if(this.cursors.left.isDown){
            this.chevalier.setVelocity(-200, 0);
            this.chevalier.body.offset.y = 11;
            this.chevalier.anims.play('left', true);
        }

        if(checkOverlap(this.chevalier, this.garde)){
            
                this.scene.start("Math1");
                this.music2.play(musicConf2_14);
                this.music3.play(musicConf2_14);
        }

        function checkOverlap(spriteA, spriteB) {
            var boundsA = spriteA.getBounds();
            var boundsB = spriteB.getBounds();
        
            return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
        }
    
    }

   
    
}