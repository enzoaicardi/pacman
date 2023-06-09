
export default class GameBoard extends HTMLElement{

    static maps = [
        // Starter
        [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,3,3,3,3,3,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,3,1,1,1,3,0],[0,2,2,2,0,2,2,2,0,2,2,2,0,2,1,1,2,0,3,1,1,1,3,0],[0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,2,0,3,1,1,1,3,0],[0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,2,0,3,1,1,1,3,0],[0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,2,0,3,1,1,1,3,0],[0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,0,2,0,3,1,1,1,3,0],[0,2,0,2,2,2,0,2,2,2,0,2,2,2,0,0,2,0,3,1,1,1,3,0],[0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,3,1,1,1,3,0],[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,3,3,3,3,3,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
        // Classic
        [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],[0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],[0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],[0,9,9,0,2,0,2,2,2,2,2,2,2,0,2,0,9,9,0],[0,0,0,0,2,0,2,0,0,3,0,0,2,0,2,0,0,0,0],[2,2,2,2,2,2,2,0,3,3,3,0,2,2,2,2,2,2,2],[0,0,0,0,2,0,2,0,0,3,0,0,2,0,2,0,0,0,0],[0,9,9,0,2,0,2,2,2,2,2,2,2,0,2,0,9,9,0],[0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],[0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],[0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],[0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0],[0,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,2,0,0],[0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],[0,2,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,2,0],[0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
        // Saloon
        [[0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0],[0,0,0,0,2,2,2,2,2,0,2,2,2,2,2,0,0,0,0],[0,2,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,2,0],[0,2,2,2,2,0,0,0,0,0,0,0,0,0,2,2,2,2,0],[0,2,0,0,2,2,2,2,2,2,2,2,2,2,2,0,0,2,0],[0,2,2,2,2,0,2,0,0,0,0,0,2,0,2,2,2,2,0],[0,0,2,0,0,0,2,2,2,2,2,2,2,0,0,0,2,0,0],[0,0,2,0,9,0,0,2,3,3,3,2,0,0,9,0,2,0,0],[0,0,2,0,9,9,0,2,3,3,3,2,0,9,9,0,2,0,0],[0,0,2,0,9,9,0,2,2,2,2,2,0,9,9,0,2,0,0],[0,0,2,0,0,0,0,2,0,0,0,2,0,0,0,0,2,0,0],[0,0,2,2,2,2,2,2,0,0,0,2,2,2,2,2,2,0,0],[0,0,2,0,0,0,0,2,0,0,0,2,0,0,0,0,2,0,0],[0,0,2,2,2,2,2,2,0,0,1,2,2,2,2,2,2,0,0],[0,0,2,0,0,0,0,2,0,0,0,2,0,0,0,0,2,0,0],[0,0,2,2,2,2,2,2,0,0,0,2,2,2,2,2,2,0,0],[0,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0],[2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2],[2,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,2],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[9,9,9,9,9,2,2,2,2,2,2,2,2,2,9,9,9,9,9],[0,0,0,0,0,0,2,1,1,1,1,1,2,0,0,0,0,0,0]],
        // Cactus
        [[0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0],[0,0,0,0,2,0,0,2,2,2,2,2,0,0,0,0,0,0,0],[0,0,0,2,2,2,0,2,1,0,1,2,0,0,0,0,0,0,0],[0,0,1,2,0,2,0,2,0,0,0,2,1,0,0,0,0,0,0],[0,0,0,2,0,2,0,2,1,2,1,2,0,0,0,0,0,0,0],[0,0,0,2,0,2,0,2,0,0,0,2,1,0,0,0,0,0,0],[0,0,1,2,0,2,0,2,1,2,1,2,0,0,2,0,0,0,0],[0,0,0,2,0,2,2,2,0,0,0,2,0,2,2,2,0,0,0],[0,0,0,2,2,0,0,2,1,2,1,2,0,2,0,2,0,0,0],[0,0,0,0,2,2,2,2,0,0,0,2,0,2,0,2,1,0,0],[0,0,0,0,0,0,0,2,1,2,1,2,0,2,0,2,0,0,0],[0,0,0,0,0,0,0,2,0,0,0,2,0,2,0,2,0,0,0],[0,0,0,0,0,0,1,2,1,2,1,2,2,2,0,2,1,0,0],[0,0,0,0,0,0,0,2,0,0,0,2,0,0,2,2,0,0,0],[0,0,0,0,0,0,1,2,1,2,1,2,2,2,2,0,0,0,0],[0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,2,1,2,1,2,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0],[0,0,0,0,0,0,2,2,2,2,2,2,2,0,0,0,0,0,0],[1,1,1,1,1,2,2,2,3,3,3,2,2,2,1,1,1,1,1],[9,9,9,9,9,9,2,2,2,2,2,2,2,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,1,1,1,9,9,9,9,9,9,9,9]],
        // Chapeau
        [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,2,2,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,2,2,2,2,2,2,0,0,0,0,2,2,2,2,2,2,0,0,0,0,0,0],[0,0,0,0,2,2,2,0,0,1,1,2,2,3,3,2,2,1,1,0,0,2,2,2,0,0,0,0],[0,0,0,2,2,0,0,1,1,1,0,0,2,2,2,2,0,0,1,1,1,0,0,2,2,0,0,0],[0,0,0,0,2,2,2,2,0,0,0,1,1,0,0,1,1,0,0,0,2,2,2,2,0,0,0,0],[0,0,0,0,0,2,0,2,2,2,2,1,0,0,0,0,1,2,2,2,2,0,2,0,0,0,0,0],[0,0,0,0,0,2,0,0,2,0,2,2,2,2,2,2,2,2,0,2,0,0,2,0,0,0,0,0],[0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
        // Charrette
        [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,2,1,2,0,2,1,2,0,2,1,2,0,2,1,0,0,0,0],[0,0,2,2,2,1,2,2,2,1,2,2,2,1,2,2,2,1,2,0,0,0],[0,2,2,2,2,1,0,2,0,1,0,2,0,1,0,2,0,1,2,2,0,0],[0,2,2,2,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,2,0,0],[2,2,2,1,1,1,2,2,2,1,2,2,2,1,2,2,2,1,1,2,1,1],[0,2,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0],[0,2,0,0,0,1,2,2,2,1,2,2,2,1,2,2,2,1,0,0,0,0],[0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,2,0,0],[0,0,0,0,0,1,2,2,2,1,2,2,2,1,2,2,2,1,2,2,0,0],[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,0,0,0],[0,0,1,2,2,2,2,2,9,9,9,9,9,9,2,2,2,2,2,0,0,0],[0,0,2,2,9,2,9,2,2,9,3,3,9,2,2,9,2,9,2,2,0,0],[0,0,2,9,9,2,9,9,2,9,3,3,9,2,9,9,2,9,9,2,0,0],[0,1,2,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,2,1,0],[0,0,2,0,0,2,0,0,2,0,0,0,0,2,0,0,2,0,0,2,0,0],[0,0,2,2,0,2,0,2,2,0,0,0,0,2,2,0,2,0,2,2,0,0],[0,0,0,2,2,2,2,2,0,0,0,0,0,0,2,2,2,2,2,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
        // Forteresse
        [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0],[0,2,0,2,2,2,2,0,2,2,2,0,2,2,2,2,0,2,0],[0,2,0,0,2,0,2,0,2,0,2,0,2,0,2,0,0,2,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],[0,2,0,0,2,0,2,2,2,0,2,2,2,0,2,0,0,0,0],[0,0,0,0,2,0,0,0,2,2,2,0,0,0,2,0,0,0,0],[0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0],[0,0,0,0,2,0,0,0,0,3,0,0,0,0,2,0,0,0,0],[0,0,0,0,2,1,1,2,3,3,3,2,1,1,2,0,0,0,0],[0,0,0,0,2,0,0,0,0,3,0,0,0,0,2,0,0,0,0],[0,0,0,0,2,2,2,1,1,2,1,1,2,2,2,0,0,0,0],[0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0],[0,0,0,0,2,2,0,9,9,9,0,2,1,2,2,0,0,0,0],[0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0],[0,0,0,0,2,1,1,2,0,9,9,9,9,0,2,0,0,0,0],[0,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0],[0,2,2,2,2,1,2,0,9,9,9,0,2,1,2,2,2,2,0],[0,2,0,2,0,2,0,0,0,9,0,0,0,2,0,2,0,2,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
        // Tipi
        [[0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,2,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,2,2,0,2,2,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0],[0,0,0,0,0,0,2,2,0,0,0,2,2,0,0,0,0,0,0],[0,0,0,0,0,0,2,1,2,0,2,1,2,0,0,0,0,0,0],[0,0,0,0,0,0,2,0,1,1,1,0,2,0,0,0,0,0,0],[0,0,0,0,0,2,2,0,0,2,0,0,2,2,0,0,0,0,0],[0,0,0,0,0,2,0,3,0,1,0,3,0,2,0,0,0,0,0],[0,0,0,0,0,2,0,3,0,2,0,3,0,2,0,0,0,0,0],[0,0,0,0,2,2,1,3,3,1,3,3,1,2,2,0,0,0,0],[0,0,0,0,2,0,2,1,2,2,2,1,2,0,2,0,0,0,0],[0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],[0,0,0,2,2,0,0,2,2,0,2,2,0,0,2,2,0,0,0],[0,0,0,2,0,9,0,2,0,0,0,2,0,9,0,2,0,0,0],[0,0,0,2,0,9,0,2,0,0,0,2,0,9,0,2,0,0,0],[0,0,2,2,9,9,9,2,0,0,0,2,9,9,9,2,2,0,0],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0]],
        // Football
        [[9,9,9,9,9,2,9,9,9,2,9,9,9,2,9,9,9,9,9],[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[9,2,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[9,2,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,2,9],[9,2,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,2,9],[9,2,0,2,0,0,2,2,2,2,2,2,2,0,0,2,0,2,9],[9,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,2,9],[9,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,2,9],[9,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,2,9],[9,2,0,2,0,0,0,0,3,3,3,0,0,0,0,2,0,2,9],[2,2,2,2,2,2,2,2,3,3,3,2,2,2,2,2,2,2,2],[9,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,2,9],[9,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,2,9],[9,2,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,2,9],[9,2,0,2,0,0,2,2,2,2,2,2,2,0,0,2,0,2,9],[9,2,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,2,9],[9,2,0,2,0,0,2,0,0,0,0,0,2,0,0,2,0,2,9],[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],[9,2,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,2,9],[9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9],[9,9,9,9,9,2,9,9,9,2,9,9,9,2,9,9,9,9,9]],
        // fin...
    ];

    constructor(){
        super();
        this.scene;
        this.map = [];
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('wrapper');
        this.appendChild(this.wrapper);
    }

    build(arrayOrNumber = 0){

        const array = typeof arrayOrNumber === 'number' ? this.getMap(arrayOrNumber) : arrayOrNumber;

        if(!array) {
            console.warn(`La carte n°${arrayOrNumber} n'existe pas !`);
            return;
        }

        this.map = array;
        this.wrapper.innerHTML = '';
        this.setSize(this.map[0].length);
        if(this.scene){this.scene.scoreboard.reset();}

        for(const line of this.map){
            for(const cell of line){
                const tile = this.createTile(cell);
                this.wrapper.appendChild(tile);
            }
        }

    }

    createTile(id = 0){

        const tile = document.createElement('div');
              tile.classList.add('board-tile');
              tile.dataset.type = id;

        switch(id){
            case 0: tile.classList.add('wall'); break;
            case 2: tile.classList.add('stared'); if(this.scene){this.scene.scoreboard.goal++};
            case 3: case 1: tile.classList.add('void');
        }

        return tile;

    }

    getTileArea(tile){
        return {
            y: tile.offsetTop + tile.offsetHeight / 2,
            x: tile.offsetLeft + tile.offsetWidth / 2
        };
    }

    getCell(x, y){
        return this.map[y][x];
    }

    getMap(number){
        const map = GameBoard.maps[number];
        const shalow = [];
        for(let line of map){
            shalow.push([...line]);
        }
        return shalow;
    }

    setSize(number){
        this.style.setProperty('--num-cols', number);
    }

    getSize(){
        return Number(this.style.getPropertyValue('--num-cols'));
    }

}

customElements.define('game-board', GameBoard);