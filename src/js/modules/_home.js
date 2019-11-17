import {getChildIndexInParent} from "../modules/_utilities.js";

(function () {
    // variables
    // Carousel Variables
    const carousel = document.querySelector(".intro__carousel");
    const carouselItems = document.querySelectorAll(".carousel__item");
    const carouselControls = document.querySelectorAll(".intro__carousel-controls i");
    // Home milestones variables
    const milestones = document.querySelector(".milestones__inner");
    const milestoneCounters = milestones.querySelectorAll(".stat__count");
    const milestoneCountersValues = {
        clients: 25,
        projects: 32,
        videos: 213,
        photos: 1322
    };

    // Index of the Carousel Item/Carousel Control that is currently shown/highlighted
    let currentIndex = 0;

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
                const indexOfSelectedItem = getChildIndexInParent(control);
                showCarouselItem(indexOfSelectedItem, currentIndex);
                animateCarouselControls(indexOfSelectedItem, currentIndex);
                currentIndex = indexOfSelectedItem;
            })
        }
    };

    /**
     * @name            checkIfMilestonesAreVisible
     * @desc            Function checks if company milestones are visible in the viewport.
     *                  If they are visible, animateMilestoneCounter function is invoked for each counter with a limit that counter counts to.
     */
    const checkIfMilestonesAreVisible = () => {
        setTimeout(function () {
            if (milestones.getBoundingClientRect().top < window.innerHeight) {
                animateMilestoneCounter(milestoneCounters[0], milestoneCountersValues.clients);
                animateMilestoneCounter(milestoneCounters[1], milestoneCountersValues.projects);
                animateMilestoneCounter(milestoneCounters[2], milestoneCountersValues.videos);
                animateMilestoneCounter(milestoneCounters[3], milestoneCountersValues.photos);
            } else {
                checkIfMilestonesAreVisible();
            }
        }, 200)
    };

    /**
     * @name            animateMilestoneCounter
     * @param           counter {Element} DOM element where counting animation takes place
     * @param           limit {int} limit that counter reaches after animation is finished
     * @desc            Function animates counter using setTimeout and recursion by modifying innerHTML of counter DOM element.
     *                  If limit is below 1000, it animates it from 0 to limit by incrementing by one.
     *                  Alternatively, if limit is above 1000 it animates from 0 to adjusted limit, which displayed as, for example, 1.23k and incrementing by 0.01.
     */
    const animateMilestoneCounter = (counter, limit) => {
        let increaseCount;
        let i = 1;
        if (limit < 1000) {
            // logic for counter animation below 1000, displayed as animation from 0 to say 223
            increaseCount = () => {
                setTimeout(function () {
                    counter.innerHTML = i.toString();
                    if (i < limit) {
                        i++;
                        increaseCount();
                    }
                }, 1000 / limit)
            };
        } else if (limit >= 1000) {
            // logic for counter animation above 1000, displayed as animation from 0.000k to say 1.320k
            i = i / 1000;
            const adjustedLimit = Math.floor(limit / 10) / 100;
            increaseCount = () => {
                setTimeout(function () {
                    counter.innerHTML = i.toString().substr(0, 4) + "0k";
                    if (i < adjustedLimit) {
                        i = i + 0.01;
                        increaseCount();
                    }
                }, 1000 / limit)
            };
        }
        increaseCount();
    };

    const init = () => {
        animateCarousel();
        checkIfMilestonesAreVisible();
    };

    window.addEventListener("load", init);
})();