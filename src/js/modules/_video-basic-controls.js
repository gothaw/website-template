/**
 *  Script for videos with basic controls. Basic controls include play and stop button. Does not include header video.
 *  This script applies to videos between website sections.
 */
(function () {

    const basicVideoWrappers = document.querySelectorAll(".basic-video-wrapper");

    let videoArray = [];

    /**
     * @name            playAndPauseVideo
     * @desc            Plays and pauses services video.
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
     * @desc            Stops services video.
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
     * @desc            Function binds services video controls using switch statement.
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
     *
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