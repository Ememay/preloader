/* 
    1 : get the preloaderArea
    2 : when window fully loaded, "fadepreloader" class add to preloaderArea
*/

// 1
const preloadArea = document.querySelector('#preloader-area');
// 2
window.addEventListener('load', () => {
    preloadArea.classList.add('fadepreloader')
})