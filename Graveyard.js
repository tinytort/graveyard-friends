const template = document.querySelector( 'template' );
const GraveyardProto = Object.create( HTMLElement.prototype );

class Graveyard extends HTMLElement {
    constructor () {
        super();
        
        this.root = this.createShadowRoot();
        this.root.appendChild( document.importNode( template.content, true ) );
        
        this.addEventListener( 'click', this.toggleGhostFriend );
    }

    toggleGhostFriend ( e ) {
        const ghost = this.root.querySelector( '.ghost' );
        ghost.classList.toggle( 'haunt' );
    }
}

window.customElements.define( 'grave-yard', Graveyard );