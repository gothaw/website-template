import {getRandomIntInclusive} from "./_utilities";

if (document.getElementById("services")) {
    (function () {

        // cards variables
        const cards = document.querySelectorAll(".services-intro__card");
        const numberOfCards = cards.length;
        // carousel variables
        const carousel = document.querySelector(".services-opinions__carousel");
        const carouselItems = document.querySelectorAll(".carousel__item");
        const previous = document.querySelector(".services-opinions__carousel-control--prev");
        const next = document.querySelector(".services-opinions__carousel-control--next");
        const numberOfItems = carouselItems.length;

        let currentItemIndex = 0;

        /**
         * @name            flipCardOnClick
         * @desc            Flips services card when it is clicked. It utilizes adding and removing services-intro__card--flip css class.
         */
        const flipCardOnClick = () => {
            for (let card of cards) {
                card.addEventListener("click", function (e) {

                    const target = e.target;

                    const targetCard = target.closest(".services-intro__card");

                    if (targetCard.classList.contains("services-intro__card--flip")) {
                        targetCard.classList.remove("services-intro__card--flip");
                    } else {
                        for (let card of cards) {
                            card.classList.remove("services-intro__card--flip");
                        }
                        targetCard.classList.add("services-intro__card--flip");
                    }
                });
            }
        };

        /**
         * @name            flipCardTimeout
         * @desc            Flips card every 10 seconds by adding services-intro__card--flip css class.
         *                  If there is already a flipped card, this card is flipped back and a new card is not flipped.
         */
        const flipCardTimeout = () => {
            setTimeout(function () {

                let isAnyCardFlipped = false;

                for (let card of cards) {
                    if (card.classList.contains("services-intro__card--flip")) {
                        isAnyCardFlipped = true;
                        card.classList.remove("services-intro__card--flip");
                        break;
                    }
                }

                if(!isAnyCardFlipped) {
                    const cardToFlipIndex = getRandomIntInclusive(0, numberOfCards - 1);
                    const cardToFlip = cards[cardToFlipIndex];
                    cardToFlip.classList.add("services-intro__card--flip");
                }

                flipCardTimeout();
            }, 10000);
        };

        /**
         * @name            showCarouselItem
         * @param           selectedIndex {int} index of the item to be shown
         * @param           currentIndex {int} index of the currently shown item
         * @desc            Switches between carousel items by changing left property of the carousel DOM element.
         */
        const showCarouselItem = (selectedIndex, currentIndex) => {
            carousel.style.left = `-${100 * selectedIndex}%`;
            carouselItems[currentIndex].classList.remove("carousel__item--selected");
            carouselItems[selectedIndex].classList.add("carousel__item--selected");
        };

        /**
         * @name            bindCarouselControls
         * @desc            Binds next and previous buttons for clients opinion carousel.
         *                  It verifies the index of the carousel item to be shown and invokes showCarouselItem function.
         */
        const bindCarouselControls = () => {
            next.addEventListener("click", function () {
                const selectedItemIndex = currentItemIndex < numberOfItems - 1 ? currentItemIndex + 1 : 0;
                showCarouselItem(selectedItemIndex, currentItemIndex);
                currentItemIndex = selectedItemIndex;

            });
            previous.addEventListener("click", function () {
                const selectedItemIndex = currentItemIndex > 0 ? currentItemIndex - 1 : numberOfItems - 1;
                showCarouselItem(selectedItemIndex, currentItemIndex);
                currentItemIndex = selectedItemIndex;
            })
        };

        const init = () => {
            flipCardOnClick();
            flipCardTimeout();
            bindCarouselControls();
        };

        window.addEventListener("load", init)

    })();
}
