(function () {
    // variables
    const header = document.querySelector(".header");
    const bannerVideo = header.querySelector(".header__video");
    const videoControls = header.querySelectorAll(".video-controls__control[data-control]");
    const playAndPauseIcon = header.querySelector(".video-controls__control[data-control=play-pause] .fas");

    let videoPlaying = false;

    /**
     * @name            playAndPauseVideo
     * @desc            Plays and pauses header video.
     */
    const playAndPauseVideo = () => {
        bannerVideo.playbackRate = 1;
        if (!videoPlaying) {
            playAndPauseIcon.classList.remove("fa-play");
            playAndPauseIcon.classList.add("fa-pause");
            bannerVideo.play();
        } else {
            playAndPauseIcon.classList.remove("fa-pause");
            playAndPauseIcon.classList.add("fa-play");
            bannerVideo.pause();
        }
        videoPlaying = !videoPlaying;
    };

    /**
     * @name            stopVideo
     * @desc            Stops header video is video is playing.
     */
    const stopVideo = () => {
        if (videoPlaying) {
            playAndPauseIcon.classList.remove("fa-pause");
            playAndPauseIcon.classList.add("fa-play");
            bannerVideo.pause();
            bannerVideo.playbackRate = 1;
            bannerVideo.currentTime = 0;
            videoPlaying = false;
        }
    };

    /**
     * @name            rewindVideo
     * @desc
     */
    const rewindVideo = () => {
        if (videoPlaying) {
            setTimeout(function () {

            }, 100);
        }
    };

    /**
     * @name            fastForwardVideo
     * @desc            Fast forwards the video. It increases video speed by 0.5 each time the button is clicked to the maximum of 4.0 x normal speed.
     */
    const fastForwardVideo = () => {
        if (bannerVideo.playbackRate < 4.0) {
            bannerVideo.playbackRate += 0.5;
        }
        if (!videoPlaying) {
            playAndPauseIcon.classList.remove("fa-play");
            playAndPauseIcon.classList.add("fa-pause");
            bannerVideo.play();
            videoPlaying = true;
        }
    };

    /**
     * @name            bindVideoControls
     * @desc            Function binds video controls using switch statement.
     */
    const bindVideoControls = () => {
        for (let control of videoControls) {
            control.addEventListener("click", function () {
                const controlName = control.getAttribute("data-control");
                switch (controlName) {
                    case 'play-pause':
                        playAndPauseVideo();
                        break;
                    case 'stop':
                        stopVideo();
                        break;
                    case 'backward':
                        rewindVideo();
                        break;
                    case 'forward':
                        fastForwardVideo();
                        break;
                }
            })
        }
    };

    const init = () => {
        bindVideoControls()
    };

    window.addEventListener("load", init);
})();