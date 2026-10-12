// The calculateTotal method changes the cached data in place,
// so the “before tax” price becomes 120 instead of staying at 100.
// Return a new object with new item objects to keep the original data intact.

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
    const newData = {
      items: data.items.map(item => ({
        ...item,
        price: item.price * 1.2
      }))
    };
    return newData;
  }
}

const cache = new DataCache();
const data = cache.getData('products');
const withTax = cache.calculateTotal(data);
console.log('Before tax calculation:', data.items[0].price);
console.log('With tax:', withTax.items[0].price);
