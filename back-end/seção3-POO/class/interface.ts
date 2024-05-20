interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
};

class MyClass implements MyInterface {

  constructor(public myNumber: number) { }

  myFunc(myParam: number): string {
    return `myNumber + myParam: ${this.myNumber + myParam}`;
  }
}

const newObject = new MyClass(2);
console.log(newObject.myNumber);
console.log(newObject.myFunc(4));