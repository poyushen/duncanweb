import { browser } from '$app/environment';

// @ts-ignore
export default function scrollTo(eleid){
    if (browser) {
        // @ts-ignore
        document.getElementById(eleid).scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    };
}