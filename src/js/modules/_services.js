import $ from "../lib/jquery-3.4.1.js"

if (document.getElementById("services")) {
    (function () {

        const cards = document.querySelectorAll(".intro__card");
        const cardFaces = document.querySelectorAll(".card__face");

        const flipCardOnClick = () => {
            for(let card of cards){
                card.addEventListener("click", function (e) {
                    const target = e.target;

                    const targetCard = target.closest(".intro__card");

                    console.log(cardFaces);

                    for (let cardFace of cardFaces){
                        cardFace.classList.remove("card__front-face--flip");
                        cardFace.classList.remove("card__back-face--flip");
                    }

                    targetCard.children[0].classList.add("card__front-face--flip");
                    targetCard.children[1].classList.add("card__back-face--flip");

                    // console.log(targetCard.children[0]);

                });
            }
        };

        const init = () => {
            flipCardOnClick();
        };

        window.addEventListener("load", init)

    })();
}
