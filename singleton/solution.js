// this.instance is an instance property instead of a static property,
// causing it to be undefined every time a new instance is created,
// failing to enforce the singleton pattern.
// To fix this, we should use a static property instead:

class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.value = Math.random();
    Singleton.instance = this;
    return this;
  }

  getValue() {
    return this.value;
  }
}

