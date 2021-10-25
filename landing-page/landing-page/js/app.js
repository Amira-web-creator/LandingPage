const allSections = document.getElementsByTagName("section"); // hold all the sections list
const navBar = document.getElementById("navbar__list"); // hold the navbar element
let listItems = "";
let navItem = "";
let sceolling = null;

function creatList(...allSections) {
  //loop for sections list

  allSections.forEach((section) => {
    const sectionDataNav = section.getAttribute("data-nav"); // get the section data-nav
    const sectionID = section.getAttribute("id"); // get the section data-nav
    const anchor = document.createElement("a"); //creat anchor element
    anchor.setAttribute("id", `#${sectionID}`);

    const createdListItem = document.createElement("li"); //creat li element for each anchor
    createdListItem.appendChild(anchor); // append the anchor to the li element

    createdListItem.setAttribute("class", "menu__link"); //add class attribute and its value to the created lis item
    anchor.textContent = sectionDataNav; // make the listItem content equals to the section data nav value
    navBar.appendChild(createdListItem); // append all the created list items to the navbar element

    listItems = document.querySelectorAll(".menu__link");

    window.addEventListener("scroll", scrollFunction); //listening to scrollFunction on scrolling the page

    function scrollFunction() {
      const rect = section.getBoundingClientRect(); //  get the size of the section and its position relative to the viewport

      if (rect.top >= 0 && rect.top <= 300) {
        section.classList.add("activeSection"); // add the active class from the section
        // add active class to the navbar listItems
        listItems.forEach((item) => {
          if (item.textContent === sectionDataNav) {
            item.classList.add("active"); // add active class to the item when it have the sam text content with the section name
          } else {
            item.classList.remove("active"); //a remove active class to the item when it do not have the sam text content with the section name
          }
        });
      } else {
        section.classList.remove("activeSection"); // remove the active class from the section
      }
    }
  });

  // scrolling by click the li item

  for (let i = 0; i < allSections.length; i++) {
    navItem = listItems[i];
    navItem.addEventListener("click", function () {
      allSections[i].scrollIntoView();
    });
  }
}

//hide the navbar when not scrolling for 5 seconds

window.addEventListener(
  "scroll",
  function () {
    if (sceolling !== null) {
      clearTimeout(sceolling);
      navBar.classList.remove("hide");
    }

    sceolling = setTimeout(function () {
      navBar.classList.add("hide");
    }, 5000);
  },

  false
);

creatList(...allSections);
