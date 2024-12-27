# nolorem

![npm](https://img.shields.io/npm/v/nolorem?style=flat-square) ![license](https://img.shields.io/npm/l/nolorem?style=flat-square) 
<!-- ![downloads](https://img.shields.io/npm/dw/nolorem?style=flat-square) -->

This package has been created out of curiosity, to learn how to deploy my own package to npm registry.

## Features

- Generate any number of random word sequence to say bye bye to lorem ipsum.
- Without mentioning any of the wordcount a default of 10 would be set as wordcount.
- VS Code extension may come soon for this!

## Installation

Install the package via npm or yarn:

```bash
npm install nolorem
# or
yarn add nolorem
```

## Usage

Example Code

```js
const random = require('nolorem')

console.log(random(25))
```

## API Reference
### Function 1: random(wordCount)
Gives random sentences to the desired number of word count. that has meaning, not as your typically lorem ipsum.


## Contributing

Want to contribute? Great! Here's how you can:

Fork the repository.

Create a new branch:
(git checkout -b feature/YourFeature).

Commit your changes (git commit -m 'Add some feature').

Push the branch (git push origin feature/YourFeature).

Open a Pull Request.

### Issues

If you encounter any problems, please create an issue.

### License

This package is licensed under the MIT License. See the LICENSE file for details.