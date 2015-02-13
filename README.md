# groom [![Build Status](https://travis-ci.org/e-conomic/groom.svg?branch=master)](https://travis-ci.org/e-conomic/groom)

[![npm package](https://nodei.co/npm/groom.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/groom/)

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
    ],
    f: new Date(0),
    g: /test/
};
console.log(groom(o));
//output:
{
	a: 1,
	e: ["test"],
    f: '1970-01-01T00:00:00.000Z',
    g: {}
}
```

Dates are .toString()'ed and regExp'es are turned into the empty object `{}`.

The original object stays the same. A copy without null, undefined and empty string is created.