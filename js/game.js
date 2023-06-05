import "./game-modal.js";
import "./game-board.js";
import "./game-scoreboard.js";
import GameEntity from "./game-entity.js";

export default class Game extends HTMLElement{

    constructor(){
        super();

        // elements of the scene
        this.board = this.querySelector('game-board');
        this.board.scene = this;

        this.scoreboard = this.querySelector('game-scoreboard');
        this.scoreboard.onFinish = ()=>{this.end(true)};

        this.modal = this.querySelector('game-modal');

        this.pacman = new GameEntity('pacman').setBoard(this.board);
        this.board.appendChild(this.pacman);
        this.ghosts = [];
        this.ghostQuantity = 4;

        this.loop = false;
        this.speed = 300;

        // audios
        this.western_music = new Audio('./musics/music-western.mp3');
        this.western_music.volume = 0.2;

        // to not have an empty field at the start
        this.start(0);
    }

    start(arrayOrNumber){

        this.stopGameLoop();

        this.board.build(arrayOrNumber);
        this.modal.hide();

        this.pacman.placeRandom(2);
        this.clearGhosts();
        setTimeout(() => { this.addGhosts(); }, 2000);

        this.startGameLoop();

        document.addEventListener('keydown', this.keyHandler);

    }

    end(success){

        document.removeEventListener('keydown', this.keyHandler);
        this.stopGameLoop();

        if(success){ this.modal.show('win'); }
        else{ this.modal.show('lose'); }
        
    }

    pause(){
        if(this.modal.is('pause')){ return this.play(); }
        this.stopGameLoop();
        this.modal.show('pause');
    }

    play(){
        this.startGameLoop();
        this.modal.hide();
    }

    // private

    startGameLoop(){        
        this.loop = setTimeout(
            () => {

                this.startGameLoop();

                this.pacman.moveAuto();
                this.testCollision();

                this.ghosts.forEach(ghost => ghost.moveAuto());
                this.testCollision();

            }, 
            this._speed
        );
        this.western_music.play();
    }

    stopGameLoop(){
        clearTimeout(this.loop);
        this.western_music.currentTime = 0;
        this.western_music.pause();
    }

    keyHandler = (keyEvent)=>{

        if(/^Arrow/.test(keyEvent.key)){
            keyEvent.preventDefault();
            this.pacman.direction = keyEvent.key.substring(5).toLowerCase();
        }
        else if(keyEvent.key === 'Escape'){
            this.pause();
        }

    }

    setGhosts(number = this.ghostQuantity){
        if(number > 0){
            this.ghostQuantity = number;
            this.clearGhosts();
            this.addGhosts(number);
        }
    }

    addGhosts(number = this.ghostQuantity){
        while(number--){
            this.addGhost();
        }
    }

    addGhost(){

        const ghost = new GameEntity('ghost').setBoard(this.board);

        this.ghosts.push(ghost);
        this.board.appendChild(ghost);

        ghost.placeRandom(3);
        ghost.direction = "right"
        ghost.auto = true;
        ghost.style.transition = this.transition;
        ghost.style.setProperty('--color-ghost', `hsl(${Math.floor(Math.random() * 10) * 36}, 53%, 58%)`);

        return ghost;

    }

    lessGhost(){
        this.ghosts[0].remove();
        this.ghosts.shift();
    }

    clearGhosts(){
        this.ghosts.forEach(ghost => ghost.remove());
        this.ghosts = [];
    }

    testCollision(){
        const collision = this.ghosts.some(entity => {
            return entity.position.x === this.pacman.position.x && entity.position.y === this.pacman.position.y;
        });
        if(collision){
            this.end(false);
        }
    }

    // getters / setters

    set speed(number){
        this._speed = number;
        this.ghosts.forEach(ghost => ghost.style.transition = this.transition);
        this.pacman.style.transition = this.transition;
    }
    get speed(){
        return this._speed;
    }

    get transition(){
        return 'top '+ this.speed + 'ms linear, left '+ this.speed + 'ms linear';
    }

}

customElements.define('game-scene', Game);
