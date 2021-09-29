const header = document.querySelector("header");
const siteButtons = document.querySelectorAll("div .btn");
const busPhoto = document.querySelector(".intro img");
const siteBody = document.querySelector("body");
const paragraphs = document.querySelectorAll("p");
const navLinks = document.querySelectorAll("nav a");

header.addEventListener("mouseover", (event) => {
  header.style.backgroundColor = "grey";
  header.style.color = "white";
  event.stopPropagation();
});

header.addEventListener("mouseleave", (event) => {
  header.style.backgroundColor = "white";
  header.style.color = "black";
  event.stopPropagation();
});

siteButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (button.style.backgroundColor === "orange") {
      button.style.backgroundColor = "white";
      button.style.color = "black";
    } else {
      button.style.backgroundColor = "orange";
      button.style.color = "white";
    }
    
    event.stopPropagation();
  });
});

document.addEventListener("keydown", (event) => {
  siteBody.style.backgroundColor = "seagreen";
  event.stopPropagation();
});

document.addEventListener("keyup", (event) => {
  siteBody.style.backgroundColor = "white";
  event.stopPropagation();
});

busPhoto.addEventListener("dblclick", (event) => {
  alert("You double-clicked the bus photo!");
  event.stopPropagation();
});

document.addEventListener("scroll", (event) => {
  siteBody.style.transition = "1s";
  siteBody.style.backgroundColor = "lightyellow";
});


window.addEventListener("load", (event) => {
  alert("The site has been loaded! Welcome!");
});

busPhoto.addEventListener("mouseenter", (event) => {
busPhoto.style.border = "solid 3px red";
  event.stopPropagation();
});
busPhoto.addEventListener("mouseleave", (event) => {
busPhoto.style.border = "solid 0px red";
  event.stopPropagation();
});

window.addEventListener("resize", (event) => {
  alert("browser resized");
  event.stopPropagation();
});

paragraphs.forEach((paragraph) => {
  paragraph.addEventListener("copy", (event) => {
    alert("copied text");
    event.stopPropagation();
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});