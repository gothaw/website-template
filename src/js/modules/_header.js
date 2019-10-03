(function () {
    // variables
    const bannerVideo = document.querySelector(".header__video");
    const videoControls = document.querySelectorAll(".video-controls__control[data-control]");


    const videoPlayAndPause = () => {
        bannerVideo.play();
    };

    const bannerVideoControls = () => {
        for(let control of videoControls){
            control.addEventListener("click",function () {
                let controlName = control.getAttribute("data-control");
                switch (controlName) {
                    case 'play-pause':
                        videoPlayAndPause();
                        break;
                    case 'stop':
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