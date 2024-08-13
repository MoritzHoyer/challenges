// array of spices as test case:
const products = [
  { name: "Saffron", price: 50 },
  { name: "Cinnamon", price: 6 },
  { name: "Cardamom", price: 12 },
  { name: "Turmeric", price: 9 },
  { name: "Paprika", price: 4 },
  { name: "Garam Masala", price: 10 },
  { name: "Vanilla Bean", price: 15 },
  { name: "Coriander", price: 6 },
];

// Create the calculateTotalPrice function and initialize totalPrice to 0
function calculateTotalPrice(products, extractPrice) {
  let totalPrice = 0;

  // Loop through array and use callback to extract price
  for (const product of products) {
    const price = extractPrice(product);

    // Add extracted price to totalPrice
    totalPrice += price;
  }

  // Return total price
  return totalPrice;
}

// Create extractPrice function and return price of the product
function extractPrice(product) {
  return product.price;
}

// Use the calculateTotalPrice function
const totalPrice = calculateTotalPrice(products, extractPrice);

// Print total price
console.log(totalPrice);
