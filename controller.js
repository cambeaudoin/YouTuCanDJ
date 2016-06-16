// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
    //   var tag2 = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
    //   tag.id = "tag1"
    //   tag2.src = "https://www.youtube.com/iframe_api";
    //   tag2.id = "tag2"
    //   console.log({tag1: tag, tag2: tag2})
      var firstScriptTag = document.getElementsByTagName('script')[0];
    //   var secondScriptTag = document.getElementsByTagName('script')[1];
        // var firstScriptTag = document.getElementById("tag1");
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    //   console.log(firstScriptTag, "firstScriptTag")
    //   console.log(secondScriptTag, "secondScriptTag")

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      var player2;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '200',
          width: '100%',
          videoId: 'Zf31LvMcAXY',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });

        player2 = new YT.Player('player2', {
          height: '200',
          width: '100%',
          videoId: 'fk4BbF7B29w',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }