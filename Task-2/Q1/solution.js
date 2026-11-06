class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getDetails() {
    return `${this.name} - Price: $${this.price}, Quantity: ${this.quantity}`;
  }

  calculateTotal() {
    return this.price * this.quantity;
  }

  displayInfo() {
    console.log(this.getDetails());
    console.log(`Total value: $${this.calculateTotal()}`);
  }
}

class ElectronicProduct extends Product {
  constructor(name, price, quantity, warrantyYears) {
    super(name, price, quantity);
    this.warrantyYears = warrantyYears;
  }

  getDetails() {
    return `${this.name} - Price: $${this.price}, Quantity: ${this.quantity}, ` +
      `Warranty: ${this.warrantyYears} year(s)`;
  }
}

const generalProduct = new Product("Notebook", 5, 10);

const electronicProduct = new ElectronicProduct("Laptop", 900, 2, 2);

console.log("General Product:");
generalProduct.displayInfo();

console.log("\nElectronic Product:");
electronicProduct.displayInfo();

console.log("\nInheritance check:");
console.log(
  `Laptop total value: $${electronicProduct.calculateTotal()}`
);
