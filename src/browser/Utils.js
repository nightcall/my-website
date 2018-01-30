export const scrollToDiv = (div) => (e) => {
    e.preventDefault();
    document.getElementById(div).scrollIntoView();
};