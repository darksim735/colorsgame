// Speech App

'use strict';
app.config(function ($stateProvider) {
    $stateProvider.state('speech', {
        url: '/speech',
        templateUrl: 'js/speech/speech.html',
        controller: 'SpeechCtrl',
        resolve: {

        }
    });
});

app.controller('SpeechCtrl', function($scope, $http) {

$scope.test = "HELLO THIS WORKED";



});