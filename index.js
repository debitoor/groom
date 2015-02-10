module.exports = function(o){
	return JSON.parse(JSON.stringify(o, replacer));
};

module.exports.replacer = replacer;

function replacer(key, value) {
	if (value === null || value === '') {
		return undefined; //never return null or empty strings in our JSON
	}
	if(Array.isArray(value)){
		return value.filter(noNullUndefinedOrEmptyString);
	}
	return value;
}

function noNullUndefinedOrEmptyString(v){
	return v !== null && v !== undefined && v !== '';
}
