import { type } from "os";

console.log("hello world");

/*
datatype: tuong minh (nguyen thuy) => string, number, boolean, undefined, null, symbol
          reference type(tham chieu) => object, function, array 

          ==> any, unknown, never, mapType 
*/

//Explicit type => khai bao kieu du lieu tuong minh
// const fullName: string = "Dong Bong";
// const age: number = 20;
// const isGender: boolean = true;
// //Infered types => ngam dinh hieu kieu du lieu

// const fullName2 = "Dong Bo";
// let fullName3 = "Dong Bao";

//static checking type
// let fullName;

// fullName = "aaaa";

// console.log("fullName", fullName);

//so sanh kieu du lieu

// const age: number = 23;
// const age2: number = 23;

// console.log("kiem tra", age == age2);

// const student: object = {
//   name: "Tran Dang Khoa",
//   age: 29,
// };

// console.log("student", student);

// const numberList: Array<any> = [1, 2, 3, 4, 5, 6];

// console.log("numberList", numberList);

// const inCreasingNumber = (n: number): boolean => {
//   let isCheck: boolean = true;
//   //logic code

//   return isCheck;
// };

//xac dinh input la gi outpuconst findTwoSum = (arr: number[], target: number): number[] => {
//   const numberObj: {
//     [key: number]: number;
//   } = {};
//   for (let i = 0; i < arr.length; i++) {
//     const complement = target - arr[i];

//     if (complement in numberObj) {
//       console.log("target", target);
//       return [numberObj[complement], i];
//     }
//     numberObj[arr[i]] = i;
//     console.log("object", numberObj);
//   }
//   return [];
// };

// const nums = [11, 7, 2, 15];

// const target = 9;
// const result = findTwoSum(nums, target);
// console.log(result);t ra sao ==> xu ly minh ap dung nhung cai gi

//

//solution 2
// const findTwoSum = (arr: number[], target: number): number[] => {
//   const numberMap = new Map<number, number>();
//   for (let i = 0; i < arr.length; i++) {
//     const complement = target - arr[i];
//     if (numberMap.has(complement)) {
//       return [numberMap.get(complement)!, i];
//     }
//     numberMap.set(arr[i], i);
//   }
//   return [];
// };

// const nums = [11, 7, 2, 15];

// const target = 9;
// const result = findTwoSum(nums, target);
// console.log(result);

//Bai Tap TwoSum

//hiểu và phân tích vấn đề

//input : nums= [] => số nguyên, không được trùng nhau , tagert =>kết quả của tổng bất kỳ trong mảng nums

//output: [] => gồm chỉ số => chỉ mục index của mảng nums
// vi du Input: nums = [2,7,11,15], target = 9
// const twoSum = (nums: number[], target: number): number[] => {
//   const objNumber: {
//     [key: number]: number;
//   } = {};
//   //anh toi memory
//   // {
//   //   2: 0
//   // }
//   for (let i = 0; i < nums.length; i++) {
//     const resultNumber = target - nums[i]; // =2
//     if (resultNumber in objNumber) {
//       return [objNumber[resultNumber], i];
//     }
//     objNumber[nums[i]] = i;
//   }
//   return [];
// };

// console.log(twoSum([2, 11, 15, 7], 9));

// chua bai 2
// const isCheckMatchingBrackets = (str: string): boolean => {
//   const stack: string[] = [];
//   const openingBrackets = ["(", "[", "{"];
//   const closingBrackets = [")", "]", "}"];
//   for (let i = 0; i < str.length; i++) {
//     if (openingBrackets.includes(str[i])) {
//       stack.push(str[i]);
//     } else if (closingBrackets.includes(str[i])) {
//       const matchBrackets = openingBrackets[closingBrackets.indexOf(str[i])];
//       if (stack.length === 0 || stack.pop() !== matchBrackets) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// };

// console.log(isCheckMatchingBrackets("({}[)]"));

// const checkPalindrome = (str: string): boolean => {
//   str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const reversedStr = str.split("").reverse().join("");

//   if (str === reversedStr) {
//     return true;
//   }
//   return false;
// };

// console.log(checkPalindrome(" man, a plan, a canal: Panama"));

//bai so 5

// const findSubArrayNumber = (listNumber: number[]): number => {
//   let max = listNumber[0];
//   let subMax = listNumber[0]; //=0
//   for (let i = 1; i < listNumber.length; i++) {
//     max = Math.max(0, max + listNumber[i]);
// //     subMax = Math.max(subMax, max);
// //   }
// //   return subMax;
// // };

// // console.log(findSubArrayNumber([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// //Type Tuple
// // let vu: [string, number];

// // vu = ["bui van vu", 227];
// // vu.push("hieu danh lol");
// // console.log(vu);

// // Type Alias - Interface
// //truoc kia
// let age: number = 23;
// let fullName: string = "Dong Bong";

// let car: {
//   [key: string]: any;
// } = {
//   name: "BMW",
//   color: "red",
// };

// //type alias
// type Student = string;

// let student: Student = "Dong Bong";

// type Car = {
//   name: string;
//   model: number;
//   color: string;
// };

// type ListCar = Car[];

// let bmw: Car = {
//   name: "BMW",
//   model: 2020,
//   color: "red",
// };

// const listCarBMW: ListCar = [{ name: "BWM 02", model: 1, color: "red" }];

// //Basic Type Interface

// interface IPerson {
//   name: string;
//   age: number;
// }

// const nhan: IPerson = {
//   name: "Dong Bong",
//   age: 23,
// };

// const listStudent: IPerson[] = [
//   { name: "Dong Bong", age: 23 },
//   { name: "Huyml", age: 21 },
//   nhan,
// ];

// console.log("listStudent", listStudent);

// //Union Type
// // const phone: string | number | boolean = true;

// // khi ma su dung o type alias

// type Phone = string | number;

// const phone: Phone = 2920;

// // enum

// // khi rang buoc data 1 chieu
// //ENUM number => 0, 1, 2, 3, 4 => 2 chieu
// enum FetchData {
//   PENDING,
//   FULFILLED,
//   RESOLVED,
//   REJECTED,
// }

// console.log(FetchData[0]);
// console.log(FetchData.FULFILLED);
// //ENUM string  => 1 chieu
// enum TypeReturn {
//   SUCCESS = "SUCCESS",
//   ERROR = "ERROR",
// }

// console.log(TypeReturn["SUCCESS"]);

// type Person = {
//   name: string;
//   age?: number;
// };

// const printPerson = (name: string, age?: number | string): Person => {
//   return {
//     name,
//   };
// };
// printPerson("bui van vu");

// ==> tra ve kieu void
// ==> tra ve la number

//import

import { same } from "./algo/frequency-coutern.pattern";
import { same2 } from "./algo/frequency-coutern.pattern";
import { same3 } from "./algo/frequency-coutern.pattern";
//cach thuong
// console.log("same", same([1, 2, 1], [4, 4, 1]));

console.time("same");
same([1, 2, 1], [4, 4, 1]);
console.timeEnd("same");

// //cach frequency
console.log(same2([-1, -2, 1], [4, 1, 1]));
console.time("same2");
same2([-1, -2, 1], [4, 1, 1]);
console.timeEnd("same2");

console.time("same3");
same3([1, 2, 1], [4, 4, 1]);
console.timeEnd("same3");

//multiple-pointer

import { sumZero } from "./algo/multiple-pointer";
import { sumZero2 } from "./algo/multiple-pointer";

console.time("sumZero");
sumZero([
  -299, -90, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10, 298,
  3989, 9200,
]);
console.timeEnd("sumZero");

console.time("sumZero2");
sumZero2([
  -299, -90, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 10, 298,
  3989, 9200,
]);
console.timeEnd("sumZero2");

//sliding window

import { maxSumArr } from "./algo/sliding-windown";

const findLongStr = (str: string): number => {
  let maxLength = 0; //độ dài lớn nhất của một chuỗi
  let startStr = 0; //reset điểm chạy của một chuỗi con mới

  //khởi frequence
  const frequency = new Map();
  for (let i = 0; i < str.length; i++) {
    //check neu xuat hien phan tu trung lap
    if (frequency.has(str[i])) {
      startStr = frequency.get(str[i])! + 1;
    }
    //luu vao store => frequency
    frequency.set(str[i], i);
    maxLength = Math.max(maxLength, i - startStr + 1);
  }

  return maxLength;
};

console.log(findLongStr("thisisawesome"));
export const findLongestSubstring1 = (str: string): number => {
  let maxLength = 0; // Biến lưu độ dài chuỗi con dài nhất
  let left = 0; // Con trỏ bên trái của cửa sổ
  let right = 0; // Con trỏ bên phải của cửa sổ

  const uniqueChars = new Set<string>(); // Set để lưu các ký tự duy nhất trong cửa sổ

  while (right < str.length) {
    const char = str[right];

    if (!uniqueChars.has(char)) {
      // Nếu ký tự chưa tồn tại trong cửa sổ
      uniqueChars.add(char); // Thêm ký tự vào cửa sổ
      maxLength = Math.max(maxLength, uniqueChars.size); // Cập nhật độ dài chuỗi con dài nhất
      right++; // Di chuyển con trỏ bên phải sang phải
    } else {
      // Nếu ký tự đã tồn tại trong cửa sổ
      uniqueChars.delete(str[left]); // Xóa ký tự ở con trỏ bên trái khỏi cửa sổ
      left++; // Di chuyển con trỏ bên trái sang phải
    }
  }

  return maxLength; // Trả về độ dài chuỗi con dài nhất
};
export const findLongestSubstring = (str: string): number => {
  let maxLength = 0;
  let left = 0;
  let right = 0;
  const charMap = new Map<string, number>();

  while (right < str.length) {
    if (charMap.has(str[right]) && charMap.get(str[right])! >= left) {
      left = charMap.get(str[right])! + 1;
    }

    charMap.set(str[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
};

import { learnOOP } from "./oop/oop";

learnOOP();

function validAnagram(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) {
    return false;
  }

  const counter1: { [key: string]: number } = {};
  const counter2: { [key: string]: number } = {};

  for (let i = 0; i < s1.length; i++) {
    counter1[s1[i]] = (counter1[s1[i]] || 0) + 1;
    counter2[s2[i]] = (counter2[s2[i]] || 0) + 1;
  }

  for (const key in counter1) {
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("anagram", "naagram"));

import { learnInheritance } from "./oop/oop";

learnInheritance();

import { LinkedListData } from "./algo/linkedlist";

const linkedListStudent = new LinkedListData();

linkedListStudent.unshift(1);
linkedListStudent.unshift(2);
linkedListStudent.unshift(3);

console.log(
  "head cuả kiễu dữ liệu linkedlist này là: ",
  linkedListStudent.getHead()
);

console.log("get tail", linkedListStudent.getTail());

import { learnTypeAdvance } from "./type-advance/typeGuard";
learnTypeAdvance();
