# groom
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
console.log(o)
//output:
{
	a: 1,
	e: ["test"]
}
```
