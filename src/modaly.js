export default class Modaly {
    constructor(selector, options) {
        const settings = Object.assign(
            {},
            {
                // Style
                background: 'black',
                opacity: 0.75,
                duration: 250,
                animation: 'ease-in',

                // Navigation
                escape: true,
                overlay: true,
                accessible: true,

                // Callbacks
                onShow: null,
                onHide: null,

                document,
            },
            options,
        );

        this.wrapper = settings.document.querySelector(selector);
        this.wrapper.classList.add('modaly-wrapper');
        this.hide();

        // Set animation duration to zero if opacity is 0.
        if (settings.opacity === 0) {
            settings.duration = 0;
        }

        // Setup style properties.
        this.wrapper.style.setProperty('--background', settings.background);
        this.wrapper.style.setProperty('--duration', `${settings.duration}ms`);
        this.wrapper.style.setProperty('--animation', settings.animation);
        this.wrapper.style.setProperty('--opacity', settings.opacity);

        // Add accessibility attributes.
        this.accessible = settings.accessible;
        if (this.accessible) {
            this.wrapper.setAttribute('role', 'dialog');
            this.wrapper.setAttribute('aria-modal', 'true');
            this.wrapper.setAttribute('aria-hidden', 'true');
        }

        // Bind callbacks.
        this.showCallback = settings.onShow;
        this.hideCallback = settings.onHide;

        // Bind every open trigger.
        const openTriggers = settings.document.querySelectorAll(`[data-modaly-open='${selector}']`);
        openTriggers.forEach(trigger => trigger.addEventListener('click', () => this.show(trigger)));

        // Bind every open trigger.
        const closeTriggers = this.wrapper.querySelectorAll('[data-modaly-close]');
        closeTriggers.forEach((trigger) => {
            // For assistive technologies.
            if (this.accessible) {
                trigger.setAttribute('aria-label', 'close this dialog');
            }

            trigger.addEventListener('click', (event) => {
                // To prevent overlay for triggering click.
                event.stopPropagation();

                this.hide(trigger);
            });
        });

        // Bind ESC key with modal closing.
        if (settings.escape) {
            settings.document.addEventListener('keyup', (event) => {
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
        if (this.accessible) this.wrapper.setAttribute('aria-hidden', 'false');

        this.wrapper.classList.remove('modaly-hidden');
    }

    hide(trigger = null) {
        if (this.hideCallback) this.hideCallback(this.wrapper, trigger);
        if (this.accessible) this.wrapper.setAttribute('aria-hidden', 'true');

        this.wrapper.classList.add('modaly-hidden');
    }
}
