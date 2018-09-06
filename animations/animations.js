var pathArray = window.location.pathname.split('/');
var loading = false;
var navIsOpen = false;
var parallaxOn = false;
var navMenu = document.querySelector('.cc-nav-menu');
var textFields = document.getElementsByClassName('cc-text');
var parallaxContainer = document.getElementById('parallax');
var prlxLeft = document.getElementById('prlx-left');
var prlxRight = document.getElementById('prlx-right');

var currentPage = pathArray[pathArray.length - 1];
currentPage = currentPage.replace(/.html/g, '');

// Map collapse commands to classList methods
const fnmap = {
    'toggle': 'toggle',
    'show': 'add',
    'hide': 'remove'
}

// Setup Collapsibles
const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));
window.addEventListener('click', (ev) => {
    const elm = ev.target;
    if (triggers.includes(elm)) {
        const selector = elm.getAttribute('data-target');
        collapse(selector, 'toggle');
    }
}, false);

// Setup Shakers
const shakers = Array.from(document.querySelectorAll('[data-toggle="shake"]'));
window.addEventListener('click', (ev) => {
    const elm = ev.target;
    if (shakers.includes(elm)) {
        const selector = elm.getAttribute('data-target');
        this.shake(selector);
    }
}, false);

// Setup dropdowns
const dropdowns = Array.from(document.querySelectorAll('[data-toggle="dropdown"]'));
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (ev) => {
        const elm = ev.currentTarget;
        if (elm && dropdowns.includes(elm)) {
            const selector = elm.getAttribute('data-target');
            this.dropdown(selector);
        }
    })
}, false);

// Setup Toasts
const toasts = Array.from(document.querySelectorAll('[data-toggle="toast"]'));
window.addEventListener('click', (ev) => {
    const elm = ev.target;
    if (toasts.includes(elm)) {
        const selector = elm.getAttribute('data-target');
        toast(selector);
    }
}, false);

// Setup modals
const modals = Array.from(document.querySelectorAll('[data-toggle="modal"]'));
window.addEventListener('click', (ev) => {
    const elm = ev.target;
    if (modals.includes(elm)) {
        const selector = elm.getAttribute('data-target');
        modal(selector);
    }
}, false);

// Set left parallax control to hidden by default
if (prlxLeft) {
    prlxLeft.style.visibility = 'hidden';
}

//TODO: This will be added to NAV js once shared between pages
var navElement = document.getElementById(currentPage);
if (navElement) {
    document.getElementById(currentPage).classList.add('active');
}

/**
 * Hide and show the side nav menu
 */
function toggleNav() {
    navMenu.classList.toggle('open');
}

/**
 * Toggles loading bar on/off
 * @param {Event} event The click event from button
 */
function load(event) {
    var button = event.target;
    button.classList.toggle('active');
    button.nextElementSibling.firstElementChild.classList.toggle('loading-inner');
}

/**
 * Toggles the parallax effect
 */
function toggleParallax() {
    let result = parallaxContainer.classList.toggle('right');
    prlxLeft.style.visibility = result ? 'visible' : 'hidden';
    prlxRight.style.visibility = result ? 'hidden' : 'visible';
}

/**
 * Opens and closes a collapsible div
 * @param {div} selector The div containing data-toggle="collapse" attribute
 * @param {String} action The action mapped to the appropriate classList method
 */
function collapse(selector, action) {
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(target => {
        target.classList[fnmap[action]]('show');
    });
}

/**
 * Hides and shows a toast div
 * @param {div} selector The div containing data-toggle="toast" attribute
 */
function toast(selector) {
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(target => {
        target.classList.toggle('show');
        setTimeout(() => {
            target.classList.toggle('show');
        }, 3000);
    });
}

/**
 * Hides and shows a modal div
 * @param {div} selector The div containing data-toggle="modal" attribute
 */
function modal(selector) {
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(target => {
        target.classList.toggle('show');
    });
}

/**
 * Hides and shows a dropdown div
 * @param {div} selector 
 */
function dropdown(selector) {
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(target => {
        target.classList.toggle('show');
    });
}

/**
 * toggles a shake animation for the target div
 * @param {div} selector 
 */
function shake(selector) {
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(target => {
        target.classList.toggle('shake');
        setTimeout(() => {
            target.classList.toggle('shake');
        }, 1000);
    });
}