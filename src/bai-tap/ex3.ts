class Product {
  private id: number;
  private name: string;
  private price: number;
  private quantity: number;

  constructor(id: number, name: string, price: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getQuantity(): number {
    return this.quantity;
  }

  setInputData(): void {
    this.id = Number(prompt("Enter the product ID:"));
    this.name = prompt("Enter the product name:") ?? "";
    this.price = Number(prompt("Enter the product price:"));
    this.quantity = Number(prompt("Enter the product quantity:"));
  }

  displayData(): void {
    console.log("--------------");
    console.log("Id: " + this.id);
    console.log("Name: " + this.name);
    console.log("Price: " + this.price);
    console.log("Quantity: " + this.quantity);
    console.log("--------------");
  }
}

class Bakery {
  private products: Product[];

  constructor() {
    this.products = [];
  }

  createProduct(): void {
    const product = new Product(0, "", 0, 0);
    product.setInputData();
    this.products.push(product);
  }

  updateProduct(id: number): void {
    const product = this.findProductById(id);
    if (product) {
      product.setInputData();
    } else {
      console.log("Product not found.");
    }
  }

  showAllProducts(): void {
    for (const product of this.products) {
      product.displayData();
    }
  }

  deleteProduct(id: number): void {
    const index = this.products.findIndex((product) => product.getId() === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      console.log("Product deleted.");
    } else {
      console.log("Product not found.");
    }
  }

  private findProductById(id: number): Product | undefined {
    return this.products.find((product) => product.getId() === id);
  }
}
