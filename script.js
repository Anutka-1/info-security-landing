document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Дякуємо! Ваше повідомлення надіслано.";
  this.reset();
});
