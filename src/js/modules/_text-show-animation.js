/**
 *  Script for show animation of text/headings over videos and images. Text shows up when it shows up on the viewport.
 */
(function () {

    const homeServicesVideoHeading = document.querySelector(".home-services__video-heading");

    let homeServicesVideoHeadingShown = false;

    /**
     * move to separate file
     */
    const animateHeadings = () => {
        setTimeout(function () {
            if (homeServicesVideoHeading.getBoundingClientRect().top < window.innerHeight) {
                homeServicesVideoHeading.classList.add("text-show-animation__show");
                homeServicesVideoHeadingShown = true;
            }
            if (!homeServicesVideoHeadingShown) {
                animateHeadings();
            }
        }, 500);
    };

    const init = () => {
        animateHeadings();
    };

    window.addEventListener("load",init);
})();