const mockAPIData = {
  items: [
    { id: 1, price: 100 },
    { id: 2, price: 200 }
  ]
};

class DataCache {
  constructor() {
    this.cache = new Map();
  }

  getData(key) {
    if (!this.cache.has(key)) {
      this.cache.set(key, mockAPIData);
    }
    return this.cache.get(key);
  }

  calculateTotal(data) {
    data.items.forEach(item => {
      item.price = item.price * 1.2;
    });
    return data;
  }
}

const cache = new DataCache();
const data = cache.getData('products');
const withTax = cache.calculateTotal(data);
console.log('Before tax calculation:', data.items[0].price);
console.log('With tax:', withTax.items[0].price);
