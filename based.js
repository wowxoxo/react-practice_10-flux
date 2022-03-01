// methods chain
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi, ${this.name}`);
    return this;
  }

  sayBye() {
    console.log(`Bye, ${this.name}`);
    return this;
  }
}

let user = new User("Ivan");
user.sayHi().sayBye();

// class Sword {
//   hit()
//   sharpen()
// }

// function carrying

// f(a, b, c)
// f(a)(b)(c)
function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(4));

const curry1 = function (a) {
  return function (b) {
    return a + b;
  };
};

const curry2 = (a) => (b) => a + b + 7;

console.log(curry1(2)(5));
console.log(curry2(2)(5));

//

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function log(classObj, fn) {
  return function () {
    console.log("Execution of " + fn.name);
    let startTime = Date.now();
    sleep(3000);
    let val = fn.call(classObj);
    console.log("fn");
    let endTime = Date.now();
    let operationTime = endTime - startTime;
    console.log(operationTime);
    return val;
  };
}

class Book {
  constructor(name, ISBN) {
    this.name = name;
    this.ISBN = ISBN;
  }

  getBook() {
    return `${this.name} ${this.ISBN}`;
  }
}

let book1 = new Book("Alice in Wonderland", 111);
let getBook = log(book1, book1.getBook);
console.log(getBook());
