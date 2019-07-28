[![Build Status](https://travis-ci.org/papeloto/modaly.js.svg?branch=master)](https://travis-ci.org/papeloto/modaly.js)

# modaly.js

Tiny and easy javascript library for creating web modals.

## Install

```sh
npm install modaly
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
