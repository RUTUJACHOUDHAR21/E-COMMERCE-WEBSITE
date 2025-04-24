function addToCart() {
  const quantity = document.getElementById("quantity").value;
  const confirmation = document.getElementById("confirmation");

  confirmation.textContent = `Added ${quantity} item(s) to cart!`;
}
