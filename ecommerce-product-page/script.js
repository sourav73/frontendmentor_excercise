const burger = document.querySelector(".burger");
const close = document.querySelector(".close");
const mainNav = document.querySelector(".header__main-nav-container");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const cartToggler = document.querySelector(".cart-btn");
const cartContent = document.querySelector(".header__cart-content");
const cartQuantityBadge = document.querySelector(".header__cart-quantity");
const cartItemNode = document.querySelector(".cart-item");
const emptyMsg = document.querySelector(".empty");
const cartQuantityNode = document.querySelector(".cart-quantity");
const quantityPriceNode = document.querySelector(".item-price .quantity");
const totalPriceNode = document.querySelector(".item-price .total");
const deleteCartItem = document.querySelector(".delete-item");
const checkoutBtn = document.querySelector(".checkout-btn");
const cartForm = document.querySelector(".cart form");
const modalOpener = document.querySelector(".gallerySwiper");
const closeModal = document.querySelector(".modal-close");
const modal = document.querySelector(".gallery-modal");

const productPrice = 125;
let cartQuantity = +cartQuantityNode.value;

// cart showing and updating
cartToggler.addEventListener("click", () => {
  cartContent.classList.toggle("show");
});

deleteCartItem.addEventListener("click", () => {
  cartQuantity = 0;
  updateCartDom();
});

cartForm.addEventListener("submit", (e) => {
  e.preventDefault();
  cartQuantity += +cartForm.quantity.value;
  updateCartDom();
});

const updateCartDom = () => {
  // For hiding on empty
  emptyMsg.style.display = cartQuantity === 0 ? "block" : "none";
  cartItemNode.style.display = cartQuantity === 0 ? "none" : "grid";
  cartQuantityBadge.style.display = cartQuantity === 0 ? "none" : "block";
  checkoutBtn.style.display = cartQuantity === 0 ? "none" : "block";

  // For updating price and badge
  cartQuantityBadge.innerText = cartQuantity;
  quantityPriceNode.innerText = `$${productPrice} x ${cartQuantity}`;
  totalPriceNode.innerText = `$${productPrice * cartQuantity}`;
};
updateCartDom();

// Navbar toggling on mobile device
burger.addEventListener("click", () => {
  mainNav.classList.add("show");
});

close.addEventListener("click", () => closeNav());
mainNav.addEventListener("click", () => closeNav());
// Preventing closing nav when clicking on nav link area
mainNav
  .querySelector(".header__main-nav")
  .addEventListener("click", (e) => e.stopPropagation());

const closeNav = () => {
  mainNav.classList.remove("show");
};

// Modal
modalOpener.addEventListener("click", () => modal.classList.add("show"));
closeModal.addEventListener("click", () => modal.classList.remove("show"));

// Cart quantity update
increase.addEventListener("click", () => {
  cartQuantityNode.value = +cartQuantityNode.value + 1;
});

decrease.addEventListener("click", () => {
  if (cartQuantityNode.value > 1)
    cartQuantityNode.value = +cartQuantityNode.value - 1;
});

// Swiper slider config
const thumbSwiper = new Swiper(".thumbSwiper", {
  spaceBetween: 20,
  slidesPerView: 4,
});
const gallerySwiper = new Swiper(".gallerySwiper", {
  spaceBetween: 20,
  allowTouchMove: false,
  navigation: {
    nextEl: ".gallerySwiperContainer .swiper-button-next",
    prevEl: ".gallerySwiperContainer .swiper-button-prev",
  },
  thumbs: {
    swiper: thumbSwiper,
  },
  rewind: true,
});

// Modal swiper
const modalThumbSwiper = new Swiper(".modalThumbSwiper", {
  spaceBetween: 20,
  slidesPerView: 4,
});
const modalGallerySwiper = new Swiper(".modalGallerySwiper", {
  spaceBetween: 20,
  allowTouchMove: false,
  navigation: {
    nextEl: ".modal-content .swiper-button-next",
    prevEl: ".modal-content .swiper-button-prev",
  },
  thumbs: {
    swiper: modalThumbSwiper,
  },
  rewind: true,
});
