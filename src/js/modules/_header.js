(function () {
    // variables
    const bannerVideo = document.querySelector(".header__video");
    const videoControls = document.querySelectorAll(".video-controls__control[data-control]");


    const bannerVideoControls = () => {
        for(let control of videoControls){
            control.addEventListener("click",function () {

            })
        }
    };

    const init = () => {
        bannerVideoControls()
    };

    window.addEventListener("load", init);
})();