<h2>Get Started Fast</h2>

Step 1: Make sure you have installed [node.js](https://nodejs.org/en/download/)

Open Terminal from you Mac or PC, type in

    # node -v
    
If you do not see a version number, please install [node.js](https://nodejs.org/en/download/)

Step 2: install the latest Cordova and Ionic command-line tools.

    # npm install -g cordova ionic
    
Step 3: Follow the Android and iOs platform guides to install required platform dependencies.
If you have any questions regarding the above 3 steps, please reference to Ionic Official Getting Started.
Check all the installation by typing $ ionic info in your command line tool to check the version number of all the required pieces.

    # ionic info
    
Step 4: clone a Git repository into a specific folder (Create folder and run cmd)

    # git clone https://github.com/premathunga/Ionic-YouTube-API.git
    
Step 5:  Drag & Drop Project folder on text editor ([Sublime Text](https://www.sublimetext.com/3))
   Change our controller code into this: (Connect with YouTube using YouTube API V3) <br> <br>
   *Open www > js > app.js (insert your YouTube API key and CHANNEL ID )
   
       app.controller('mycontroller', function($scope, $http){
        $scope.videos = [];

         $scope.youtubeParams = {
          key: 'YOUR YOUTUBE API KEY',
          type: 'video',
          maxResults: '5',
          part: 'id,snippet',
          q: 'YOUR SERACH KEYWORDS',
          order: 'date',
          channelId: 'YOUR CHANNEL ID',
        }

        $http.get('https://www.googleapis.com/youtube/v3/search', {params:$scope.youtubeParams}).success(function(response){
        angular.forEach(response.items, function(child){
        console.log (child);
        });
        });

        });
        
      
<h2>screenshot</h2>

![alt tag](https://3.bp.blogspot.com/-FWSC1v_1wT8/WPieMkHPPSI/AAAAAAAABXk/M9Bi2aMEYQMAFgM2cqR0BP-0dtMI1OSQgCLcB/s1600/iphone-app2.png)
        

[Source code](https://creatorup.com/build-hybrid-app-for-your-youtube-channel-or-wordpress-site-with-ionic-and-angularjs-part-1/)
   
   
