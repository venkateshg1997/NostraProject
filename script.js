const products = [
  { name: "Men's Jacket", category: "men" },
  { name: "Women's Dress", category: "women" },
  { name: "Leather Belt", category: "accessories" },
  { name: "Men's Shoes", category: "men" },
  { name: "Women's Handbag", category: "women" },
  { name: "Sunglasses", category: "accessories" },
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function displayProducts(filteredProducts) {
  productList.innerHTML = "";

  if (filteredProducts.length === 0) {
    const message = document.createElement("div");
    message.className = "no-results";
    message.textContent = "No items available.";
    productList.appendChild(message);
    return;
  }

  filteredProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.textContent = product.name;
    productList.appendChild(div);
  });
}

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filtered = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  displayProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);


displayProducts(products);
