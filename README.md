# aresDOM v0.1

#### A tiny micro-lib

I really dislike bloated frameworks that try to either "do it all" or provide so much overhead to do the smallest of things that aresDOM was created to handle just this type of niche use-case.

It's my personal swiss-army knife using the best framework of all, [VanillaJS](http://vanilla-js.com) and it's helped me on many projects over the years.

### What's the Deal

* Lightweight &amp; Customizable. Just ~3KB (minified + gzipped).
* Uses jQuery-style syntax for familiarity!
* Supports method chaining too.
* Great for quick wireframing/prototyping.
* Depends on my favourite framework, <a href="http://vanilla-js.com/" target="_blank">VanillaJS</a>.

### The Nitty-Gritty

* aresDOM's polyfill for `document.querySelectorAll()` is limited to browser CSS support and is not as fast as some dedicated selector engines. This means no `input[type=text]` or `p:nth-child(even)` selectors with ancient browsers (looking at you, IE6...).

Fortunately modern browser don't need this polyfill. This is because under the hood aresDOM relies a lot on `document.querySelectorAll()` and `window.getComputedStyle` so try to avoid legacy browsers that don't support this otherwise you're gonna have a bad time.

### Browser Support

aresDOM has been tested with and supports the following browsers:

* Android Browser 2.1 or higher
* Blackberry Browser 6 or higher
* Blisk v10.x
* Chrome
* Chrome Android
* Firefox 3.5 or higher
* Firefox Mobile
* Internet Explorer 8 or higher
* Opera 10 or higher
* Opera Touch
* Vivaldi 2.x

aresDOM, in theory, should also work with any other browser that supports `document.querySelectorAll()`.

### Installation

Grab the latest release [here](https://github.com/vip3rousmango/aresDOM/) or

```sh
yarn install aresDOM
```

### Modify, build, contribute

```sh
yarn
npm run start
```
