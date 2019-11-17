(function () {

    // Home services variables
    const homeServices = document.querySelector(".home-services");
    const servicesVideo = document.querySelector(".home-services__video");
    const videoControls = homeServices.querySelectorAll(".video-controls__control[data-control]");
    const playAndPauseIcon = homeServices.querySelector(".video-controls__control[data-control=play-pause] .fas");

    let servicesVideoPlaying = false;

    /**
     * @name            playAndPauseVideo
     * @desc            Plays and pauses services video.
     */
    const playAndPauseVideo = () => {
        if (!servicesVideoPlaying) {
            playAndPauseIcon.classList.remove("fa-play");
            playAndPauseIcon.classList.add("fa-pause");
            servicesVideo.play();
        } else {
            playAndPauseIcon.classList.remove("fa-pause");
            playAndPauseIcon.classList.add("fa-play");
            servicesVideo.pause();
        }
        servicesVideoPlaying = !servicesVideoPlaying;
    };

    /**
     * @name            stopVideo
     * @desc            Stops services video.
     */
    const stopVideo = () => {
        playAndPauseIcon.classList.remove("fa-pause");
        playAndPauseIcon.classList.add("fa-play");
        servicesVideo.pause();
        servicesVideo.currentTime = 0;
        servicesVideoPlaying = false;
    };

    /**
     * @name            bindVideoControls
     * @desc            Function binds services video controls using switch statement.
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
                }
            })
        }
    };

    const init = () => {
        bindVideoControls();
    };

    window.addEventListener("load",init);

})();