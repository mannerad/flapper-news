angular.module('flapperNews')
.factory('posts', [
	function(){
		//service body
		var O = {
			posts: []
		};
		return O;
	}
])