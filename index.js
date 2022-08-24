class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
   
    toText() {
      console.log(
        `${this.name} ${this.price} € in total. ${this.containedVAT()} (16%)`
      );
    }
    containedVAT() {
      // console.log(`${(this.price * 0.16).toFixed(2)} € VAT incl.`);
      return `${(this.price * 0.16).toFixed(2)} € VAT incl.`;
    }
  }
  const tracksuit = new Product("Adidas tracksuit", 150.0);
  const shoes = new Product("Puma running shoes", 85.99);
  const socks = new Product("Socks set", 4.99);
  const tshirt = new Product("T-Shirt", 11.99);
  tracksuit.toText(); // Adidas tracksuit 150.00 € in total. 24.00 € VAT incl. (16%).
  shoes.toText();
  socks.toText();
  tracksuit.toText();
  tracksuit.containedVAT();
  // tracksuit.containedVAT(); // 24.00 € VAT incl.
  console.log(`------------------------------------`);
  // Part 2
  class Cart {
    constructor() {
      this.products = [];
    }
    addProduct(shoppedProduct) {
      if (shoppedProduct instanceof Product) {
        this.products.push(shoppedProduct);
        console.log(`amount of products in the cart: ${this.products.length}`);
      } else {
        console.log(`The product is not available in the shop`);
      }
    }
    getProductInfoCart() {
      this.products.forEach((item) => {
        // console.log(item);
        item.toText();
      });
    }
    getTotalItemsPrice() {
      const total = this.products
        .reduce((acc, item) => (acc += item.price), 0)
        .toFixed(2);
      console.log(`The total amount is ${total}`);
    }
  }
  // acc= acc + item.price
  const cart1 = new Cart();
  // console.log(cart1);
  cart1.addProduct(shoes);
  cart1.addProduct(socks);
  cart1.addProduct(tracksuit);
  cart1.addProduct(123);
  console.log(`------------------`);
  cart1.getProductInfoCart();
  // console.log(cart1);
  // const cart1 = new Cart();
  // console.log(cart1);
  console.log(`------------------`);
  cart1.getTotalItemsPrice();
  console.log(`----------------------------------`);
  const cart = new Cart();
  cart.addProduct("potato"); // This is not available in our
  cart.addProduct(tracksuit); // Your shopping cart now
  cart.addProduct(shoes); // Your shopping cart now contains 2 products
  cart.addProduct(socks); // Your shopping cart now contains 3 products
  cart.addProduct(tshirt); // Your shopping cart now contains 3 products
  cart.getProductInfoCart();
  cart.getTotalItemsPrice();
  
  
  
  
  
  
  
  
  
  
  
  