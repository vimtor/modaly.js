import './style.css';

export default class Modaly {
    constructor(selector, options) {
        const settings = Object.assign(
            {},
            {
                escape: true,
                overlay: true,
                onShow: null,
                onHide: null,
            },
            options,
        );

        this.wrapper = document.querySelector(selector);
        this.wrapper.classList.add('modaly-wrapper');
        this.hide();

        this.showCallback = settings.onShow;
        this.hideCallback = settings.onHide;

        // Bind every open trigger.
        const openTriggers = document.querySelectorAll(`[data-modaly-open='${selector}']`);
        openTriggers.forEach(trigger => trigger.addEventListener('click', () => this.show(trigger)));

        // Bind every open trigger.
        const closeTriggers = this.wrapper.querySelectorAll('[data-modaly-close]');
        closeTriggers.forEach(trigger => trigger.addEventListener('click', (event) => {
            // To prevent overlay for triggering.
            event.stopPropagation();

            this.hide(trigger);
        }));

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

    show(trigger = null) {
        if (this.showCallback) this.showCallback(this.wrapper, trigger);
        this.wrapper.classList.remove('modaly-hidden');
    }

    hide(trigger = null) {
        if (this.hideCallback) this.hideCallback(this.wrapper, trigger);
        this.wrapper.classList.add('modaly-hidden');
    }
}
