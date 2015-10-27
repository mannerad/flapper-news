var app = angular.module('flapperNews', ['ui.router', 'templates']);
app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: 'home/_home.html',
				controller: 'MainController'
			})
			.state('posts', {
				url:'/posts/{id}',
				templateUrl: 'posts/_posts.html',
				controller: 'PostsController'
			});
		$urlRouterProvider.otherwise('/home');
	}
]);
