function Product(name, price, number) {
  this.name = name;
  this.price = price;
  this.number = number;
}

function ProductProto() {
  this.showInfo = function () {
    return (
      this.name + " price " + this.price + " uah" + " available " + this.number
    );
  };
  this.setSaleToPrice = function (value = 0) {
    this.price -= value;
    if (this.price < 0) {
      this.price = 0;
    }
    return this.price;
  };
  this.byAmountProduct = function (amount) {
    if (amount < 0) {
      return null;
    }
    if (amount <= this.number) {
      this.number -= amount;
      return amount * this.price;
    }
    return null;
  };
}

Product.prototype = new ProductProto();

const product1 = new Product("water", 15, 20);

console.log(product1.byAmountProduct());
console.log(product1.showInfo());
