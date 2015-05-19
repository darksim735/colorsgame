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



if (!('webkitSpeechRecognition' in window)) {
    //handle error stuff here...
} else {
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.start();

    var final_transcript = '';

    recognition.onresult = function (event) {
        var interim_transcript = '';

        if (typeof (event.results) == 'undefined') {
            recognition.onend = null;
            recognition.stop();
            upgrade();
            return;
        }
        for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                final_transcript += event.results[i][0].transcript;

            } else {
            	console.log("Interim Transcript:", interim_transcript);
                interim_transcript += event.results[i][0].transcript;
            }
        }
        console.log("Final Transcript:", interim_transcript);
//        document.getElementsByTagName('div')[0].innerText = final_transcript;
        $scope.test = final_transcript;

 		// jQuery lite
         angular.element('div.speechbox').text(final_transcript);

    };


}



});