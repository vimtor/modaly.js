import './style.css';

export default class Modaly {
    constructor(selector) {
        this.wrapper = document.querySelector(selector);

        this.wrapper.classList.add('modaly-wrapper');
        this.hide();

        const openTriggers = document.querySelectorAll(`[data-modaly-open='${selector}']`);
        openTriggers.forEach(trigger => trigger.addEventListener('click', () => this.show()));

        const closeTriggers = this.wrapper.querySelectorAll('[data-modaly-close]');
        closeTriggers.forEach(trigger => trigger.addEventListener('click', () => this.hide()));
    }

    show() {
        this.wrapper.classList.remove('modaly-hidden');
    }

    hide() {
        this.wrapper.classList.add('modaly-hidden');
    }
}
