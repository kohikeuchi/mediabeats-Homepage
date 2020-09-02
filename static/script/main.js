class MobileMenu{
    constructor(){
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu_button');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        this.DOM.link = document.querySelector('.mobile-menu__main');


        this.DOM.container = document.querySelector('#global-container');
        this.eventType = this._getEventType();
        this._addEvent();
    }
    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click'; 
    }
    _toggle() {
        this.DOM.container.classList.toggle('menu-open');
    }
    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.link.addEventListener(this.eventType, this._toggle.bind(this));


    }
}
new MobileMenu();


