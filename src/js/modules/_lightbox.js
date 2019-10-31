import {getChildIndexInParent} from "../modules/_utilities.js";

(function () {
    const lightbox = document.querySelector(".home-services__lightbox");
    const galleryImages = document.querySelectorAll(".home-services__img-wrapper");






    const bindGalleryImages = () => {
        for(let image of galleryImages){
            image.addEventListener("click", function () {

                const imageIndex = getChildIndexInParent(image);
            });
        }
    };

    const init = () => {
        bindGalleryImages();
    };

    window.addEventListener("load",init);
})();