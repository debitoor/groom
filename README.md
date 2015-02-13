# groom
[![npm package](https://nodei.co/npm/request.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/groom/)


[![Build Status](https://travis-ci.org/e-conomic/groom.svg?branch=master)](https://travis-ci.org/e-conomic/groom)

Does JSON.parse(JSON.stringify(myObject)) and removes all nulls, undefined and empty strings.

```js
var groom = require('groom');

var o = {
	a: 1,
    b: '',
    c: null,
    d: undefined,
    e: [
    	null,
        undefined,
        'test'
    ]
};
console.log(groom(o));
//output:
{
	a: 1,
	e: ["test"]
}
```

Note, the original object stays the same. A copy without null, undefined and empty string is created.