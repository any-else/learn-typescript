/**
 *  Generics: đơn giản hiểu là kiểu dữ liệu nhận vào một tham số và trả về kiểu dữ liệu tương
 * ứng
 *
 * được thể hiện qua dấu <>
 *
 *
 */

//ví dụ

interface IStudents {
  id: number | string;
  name: string;
  className: string;
  age: number;
}
//cách thông thường
const ListStudent: IStudents[] = [
  { id: 1, name: "khoa", className: "A", age: 23 },
  { id: 1, name: "khoa", className: "A", age: 23 },
];

//cách generics
let ListStudent2: Array<IStudents> = [
  { id: 1, name: "khoa", className: "A", age: 23 },
  { id: 1, name: "khoa", className: "A", age: 23 },
];

// type ListAny= <number | string>(3, "bui van vu");

const numberList: Array<number | string> = [1, 2, 3, 4, 5, ""];
const stringList: Array<string> = ["a", "b", "c", "d"];

const configList: Array<"abc" | "cba"> = ["abc", "cba"];
interface Test2 {
  gender: string;
}

interface Test {
  id: number;
  age: number;
}

function calculate<T, K>(val1: T, val2: K): any {
  return [
    {
      id: val1 as number,
      age: {
        ...val2,
        id: 2,
        age: 19,
      },
    },
  ];
}
calculate(1, ["abc", "hap"]);

export function studentList<T, K>(name: T, age: K) {
  console.log(name, age);
  console.log(typeof name, typeof age);
}

studentList<string, number>("bui van vu", 23);

studentList<boolean, null>(true, null);

studentList<Array<number>, string>([1, 2, 4], "bui van vu");
studentList<Array<number> | number, string>([1, 2, 4], "bui van vu");

//is sử dụng để kiểm tra biến có thuộc vào kiểu dữ liệu đó không ?
//return to boolean
