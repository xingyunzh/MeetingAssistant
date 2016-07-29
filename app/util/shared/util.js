(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.util = factory()
}(this, function () { 
	var util = {};

		//convenient methods to contruct uniformat response
	util.wrapBody = function(obj, statusCode){
		var statusCode = arguments[1] ? arguments[1] : 'S';
		var wrapper = {
			status: statusCode,
			body : obj
		};

		return wrapper;
	};

	///methods for enumeration Types
	//Do not directly call them. Assign the methods to your own enumeration type to use, or use apply function.
	util.isDefinedEnumMethod = function(st) {
		if (isNaN(st)) {
			return false;
		} else {
			for (var key in this) {
				if (!isNaN(this[key]) && st === this[key]) {
					return true;
				};
			}
		}

		return false;
	}

	util.stringFromEnumMethod = function(st) {
		if (!isNaN(st)) {
			// statement
			for (var key in this) {
				if (!isNaN(this[key]) && st === this[key]) {
					return key;
				};
			};
		}

		return "Not a valid state";
	}

	return util;
}));