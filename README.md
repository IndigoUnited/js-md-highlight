# md-highlight [![Build Status](https://travis-ci.org/IndigoUnited/js-md-highlight.svg?branch=master)](https://travis-ci.org/IndigoUnited/js-md-highlight)

A library that highlights markdown (+ git flavored markdown).
This library grammar/parser is heavily based on [marked](git@github.com:chjj/marked.git).

Note that this library is not `yet another markdown to html converter.
This library is meant to be used by markdown editors to provide syntax highlighting.


## API

### .highlight(src, [options])

Highlights `src`, adding markup that allows styling.

The result is HTML that contains `span` tags wrapping known `Markdown` blocks.
To style these tags, check the `style.css` file for an example.

Available options:

- block: The block grammar to use, see `lib/grammar/block.js`.
- inline: The inline grammar to use, see `lib/grammar/inline.js`


```js
require(['md-highlight'], function (highlighter) {
    
    highlighter.highlight('# Title\n\nThis is an `example`.');

    // This will output something like
    // <span class="md-heading md-heading-1"># Title</span>\n\nThis is an <span class="md-icode">`example`</span>
});
```


### .unhighlight(src)

Removes the highlight markup from the `src`.



## How to use

### Browser

On the browser, this library is only available in the [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) format.

If you use RequireJS specify them like this:

```js
// ...
paths : {
   'md-highlight': '../bower_components/md-highlight/lib/highlighter'
}
// ...
```

Note that if you want to support `IE8` or lower you will need to install [es5-shim](https://github.com/kriskowal/es5-shim.git) and require `es5-shim` with your AMD loader before requiring this library.


### NodeJS

Simply install it with `npm install md-highlight` and use it as you would expect.


## Tests

1. `bower install`
2. `npm install`
3. `npm test`

You will need [bower](https://github.com/bower/bower) to install the library dev dependencies.



## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
