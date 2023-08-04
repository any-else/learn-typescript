// &&
// &

import { type } from "os";

//  | , ||
//đôi với interface
interface IStudent1 {
  id: number | string;
  name: string;
  className: string;
}

interface ITeacher {
  id: number | string;
  name: string;
  age: number;
}
interface IBusinessman {
  work: string;
}

type Human = IStudent1 & ITeacher & IBusinessman;
interface Person extends ITeacher, IBusinessman {
  name: string;
}

const nhan: Human = {
  id: 1,
  name: "Dong Bong",
  age: 23,
  className: "A",
  work: "teacher",
};

// đối type có kiểu dữ liệu nguyên thủy thì sẽ lấy điểm giao

type ICar = number | string;

type ISupplier = number | boolean;

type ICarSupplier = ICar & ISupplier;

const bmw: ICarSupplier = 200;
