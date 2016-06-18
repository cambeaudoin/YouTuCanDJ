"use strict";

app.controller('ytcdjCtrl', ['$scope', function($scope) {

var videoPlaying = false;

$scope.video1 = null;
$scope.video2 = null;


$scope.video = {
  videoId: ''
};

$scope.playerArray = [];

$scope.videoQueue = [
  // 'Hs4VcI8hfYc',
  // 'dQmcaTJ76Mo',
  // 'SpZYzjLFkLE'
];

// console.log(youtube.player);

// $scope.$watch('videoQueue', function(newVal, oldVal) {
//       if ( newVal !== oldVal ) {

//   console.log("ping!");
//   if ($scope.video1 === null) {
//     $scope.video1 = $scope.videoQueue[0];
//     $scope.videoQueue.shift();
//   } else if ($scope.video1 === null) {
//     $scope.video2 = $scope.videoQueue[0];
//     $scope.videoQueue.shift();
//   }
//       }
//   // console.log("in here");
//   // if ($scope.playerArray[1]) {
//     // playNextVideo($scope.playerArray[0]);
//     // console.log("called playnext");
//     // initialLoad();
//     // console.log("called initialLoad");
//   // }
// })

$scope.$on('youtube.player.ready', function ($event, player) {
  $scope.playerArray.push(player);
  console.log($scope.playerArray);

  if (videoPlaying === false) {
    player.playVideo();
    videoPlaying = true;
  }
})

$scope.pushNextVideo = function(video) {
  console.log(video);
    if ($scope.video1 === null) {
    $scope.video1 = video.videoId;
    $scope.video.videoId = '';
    console.log($scope.video1);
  } else if ($scope.video2 === null) {
    $scope.video2 = video.videoId;
    $scope.video.videoId = '';
  } else {
    $scope.videoQueue.push(video.videoId)
  }
}





function playNextVideo(video) {
  // console.log(video);
  // video.playVideo();
}

// playNextVideo(playerArray[0])


//end
}])





// https://github.com/brandly/angular-youtube-embed