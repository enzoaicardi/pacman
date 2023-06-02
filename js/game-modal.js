export default class GameModal extends HTMLElement{

    constructor(){
        super();
    }

    show(type = 'true'){
        this.setAttribute('show', type);
    }

    hide(){
        this.removeAttribute('show');
    }

    toggle(type){
        if(this.hasAttribute('show')){ this.hide(); }
        else{ this.show(type); }
    }

    is(type){
        if(this.getAttribute('show') === type){ return true; }
        return false;
    }

}

customElements.define('game-modal', GameModal);