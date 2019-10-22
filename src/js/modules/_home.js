(function () {
    // variables
    const carousel = document.querySelector(".intro__carousel");
    const carouselItems = document.querySelectorAll(".carousel__item");
    const carouselControls = document.querySelectorAll(".intro__carousel-controls i");

    let indexOfCarouselItemShown = 0;

    const getChildIndexInParent = (element) => {
        return Array.from(element.parentNode.children).indexOf(element);
    };

    const animateCarouselControls = (indexOfCarouselControl) => {

    };

    const checkIfNotShownItem = (index) => {
        if (index !== indexOfCarouselItemShown) {
            return index;
        } else {
            return false;
        }
    };

    const showCarouselItem = (indexOfCarouselItem) => {
        if (indexOfCarouselItem !== indexOfCarouselItemShown) {
            carouselItems[indexOfCarouselItemShown].classList.remove("carousel__item--selected");
            carouselItems[indexOfCarouselItem].classList.add("carousel__item--selected");
            carouselControls[indexOfCarouselItemShown].classList.remove("fas");
            carouselControls[indexOfCarouselItemShown].classList.add("far");
            carouselControls[indexOfCarouselItem].classList.remove("far");
            carouselControls[indexOfCarouselItem].classList.add("fas");
            indexOfCarouselItemShown = indexOfCarouselItem;
            carousel.style.left = `-${indexOfCarouselItem * 100}%`;
        }
    };

    const bindCarouselButtons = () => {
        for (let control of carouselControls) {
            control.addEventListener("click", function () {
                let indexOfSelectedItem = getChildIndexInParent(control);

            })
        }
    };

    const init = () => {
        bindCarouselButtons();
    };

    window.addEventListener("load", init);
})();