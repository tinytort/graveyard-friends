// Step 2. Create your component and extend the HTMLElement class
class Graveyard extends HTMLElement {

    constructor () {
        super();
        
        // get the template we created
        const template = document.querySelector( 'template' );

        // create a root property that references our element's shadow root
        // "open" our shadow root so we can build in it
        this.root = this.attachShadow({ mode: 'open' });

        // copy our template and append it to our elements shadow root
        this.shadowRoot.appendChild( template.content.cloneNode( true ) );
        
        // create a ghostFriend property that references our template's div.ghost
        this.ghostFriend = this.root.querySelector( '.ghost' );

        // attach our click listener!
        this.addEventListener( 'click', this.toggleGhostFriend );       
    }

    toggleGhostFriend ( e ) {
        this.ghostFriend.classList.toggle( 'haunt' );
    }
}

// define our custom element with our window
window.customElements.define( 'grave-yard', Graveyard );