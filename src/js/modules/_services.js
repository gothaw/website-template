if (document.getElementById("services")) {
    (function () {

        // cards variables
        const cards = document.querySelectorAll(".services-intro__card");
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
            bindCarouselControls();
        };

        window.addEventListener("load", init)

    })();
}
