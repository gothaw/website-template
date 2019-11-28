/**
 *  Script for videos with basic controls. Basic controls include play and stop button. Does not include header video.
 *  This script applies to videos between website sections.
 *  The HTML should include:
 *  - <div> tag with class basic-video-wrapper that contains video tag and all the controls
 *  - <video> tag with a class of basic-video, inside basic-video-wrapper
 *  - Two <div> tags with class basic-video-control, inside basic-video-wrapper. Each of these should contain <i> tag with play or stop symbols using font awesome icons.
 *    <div> tags should also include data-control attributes with values "play-pause" and "stop"
 *
 *
 *  Example:
 *
 *  <div class="basic-video-wrapper">
 *      <video class="basic-video" loop src="dist/vid/services_video_1.mp4" preload="none"></video>
 *      <div class="basic-video-control" data-control="play-pause">
 *          <i class="fas fa-play"></i>
 *      </div>
 *      <div class="basic-video-control" data-control="stop">
 *          <i class="fas fa-stop"></i>
 *      </div>
 *  </div>
 *
 */
(function () {

    const basicVideoWrappers = document.querySelectorAll(".basic-video-wrapper");

    // array of video objects created using createArrayOfVideos
    let videoArray = [];

    /**
     * @name            playAndPauseVideo
     * @param           video - video object from videoArray
     * @desc            Plays and pauses video.
     */
    const playAndPauseVideo = (video) => {
        if (!video.isPlaying) {
            video.iconPlayAndPause.classList.remove("fa-play");
            video.iconPlayAndPause.classList.add("fa-pause");
            video.media.play();
        } else {
            video.iconPlayAndPause.classList.remove("fa-pause");
            video.iconPlayAndPause.classList.add("fa-play");
            video.media.pause();
        }
        video.isPlaying = !video.isPlaying;
    };

    /**
     * @name            stopVideo
     * @param           video - video object from videoArray
     * @desc            Stops video.
     */
    const stopVideo = (video) => {
        video.iconPlayAndPause.classList.remove("fa-pause");
        video.iconPlayAndPause.classList.add("fa-play");
        video.media.pause();
        video.media.currentTime = 0;
        video.isPlaying = false;
    };

    /**
     * @name            bindVideoControls
     * @desc            Function binds buttonPlayAndPause and buttonStop for video object. It invokes playAndPauseVideo and stopVideo when buttons are clicked.
     */
    const bindVideoControls = () => {
        for (let video of videoArray) {
            video.buttonPlayAndPause.addEventListener("click", function () {
                playAndPauseVideo(video);
            });
            video.buttonStop.addEventListener("click", function () {
                stopVideo(video);
            })
        }
    };

    /**
     * @name            createArrayOfVideos
     * @desc            Function creates array of video objects.
     *                  Video object includes following properties:
     *                  media - <video> tag
     *                  buttonPlayAndPause - <div> tag that contains play icon
     *                  iconPlayAndPause - <i> tag with play symbol
     *                  buttonStop - <div> tag that contains stop icon
     *                  isPlaying - boolean that indicates if video is playing
     */
    const createArrayOfVideos = () => {
        for (let wrapper of basicVideoWrappers) {
            videoArray.push({
                media: wrapper.querySelector(".basic-video"),
                buttonPlayAndPause: wrapper.querySelector(".basic-video-control[data-control=play-pause]"),
                iconPlayAndPause: wrapper.querySelector(".basic-video-control[data-control=play-pause] .fas"),
                buttonStop: wrapper.querySelector(".basic-video-control[data-control=stop]"),
                isPlaying: false
            });
        }
    };

    const init = () => {
        createArrayOfVideos();
        bindVideoControls();
    };

    window.addEventListener("load", init);

})();