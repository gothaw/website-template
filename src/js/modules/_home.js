(function () {
    // variables
    const carousel = document.querySelector(".intro__carousel");
    const carouselItems = document.querySelectorAll(".carousel__item");
    const carouselControls = document.querySelectorAll(".intro__carousel-controls i");

    // Index of the Carousel Item/Carousel Control that is currently shown/highlighted
    let currentIndex = 0;

    /**
     * @name        getChildIndexInParent
     * @param       element
     * @desc        Function gets index of the element with respect to its parent.
     * @returns     {int}
     */
    const getChildIndexInParent = (element) => {
        return Array.from(element.parentNode.children).indexOf(element);
    };

    /**
     * @name        animateCarouselControls
     * @param       indexOfSelectedControl {int} index of the empty circle that is selected by user
     * @param       indexOfHighlightedControl {int} index of the circle that is currently selected i.e. solid circle
     * @desc        Animates carouser controls by adding and deleting relevant font awesome classes to create empty and solid circles.
     */
    const animateCarouselControls = (indexOfSelectedControl, indexOfHighlightedControl) => {
        carouselControls[indexOfHighlightedControl].classList.remove("fas");
        carouselControls[indexOfHighlightedControl].classList.add("far");
        carouselControls[indexOfSelectedControl].classList.remove("far");
        carouselControls[indexOfSelectedControl].classList.add("fas");
    };

    /**
     * @name        showCarouselItem
     * @param       indexOfSelectedItem {int} index of the carousel item selected by user
     * @param       indexOfCurrentItem {int} index of the carousel item that is currently shown to user
     * @desc        Switches between carousel items by changing left property of the carousel DOM element.
     */
    const showCarouselItem = (indexOfSelectedItem, indexOfCurrentItem) => {
        carouselItems[indexOfCurrentItem].classList.remove("carousel__item--selected");
        carouselItems[indexOfSelectedItem].classList.add("carousel__item--selected");
        carousel.style.left = `-${indexOfSelectedItem * 100}%`;
    };

    /**
     * @name        animateCarousel
     * @desc        Animates carousel in the introduction section on the home page. It invokes showCarouselItem and animateCarouselControls functions.
     *              The carousel is animated when user clicks on the carousel controls - circles below text area.
     */
    const animateCarousel = () => {
        for (let control of carouselControls) {
            control.addEventListener("click", function () {
                let indexOfSelectedItem = getChildIndexInParent(control);
                showCarouselItem(indexOfSelectedItem, currentIndex);
                animateCarouselControls(indexOfSelectedItem, currentIndex);
                currentIndex = indexOfSelectedItem;
            })
        }
    };

    const init = () => {
        animateCarousel();
    };

    window.addEventListener("load", init);
})();