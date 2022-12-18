const testFun = () => {
  console.log(999);
};

class A {
  constructor() {
    console.log("classA");
  }
}

class C {
  constructor() {
    console.log("classC");
  }
}

const newArray = Array.from({ 0: "a", 1: "b", length: 2 });
