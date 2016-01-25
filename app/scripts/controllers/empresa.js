'use strict';

/**
 * @ngdoc function
 * @name zapatosApp.controller:EmpresaCtrl
 * @description
 * # EmpresaCtrl
 * Controller of the zapatosApp
 */
angular.module('zapatosApp')
  .controller('EmpresaCtrl', function ($scope, $http) {

  		$scope.meteo = function(){

  				
		 		 $http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.ciudad+','+$scope.pais+',es&units=metric&appid=2de143494c0b295cca9337e1e96b00e0')
		        .success(function(data) {
		        	$scope.pais = data.name;
		            $scope.localidad = data.name;
		            $scope.temperatura = data.main.temp;
		            $scope.mitemperatura = data.name + '  ' + data.main.temp + ' ºC';
		        })           
		        .error(function(data, status, headers, config) {
		            console.debug(data, status, headers, config);
		        }); 

  		}


  });
