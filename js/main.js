"use strict";

// Declare all variables
const tabcontent = document.querySelectorAll(".tabcontent");
const tablinks = document.querySelectorAll(".tablinks");
const accordion = document.querySelectorAll(".accordion_title");
const mobile_menu = document.querySelector(".mobile-menu");
const mobile_menu_close = document.querySelector(".mobile-menu-close");
const body = document.querySelector("body");

window.onload = () => {
  document.getElementById("defaultOpen").click();

  /*---------------
    Accordion Action
  -----------------*/
  Array.from(accordion).forEach((acc) => {
    acc.addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  /*---------------
    Mobile menu Action
  -----------------*/
  mobile_menu.addEventListener("click", (e) => {
    body.classList.add("nav-open");
  });
  mobile_menu_close.addEventListener("click", (e) => {
    body.classList.remove("nav-open");
  });
};

/*-----------------
  Tabs Action
  ----------------*/

let openTab = (evt, tabId) => {
  //   Get all elements with class="tabcontent" and hide them
  Array.from(tabcontent).forEach((tab) => {
    tab.style.display = "none";
  });
  // Get all elements with class="tablinks" and remove the class "active"
  Array.from(tablinks).forEach((tlink) => {
    tlink.classList.remove("active");
  });
  // Show the current tab, and add an "active" class to the button that opened the tab
  Array.from(tablinks).forEach;
  document.getElementById(tabId).style.display = "flex";
  evt.currentTarget.className += " active";
};
