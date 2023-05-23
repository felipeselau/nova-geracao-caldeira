import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider.js"

let slider = tns({
    container: '.galery',
    items: 6,
    slideBy: 1,
    autoplay: true,
    autoplayButton: false,
    autoplayButtonOutput: false,
    nav: false,
    controls: false,
    autoplayTimeout: 1000,
    loop: true,
    speed: 1000
})