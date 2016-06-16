"use strict";

var app = angular.module('youtucandj', ['youtube-embed']);

app.controller('ytcdjCtrl', ['$scope', function($scope) {

$scope.videoId = "xuyCdgpa5sY"
$scope.theBestVideo = 'oyEuk8j8imI';

$scope.video = {};

$scope.videoQueue = [
  'Hs4VcI8hfYc',
  'dQmcaTJ76Mo',
  'SpZYzjLFkLE'
];

$scope.$on('youtube.player.ready', function ($event, player) {
  player.playVideo();
})

$scope.pushNextVideo = function(video) {
  $scope.videoQueue.push(video)
}

}])




// https://github.com/brandly/angular-youtube-embed