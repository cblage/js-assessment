exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
	return fn.apply(obj);
  },

  alterObjects : function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
  	var result = [];
  	for (var x in obj) {
  		if (obj.hasOwnProperty(x)) {
  			result.push(x + ': ' + obj[x]);
  		}
  	}
  	return result;
  }
};
