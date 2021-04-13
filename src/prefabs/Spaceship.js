// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);

        // add object to existing scene
        scene.add.existing(this);   // add to existing, displayList, updateList
        this.points = pointValue;    // track rockets firing status
        this.moveSpeed = 3;   // measured in pixels per frame
    }

    update() {
        // move spaceship left
        this.x -= this.moveSpeed;

        // wrap around left edge to right
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }
    // reset position
    reset() {
        this.x = game.config.width;
    }
}
