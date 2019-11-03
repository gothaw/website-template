import {getChildIndexInParent} from "../modules/_utilities.js";
import $ from "../lib/jquery-3.4.1.js"

(function () {
    const lightbox = document.querySelector(".lightbox");
    const galleryItems = document.querySelectorAll(".gallery__item");
    const lightboxImage = document.querySelector(".lightbox__img");
    const lightboxImageWrapper = document.querySelector(".lightbox__img-wrapper");
    const lightboxDescriptions = document.querySelectorAll(".lightbox__description");
    const lightboxArrowLeft = document.querySelector(".lightbox__arrow--left");
    const lightboxArrowRight = document.querySelector(".lightbox__arrow--right");

    let lightboxIndex = 0;

    const setImageDescription = (index) => {
        for (let description of lightboxDescriptions) {
            description.classList.remove("lightbox__description--show");
        }
        lightboxDescriptions[index].classList.add("lightbox__description--show");
    };

    const setMainLightBoxImage = (e) => {
        const target = e.target;
        const targetGalleryItem = target.closest(".gallery__item");
        const mainImage = targetGalleryItem.querySelector("picture");
        if(lightboxImageWrapper.children.length > 2){
            lightboxImageWrapper.removeChild(lightboxImageWrapper.firstChild);
        }
        console.log(lightboxImageWrapper.children.length);
        lightboxImageWrapper.prepend(mainImage.cloneNode(true));
    };

    const showLightBox = () => {
        $(lightbox).show("swing");
    };

    const hideLightBox = () => {
        lightboxImageWrapper.addEventListener("click", function (e) {
            e.stopPropagation();
        });
        for (let description of lightboxDescriptions) {
            description.addEventListener("click", function (e) {
                e.stopPropagation();
            })
        }
        lightbox.addEventListener("click", function (e) {
            $(lightbox).slideUp("fast");
        })
    };

    const bindLightboxArrows = () => {
        lightboxArrowLeft.addEventListener("click", function () {
            lightboxIndex === 0 ? lightboxIndex = galleryItems.length - 1 : lightboxIndex--;
        });
        lightboxArrowRight.addEventListener("click", function () {
            lightboxIndex === galleryItems.length - 1 ? lightboxIndex = 0 : lightboxIndex++;
        });
    };

    const bindGalleryItems = () => {
        for (let item of galleryItems) {
            item.addEventListener("click", function (e) {
                lightboxIndex = getChildIndexInParent(item);
                setMainLightBoxImage(e);
                setImageDescription(lightboxIndex);
                showLightBox();
            });
        }
    };

    const init = () => {
        bindGalleryItems();
        hideLightBox();
        bindLightboxArrows();
    };

    window.addEventListener("load", init);
})();