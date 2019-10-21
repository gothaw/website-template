(function () {
    // variables
    const carouselControls = document.querySelectorAll(".intro__carousel-controls i");
    const carouselItems = document.querySelectorAll(".carousel__item");

    let selectedCarouselItemIndex = 0;

    const getChildIndexInParent = (element) => {
        return Array.from(element.parentNode.children).indexOf(element);
    };

    const bindCarouselButtons = () => {
        for (let control of carouselControls) {
            control.addEventListener("click", function () {
                let index = getChildIndexInParent(control);
                carouselItems[selectedCarouselItemIndex].classList.remove("carousel__item--selected");
                carouselItems[index].classList.add("carousel__item--selected");
            })
        }
    };

    const init = () => {
        bindCarouselButtons();
    };

    window.addEventListener("load", init);
})();