const products = [
  { name: "Laptop", price: 850 },
  { name: "Headphones", price: 75 },
  { name: "Keyboard", price: 45 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 220 }
];

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

const productNames = products.map((product) => product.name);

const expensiveProducts = products.filter((product) => product.price > 50);

const totalPrice = products.reduce((total, product) => total + product.price, 0);

const productsContainer = document.querySelector("#products");
productsContainer.innerHTML = products
  .map(
    (product) => `
      <div class="product">
        <h3>${product.name}</h3>
        <p>Price: <strong>${currency.format(product.price)}</strong></p>
      </div>
    `
  )
  .join("");

document.querySelector("#mapped-products").innerHTML = productNames
  .map((name) => `<span>${name}</span>`)
  .join("");

document.querySelector("#filtered-products").innerHTML = expensiveProducts
  .map(
    (product) =>
      `<span>${product.name} - ${currency.format(product.price)}</span>`
  )
  .join("");

document.querySelector("#total-price").textContent = currency.format(totalPrice);
