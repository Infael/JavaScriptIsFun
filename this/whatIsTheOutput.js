window.name = "Mike Tyson";

const me = {
  name: "Tyler",
  sayName() {
    console.log(this.name);
  },
};

const sayName = me.sayName;
sayName();
