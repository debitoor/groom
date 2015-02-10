var groom = require('../');
describe('object with empty string and null', function(){
	var o;

	before(function(){
		o = {
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
	});


	it('removes empty stings and nulls', function(){
		expect(groom(o)).to.eql({
			a: 1,
			e: [
				"test"
			]
		});
	});
});