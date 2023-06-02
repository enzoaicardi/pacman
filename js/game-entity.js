export default class GameEntity extends HTMLElement{

    static directions = ['down', 'up', 'left', 'right'];

    static reverseDirection = {
        up: 'down',
        down: 'up',
        left: 'right',
        right: 'left'
    };

    constructor(type){
        super();

        this.type = type;
        this.auto = false;
        this.position = {};
        this.direction = false; // top, right, bottom, left
        this.stableDirection = false;
        this.board = false;
        this.stack = 0;
        this.classList.add(type);
    }

    setBoard(gameBoard){
        this.board = gameBoard;
        return this;
    }

    setArea(area){
        this.style.top = (area.y - this.offsetHeight / 2) + 'px';
        this.style.left = (area.x - this.offsetWidth / 2) + 'px';
    }

    // placement

    placeOn(tile){
        const area = this.board.getTileArea(tile);
        this.setArea(area);
    }

    placeRandom(number){

        const rows = this.board.map.length - 1;
        const cols = this.board.map[0].length - 1;

        const spawnRow = Math.floor(Math.random() * rows);
        const spawnCol = Math.floor(Math.random() * cols);

        if(number && this.board.getCell(spawnCol, spawnRow) !== number){ return this.placeRandom(number); };

        this.moveTo({x: spawnCol, y: spawnRow});

    }

    // positionning

    moveAuto(direction){

        if(this.auto){ this.direction = this.getRandomDirection(); }

        const next = this.nextPosition(direction);
        const move = this.moveTo(next.position);

        // if move is possible
        if(move){
            this.style.transform = next.transform;
            this.stableDirection = next.direction;
            this.stack = 0;
        }
        else if(this.auto){
            this.direction = this.stableDirection;
            this.stack++;
            this.moveAuto();
        }
        else if(!direction && this.stableDirection){
            this.moveAuto(this.stableDirection);
        }

    }

    moveTo(position){

        const y = position.y;
        const x = position.x;
        const cell = this.board.getCell(x, y);

        if(cell <= 0 || cell >= 9) { return false; }

        // if result is true

        const index = (this.board.map[0].length) * y + x;
        const tile = this.board.querySelectorAll('.board-tile')[index];

        // if pacman eat a star
        if(this.type === 'pacman' && cell === 2) { 

            this.board.scene.scoreboard.score++;
            this.board.map[y][x] = 1;
            tile.classList.remove('stared');

        }

        this.placeOn(tile);
        this.position = position;

        return true;

    }

    nextPosition(key){

        const direction = key || this.direction;
        const position = this.position;

        let transform = '';
        let newX = position.x;
        let newY = position.y;

        switch(direction){
            case 'down':
                newY = newY+1 >= this.board.map.length ? 0 : newY+1;
                transform = 'rotate(90deg)';
                break;
            case 'up':
                newY = newY-1 < 0 ? this.board.map.length-1 : newY-1;
                transform = 'rotate(-90deg)';
                break;
            case 'right':
                newX = newX+1 >= this.board.map[0].length ? 0 : newX+1;
                break;
            case 'left':
                newX = newX-1 < 0 ? this.board.map[0].length-1 : newX-1;
                transform = 'scaleX(-1)';
                break;
        }

        return {
            direction: direction,
            position: {x: newX, y: newY},
            transform: transform
        }

    }

    getRandomDirection(){
        const random = GameEntity.directions[Math.floor(Math.random() * 4)];

        if(this.direction === GameEntity.reverseDirection[random] && this.stack < 10){
            return this.getRandomDirection();
        }

        return random;
    }

}

customElements.define('game-entity', GameEntity);