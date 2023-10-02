let menBurger = document.getElementById("menBurger");
let mobileMenu = document.querySelector(".mobileMenu");
const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".modal");
const modalImage = document.getElementById("modal-image");
let header = document.getElementById("sticky-header");

menBurger.onclick = function () {
  mobileMenu.classList.toggle("hidden");
};
const closeModal = document.querySelector(".close");

// Open the modal and display the clicked image
function openModal(imageSrc) {
  modal.style.display = "block";
  modalImage.src = imageSrc;
}

// Close the modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Add click event listeners to each image container
const imageContainers = document.querySelectorAll(".image-container");
imageContainers.forEach((container) => {
  container.addEventListener("click", () => {
    const image = container.querySelector("img");
    openModal(image.src);
  });
});

// scrollSlide

let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;

  if (window.innerWidth <= 782) {
    el.style.width = `${(scrollTop / height) * 86}%`;
  } else if (window.innerWidth <= 370) {
    el.style.width = `${(scrollTop / height) * 60}%`;
  }
});

//scroll to top

window.onscroll = function () {
  this.scrollY >= 1000
    ? span.classList.add("show")
    : span.classList.remove("show");
};

let span = document.querySelector(".up");

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// // script.js
// function isElementInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// function checkVisibility() {
//   const animatedSection = document.getElementById("animated-section");

//   if (isElementInViewport(animatedSection)) {
//     animatedSection.classList.add("fade-in");
//     // Remove the event listener to prevent multiple animations
//     window.removeEventListener("scroll", checkVisibility);
//   }
// }

// // Attach the scroll event listener
// window.addEventListener("scroll", checkVisibility);
