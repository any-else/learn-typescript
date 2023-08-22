interface Person {
  name: string;
  age: number;
  speak: () => number;
}
const obj: Person = {
  name: "khoa",
  age: 23,
  speak: () => {
    console.log("aaaa");
    return 1;
  },
};

class Huy implements Person {
  name: string;
  age: number;
  speak: () => number;
  constructor(name: string, age: number, callback: () => number) {
    this.name = name;
    this.age = age;
    this.speak = callback;
  }
}
const calcTotal = () => {
  return 1;
};

const obj1 = new Huy("khoa", 23, calcTotal);

type Test1 = string | number;

type Test2 = {
  name: string;
  age: number;
};

type Func = (a: string) => string[];

const test2 = (str: string): string[] => {
  return ["a"];
};

const test: Func = (str: string) => {
  return ["khoa", "vu"];
};

//  đinh nghĩa kiểu dữ liệu và ràng buộc cho thuộc tính hoặc đối tượng và trả dữ liệu tương ứng
