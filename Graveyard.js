class Graveyard extends HTMLElement {

    constructor () {
        super();
        
        const template = document.querySelector( 'template' );
        this.root = this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild( template.content.cloneNode( true ) );
        this.ghostFriend = this.root.querySelector( '.ghost' );
        
        this.ghostFriend.style.backgroundColor = this.getAttribute( 'color' );

        this.addEventListener( 'click', this.toggleGhostFriend );       
    }

    toggleGhostFriend ( e ) {
        this.ghostFriend.classList.toggle( 'haunt' );
    }
}

window.customElements.define( 'grave-yard', Graveyard );