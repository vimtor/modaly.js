[![Build Status](https://travis-ci.org/papeloto/modaly.js.svg?branch=master)](https://travis-ci.org/papeloto/modaly.js)

# modaly.js

Tiny and easy javascript library for creating web modals.

## Install
NPM
```sh
npm install modaly
```
CDN
```html
<script src="https://unpkg.com/modaly.js@0.2.0/dist/modaly.min.js"></script>
```

## Usage

The basic setup of one modal with default options is the following.

```html
<div id="modal-1">
    <!-- the modal content goes here -->
</div>
```

```js
new Modaly("#modal-1");
```

Then, to trigger the modal, simply add `data-modaly-open` attribute to a DOM element.

```html
<button data-modaly-open="#modal-1">
    Open Modal
</button>
```

To close it, you can add the `data-modaly-close` attribute to any element inside the modal.

```html
<div id="modal-1">
    <!-- the modal content goes here -->

    <img src="close-icon.svg" data-modaly-close />
</div>
```

The modaly class returns a reference to the modal, providing an API for custom usage. For example:

```js
const modal = new Modaly("offer-modal");

if (offersAvailable) {
    modal.show();
}
```

```js
const modal = new Modaly("timeout-modal");

setTimeout(() => modal.hide(), 5000);
```

## Options

You can customize further the behaviour and looks of your modals.
```js
new Modaly("#modal-custom", {
    // Style
    background: "black",
    opacity: 0.75,
    duration: 250,
    animation: "ease-in",

    // Navigation
    escape: true,
    overlay: true,

    // Callbacks
    onShow: (modal, trigger) => {},
    onHide: (modal, trigger) => {}
});
```

### Style Options

| Option     | Default     | Description                            |
| ---------- | ----------- | -------------------------------------- |
| background | `"black"`   | Modal overlay color                    |
| opacity    | `0.75`      | Modal overlay opacity                  |
| duration   | `250`       | Milliseconds the show transition lasts |
| animation  | `"ease-in"` | Timing function for the transition     |

### Navigation Options
| Option  | Default | Description                                    |
| ------- | ------- | ---------------------------------------------- |
| escape  | `true`  | If the modal can be close using the `ESC` key  |
| overlay | `true`  | If the modal can be close clicking the overaly |

## Callbacks
### `onShow(modal, trigger)`
Fired when the modal begins his show transition.
- `modal`: the modal DOM element.
- `trigger`: which element openned the modal. `null` if no DOM element triggered it.

### `onHide(modal, trigger)`
Fired when the modal begins his hide transition.
- `modal`: the modal DOM element.
- `trigger`: which element openned the modal. `null` if no DOM element triggered it.

## Licensing
Project created by [Victor Navarro](https://github.com/papeloto/) and licensed under MIT license.
