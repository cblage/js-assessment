exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  	return new Promise(function doAsync (resolve, reject) {
  		setTimeout(function fakeAsync() {
			resolve(value);
  		}, 15);
  	});
  },

  manipulateRemoteData : function(url) {
		return new Promise(function fetchNames (resolve, reject) {
			jQuery.
				get(url).
				done(function parseResp (resp) {
					if (!Array.isArray(resp.people)) {
						return reject("invalid format");
					}

					var result = [];

					for (var i = 0; i < resp.people.length; i++) {
						result.push(resp.people[i].name);
					}

					result.sort();

					resolve(result);
				}).
				fail(function handleError (e) {
					reject(e);
				});
		});
  }
};
