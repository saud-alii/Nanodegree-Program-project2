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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let sectionNavigation = document.querySelectorAll("section");
let NavListTag = document.getElementById("navbar__list");
let NavSectionLength = sectionNavigation.length;
let NavSectionPositions = [];
let currentPosition = 0;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Scroll to anchor ID using scrollTO event
function scrollToSection(sectionID) {
	window.scrollTo(0, sectionID);

}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sectionNavigation.forEach((element, index) => {
	let sectionName = element.getAttribute("data-nav");
	let toOffSection = element.offsetTop + 30;
	let liTag = document.createElement("li");
	liTag.setAttribute("class", "menu__link" + index);
	
// Scroll to section on link click
   liTag.innerHTML = `<a href = #section${index+1} >${sectionName}</a>`;
   NavListTag.appendChild(liTag);   

});
// Get all the navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');

// Add click event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Get the target section from the link's href attribute
    const targetSection = document.querySelector(link.getAttribute('href'));

    // Scroll to the target section
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});



/**
 * End Main Functions
 * Begin Events
 * 
*/
document.addEventListener("scroll", () => {
	currentPosition = this.scrollY;
	// Add class 'active' to section when near top of viewport
	NavSectionPositions = [];
	sectionNavigation.forEach((element) => NavSectionPositions.push(element.getBoundingClientRect().top + 50));

    // Set sections as active
	let addIndex = NavSectionPositions.findIndex((element) => element > 0);
	for (let i = 0; i < NavSectionLength; i++) {
		if (addIndex === i) {
			document.querySelector(".menu__link" + addIndex).classList.add("active");
			document.querySelector(`#section${addIndex + 1}`).classList.add("current-active-class");
		} else {
			document.querySelector(".menu__link" + i).classList.remove("active");
			document.querySelector(`#section${i + 1}`).removeAttribute("class");
		}
	}
	
	
	});

 






