# object-fetch

[![CircleCI](https://circleci.com/gh/asiniy/object-fetch.svg?style=svg)](https://circleci.com/gh/asiniy/object-fetch)
![npm version](https://badge.fury.io/js/object-fetch.svg)

Allows to fetch object properties by its name, returns an error if those properties are missing

```javascript
import objectFetch from 'object-fetch'

const obj = { a: 'b' }

objectFetch(obj, 'a') // => 'b'
objectFetch(obj, 'nonexistant') // throws ReferenceError
```