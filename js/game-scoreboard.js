export default class GameScoreboard extends HTMLElement{

    constructor(){
        super();

        this.elements = {
            score: this.querySelector('.game-score'),
            goal: this.querySelector('.game-goal')
        }

        this._score = 0;
        this._goal = 0;

    }

    reset(){
        this._score = 0;
        this._goal = 0;
    }

    get score(){
        return this._score;
    }

    set score(number){
        this._score = number;
        this.elements.score.textContent = number;
        if(this._score >= this._goal){
            this.onFinish(this._score, this._goal);
        }
    }

    get goal(){
        return this._goal;
    }

    set goal(number){
        this._goal = number;
        this.elements.goal.textContent = number;
    }

    // overrided

    onFinish(){}

}

customElements.define('game-scoreboard', GameScoreboard);