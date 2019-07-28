import './style.css';

export default class Modaly {
    constructor(selector, options) {
        const settings = Object.assign({}, { escape: true, overlay: true }, options);

        this.wrapper = document.querySelector(selector);
        this.wrapper.classList.add('modaly-wrapper');
        this.hide();

        // Bind every open trigger.
        const openTriggers = document.querySelectorAll(`[data-modaly-open='${selector}']`);
        openTriggers.forEach(trigger => trigger.addEventListener('click', () => this.show()));

        // Bind every open trigger.
        const closeTriggers = this.wrapper.querySelectorAll('[data-modaly-close]');
        closeTriggers.forEach(trigger => trigger.addEventListener('click', () => this.hide()));

        // Bind ESC key with modal closing.
        if (settings.escape) {
            document.addEventListener('keyup', (event) => {
                if (event.defaultPrevented) return;

                const key = event.key || event.keyCode;
                if (key === 'Escape' || key === 'Esc' || key === 27) {
                    this.hide();
                }
            });
        }

        // Bind overlay click with modal closing.
        if (settings.overlay) {
            this.wrapper.addEventListener('click', () => {
                this.hide();
            });
        }
    }

    show() {
        this.wrapper.classList.remove('modaly-hidden');
    }

    hide() {
        this.wrapper.classList.add('modaly-hidden');
    }
}
