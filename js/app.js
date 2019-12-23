/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Global Vars
 */

const sections = document.getElementsByTagName("section");

// loops through all the secitons 
function createNavLi() {
    for (const section of sections) {
        createSectionLink(section)
    }
}


// addings an item to the nav for every section 
function createSectionLink(section) {
    const node = document.createElement('li')
    const nodeLink = document.createElement('a')
    nodeLink.addEventListener("click", function () {
        section.scrollIntoView()
    });
    node.id = section.id + 'nav'
    nodeLink.innerText = section.getAttribute('data-nav')
    node.appendChild(nodeLink);
    document.getElementById('navbar__list').appendChild(node);
}

//this is setting the state to active (changes the css color to yellow)
function setActive(id) {
    const navlist = document.getElementsByTagName("li")
    for (const navitem of navlist) {
        navitem.classList.remove("active")
    }
    document.getElementById(id).classList.add("active");
}


// Runs the fuction to create the nav bar 
createNavLi();


// Set sections as active
window.addEventListener("scroll", (e) => {
    const pos = window.scrollY;

    // start at the bottom so that the top section in view is active
    for (let section of Array.from(sections).reverse()) {
        const offsetBottom = section.offsetTop + section.clientHeight;
        if (pos < section.offsetTop && pos < offsetBottom) {
            console.log({ pos, topPixel: section.offsetTop, id: section.id })
            setActive(section.id + 'nav')
        }
    }

})

