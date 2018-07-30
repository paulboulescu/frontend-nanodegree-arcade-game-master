// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.reset = function() {
    // Places the Enemy outside of the canvas
    this.col = -1;
    // Selects a random row for the column
    this.row = 1 + Math.round(Math.random() * 2);
    // Generates a random speed for the Enemey
    this.speed = 1.5+Math.random()*3.5;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // Simulates movement by increasing the 'col' value with a function of its speed
    this.col += this.speed*dt;

    // Checks if Enemy is out of canvas
    if(this.col>5){
        this.reset();
    }

    // Updates this Enemy's position
    this.x = this.col * 101;
    this.y = this.row * 83 - 30;

};

Enemy.prototype.collision = function(player){
    // Checks if this Enemy is in the samen cell as the Player
    if(player.col === Math.round(this.col) && player.row === Math.round(this.row)) return true;
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// The character controlled by our player
var Player = function() {
    // The image/sprite for the player
    this.sprite = 'images/char-boy.png';
};

Player.prototype.reset = function(){
    // Places the Player at the starting point
    this.col = 2;
    this.row = 5;
}

Player.prototype.update = function(){
    // Updates the Player's position 
    this.x = this.col * 101;
    this.y = this.row * 83 - 30;
}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key){
    // Checks which was the pressed key and updates the Player's row and column values, while keeping it within the canvas
    switch(key) {
        case "left":
            this.col = Math.max(this.col-1, 0);    
            break;
        case "up":
            this.row = Math.max(this.row-1, 0);
            break;
        case "right":
            this.col = Math.min(this.col+1, 4);
            break;
        case "down":
            this.row = Math.min(this.row+1, 5);
            break;
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [ "", "", ""].map(()=>new Enemy());
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

