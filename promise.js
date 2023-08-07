const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const message = "Promise is rejected after 2 seconds!";
    reject(message);
  }, 2000);
});

myPromise.catch((result) => {
  console.log("result:", result);
});

var myObject = {
  name: "bar",
  foo: function () {
    var self = this;
    console.log(this.name);
    console.log(self.name);
    const koo = () => {
      console.log(this.name);
      console.log(self.name);
    };
    koo();
  },
};
myObject.foo();
