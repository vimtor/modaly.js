# modaly.js [![Build Status](https://travis-ci.org/papeloto/modaly.js.svg?branch=master)](https://travis-ci.org/papeloto/modaly.js) [![Coverage Status](https://coveralls.io/repos/github/papeloto/modaly.js/badge.svg?branch=master)](https://coveralls.io/github/papeloto/modaly.js?branch=master)

Tiny and easy javascript library for creating web modals.



## Install
NPM
```sh
npm install modaly.js
```

CDN
```html
<script src="https://unpkg.com/modaly.js"></script>
```

Alternatively, you can [download](https://github.com/papeloto/modaly.js/tree/master/dist) distribution files directly.

## Usage

The basic setup for one modal with default options is the following.

```html
<div id="modal-1">
    <!-- the modal content goes here -->
</div>
```

```js
new Modaly("#modal-1");
```

To open the modal add the `data-modaly-open` attribute to any DOM element.

```html
<button data-modaly-open="#modal-1">
    Open Modal
</button>
```

To close the modal add the `data-modaly-close` attribute to any element inside the modal.

```html
<div id="modal-1">
    <!-- the modal content goes here -->

    <img src="close-icon.svg" data-modaly-close />
</div>
```

You can open/close the modal programmatically.

```js
const modal = new Modaly("#offer-modal");

if (offersAvailable) {
    modal.show();
}
```

```js
const modal = new Modaly("#timeout-modal");

setTimeout(() => modal.hide(), 5000);
```

## Options

You can further customize the behaviour and looks of your modals.

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

<br/>

| Option     | Default   | Description                                     |
| ---------- | --------- | ----------------------------------------------- |
| background | "black"   | Modal overlay color                             |
| opacity    | 0.75      | Modal overlay opacity                           |
| duration   | 250       | Milliseconds that the transition lasts          |
| animation  | "ease-in" | Timing function for the transition              |
| escape     | true      | If the modal can be closed using the `ESC` key  |
| overlay    | true      | If the modal can be closed clicking the overaly |

<br/>

## Callbacks
#### `onShow(modal, trigger)`
Fired when the modal it is about to open.
- `modal`: the modal DOM element.
- `trigger`: which DOM element openned the modal. `null` if no DOM element triggered it.

#### `onHide(modal, trigger)`
Fired when the modal it is about to close.
- `modal`: the modal DOM element.
- `trigger`: which DOM element closed the modal. `null` if no DOM element triggered it.

## Licensing
Created by [Victor Navarro](https://github.com/papeloto/) and licensed under [MIT](https://github.com/papeloto/modaly.js/blob/master/LICENSE) license.
