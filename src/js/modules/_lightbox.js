import {getChildIndexInParent} from "../modules/_utilities.js";
import $ from "../lib/jquery-3.4.1.js"

(function () {
    const lightbox = document.querySelector(".home-services__lightbox");
    const lightboxImage = document.querySelector(".lightbox__img");
    const lightboxImageWrapper = document.querySelector(".lightbox__img-wrapper");
    const lightboxDescriptions = document.querySelectorAll(".lightbox__description");
    const galleryItems = document.querySelectorAll(".home-services__img-wrapper");


    const setImageDescription = (index) => {
        for (let description of lightboxDescriptions) {
            description.classList.remove("lightbox__description--show");
        }
        lightboxDescriptions[index].classList.add("lightbox__description--show");
    };

    const setMainLightBoxImage = () => {

    };

    const showLightBox = () => {
        $(lightbox).show("swing");
    };

    const hideLightBox = () => {
        lightboxImageWrapper.addEventListener("click", function (e) {
            e.stopPropagation();
        });
        for (let description of lightboxDescriptions) {
            description.addEventListener("click",function (e) {
                e.stopPropagation();
            })
        }
        lightbox.addEventListener("click", function (e) {
            $(lightbox).hide();
        })
    };


    const bindGalleryItems = () => {
        for (let item of galleryItems) {
            item.addEventListener("click", function () {
                const itemIndex = getChildIndexInParent(item);
                setMainLightBoxImage();
                setImageDescription(itemIndex);
                showLightBox();
            });
        }
    };

    const init = () => {
        bindGalleryItems();
        hideLightBox();
    };

    window.addEventListener("load", init);
})();