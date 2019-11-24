/**
 *  Script for show animation of text/headings over videos and images. Text shows up when it shows up on the viewport.
 */
(function () {

    const textShowAnimation = document.querySelectorAll(".text-show-animation");

    // array which holds intervals for text show animation
    let intervalArray = [];

    /**
     * @name        animateText
     * @desc        Function checks if text is visible in the viewport using setInterval and getBoundingClientRect().
     *              If text is visible it adds a css class with animation and clears the interval.
     */
    const animateText = () => {
        for (let i = 0; i < textShowAnimation.length; i++) {
            intervalArray[i] = setInterval(function () {
                if (textShowAnimation[i].getBoundingClientRect().bottom < window.innerHeight && textShowAnimation[i].getBoundingClientRect().bottom >= 0) {
                    textShowAnimation[i].classList.add("text-show-animation__show");
                    clearInterval(intervalArray[i])
                }
            }, 500);
        }
    };

    const init = () => {
        animateText();
    };

    window.addEventListener("load", init);
})();