# const-loader
A webpack loader that ignores the requested resource contents and returns a const value instead.

[![Build Status](https://travis-ci.org/rincedd/const-loader.svg?branch=master)](https://travis-ci.org/rincedd/const-loader)

## Usage
```js
const thing = require('const-loader?val=hello!some-module');

console.log(thing); // => 'hello'
```
