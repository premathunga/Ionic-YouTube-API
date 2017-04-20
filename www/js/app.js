
(function(){

var app = angular.module('youtubevideo', ['ionic', 'youtube-embed']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

 app.controller('mycontroller', function($scope, $http){

    $scope.videos = [];

    $scope.youtubeParams = {
      key: 'API Key',
      type: 'video',
      maxResults: '50',
      part: 'id,snippet',
      q: 'AkonVEVO',
      order: 'date',
      channelId: '4eI0K12J1lA',
    }

    $http.get('https://www.googleapis.com/youtube/v3/search', {params:$scope.youtubeParams}).success(function(response){
      angular.forEach(response.items, function(child){
        $scope.videos.push(child);
      });
    });


 });

}());