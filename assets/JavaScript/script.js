let header = document.querySelector(".navbar")
window.onscroll = (e)=> {
   if (window.pageYOffset > 100) {
      header.style.background= "yellow";
      // header.style.position= "fixed";
    } else{
      header.style.background= "transparent";
      // header.style.position= "relative";
    }
 }


const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".center-menu");
const navbar = document.querySelector(".left-side-menu");
const body = document.querySelector(".body");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});

navbarLinks.addEventListener("click", () => {
  navbarToggle.classList.remove("active");
  navbarLinks.classList.remove("active");
});

navbar.addEventListener("click", () => {
  navbarToggle.classList.remove("active");
  navbarLinks.classList.remove("active");
});

body.addEventListener("click", () => {
  navbarToggle.classList.remove("active");
  navbarLinks.classList.remove("active");
});

var coll = document.getElementsByClassName("h3");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// const navbarToggle1 = document.querySelector(".drop");
// const navbarLinks1 = document.querySelector(".dropdown-content");

// navbarToggle1.addEventListener("mouseover", () => {
//   navbarToggle1.classList.toggle("active");
//   navbarLinks1.classList.toggle("active");
// });


document.getElementById("copyBtn").addEventListener("click", function() {
  var textToCopy = "ASvkdpm5XfJNrKaNtGB5NKVUk8eLDXuXFyxqBnTUDnnZ";
  
  // Create a textarea element to hold the text temporarily
  var textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  
  // Select and copy the text
  textarea.select();
  document.execCommand("copy");
  
  // Remove the textarea from the document
  document.body.removeChild(textarea);
  
  alert("CA copied to clipboard: " + textToCopy);
});











// var dropdowns = document.getElementsByClassName("dropdown");
// for (var i = 0; i < dropdowns.length; i++) {
//   dropdowns[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.querySelector(".dropdown-content");
//     if (dropdownContent.style.display === "flex") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "flex";
//     }
//   });
// }