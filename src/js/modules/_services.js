if (document.getElementById("services")) {
    (function () {

        const cards = document.querySelectorAll(".intro__card");

        const flipCardOnClick = () => {
            for(let card of cards){
                card.addEventListener("click", function (e) {
                    const targetCard = e.target;

                    /*for(card of cards){
                        card.querySelector("").classList.remove("intro__card--flipped");
                    }
                    targetCard.classList.add("intro__card--flipped");*/
                });
            }
        };

        const init = () => {
            flipCardOnClick();
        };

        window.addEventListener("load", init)

    })();
}
