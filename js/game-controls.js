
export default class GameControls extends HTMLElement{

    constructor(entity){
        super();
        this.entity = entity;
        this.directionControllers = this.querySelectorAll('[data-direction]');

        this.init();
    }

    init(){

        for(const controller of this.directionControllers){
            controller.addEventListener('click', e => {
                this.entity.direction = controller.dataset.direction;
            });
        }

    }

}

customElements.define('game-controls', GameControls);