if (document.getElementById("services")) {
    (function () {

        const cards = document.querySelectorAll(".intro__card");

        /**
         * @name            flipCardOnClick
         * @desc            Flips services card when it is clicked. It utilizes adding and removing intro__card--flip css class.
         */
        const flipCardOnClick = () => {
            for (let card of cards) {
                card.addEventListener("click", function (e) {

                    const target = e.target;

                    const targetCard = target.closest(".intro__card");

                    if (targetCard.classList.contains("intro__card--flip")) {
                        targetCard.classList.remove("intro__card--flip");
                    } else {
                        for (let card of cards) {
                            card.classList.remove("intro__card--flip");
                        }
                        targetCard.classList.add("intro__card--flip");
                    }
                });
            }
        };

        const init = () => {
            flipCardOnClick();
        };

        window.addEventListener("load", init)

    })();
}
