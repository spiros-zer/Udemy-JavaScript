"use strict";

/// DOM elements init
const modalElement = document.querySelector(".modal");
const overlayElement = document.querySelector(".oerlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsShowModal = document.querySelectorAll(".show-modal");
///

const openModal = function () {
  modalElement.classList.remove("hidden");
  overlayElement.classList.remove("hidden");
};

const closeModal = function () {
  modalElement.classList.add("hidden");
  overlayElement.classList.add("hidden");
};

for (let i = 0; i < btnsShowModal[i].clientHeight; i++) {
  btnsShowModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlayElement.addEventListener("click", closeModal);
