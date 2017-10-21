
class Graveyard extends HTMLElement {
    constructor () {
        super();
        
        const template = document.querySelector( 'template' );
        this.root = this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild( template.content.cloneNode(true) );
        
        this.addEventListener( 'click', this.toggleGhostFriend );

    }

    toggleGhostFriend ( e ) {
        const ghost = this.root.querySelector( '.ghost' );
        ghost.classList.toggle( 'haunt' );
    }
}

window.customElements.define( 'grave-yard', Graveyard );