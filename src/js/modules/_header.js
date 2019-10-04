(function () {
    // variables
    const header = document.querySelector(".header");
    const bannerVideo = header.querySelector(".header__video");
    const videoControls = header.querySelectorAll(".video-controls__control[data-control]");
    const playAndPauseIcon = header.querySelector(".video-controls__control[data-control=play-pause] .fas");

    let videoPlaying = false;

    /**
     * @name            videoStop
     */
    const videoStop = () => {
        if (videoPlaying) {
            playAndPauseIcon.classList.remove("fa-pause");
            playAndPauseIcon.classList.add("fa-play");
            bannerVideo.pause();
            videoPlaying = false;
        }
        bannerVideo.currentTime = 0;
    };

    /**
     * @name            videoPlayAndPause
     */
    const videoPlayAndPause = () => {
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
     * @name            bannerVideoControls
     */
    const bannerVideoControls = () => {
        for (let control of videoControls) {
            control.addEventListener("click", function () {
                const controlName = control.getAttribute("data-control");
                switch (controlName) {
                    case 'play-pause':
                        videoPlayAndPause();
                        break;
                    case 'stop':
                        videoStop();
                        break;
                    case 'fast-forward':
                        break;
                }
            })
        }
    };

    const init = () => {
        bannerVideoControls()
    };

    window.addEventListener("load", init);
})();