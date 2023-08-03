/**
 * phân tích vấn đề
 */

interface IStudent {
  studentId: number;
  studentName: string;
  sex: boolean;
  className: string;
  age: number;
  address: string;
  inputData: () => void;
  displayData: () => void;
}

class Student {
  private studentId: number;
  private studentName: string;
  private sex: boolean;
  private className: string;
  private age: number;
  private address: string;

  constructor(
    studentId: number,
    studentName: string,
    sex: boolean,
    className: string,
    age: number,
    address: string
  ) {
    this.studentId = studentId;
    this.studentName = studentName;
    this.sex = sex;
    this.className = className;
    this.age = age;
    this.address = address;
  }

  // Getter and setter methods
  getStudentId(): number {
    return this.studentId;
  }

  setStudentId(studentId: number): void {
    this.studentId = studentId;
  }

  getStudentName(): string {
    return this.studentName;
  }

  setStudentName(studentName: string): void {
    this.studentName = studentName;
  }

  getSex(): boolean {
    return this.sex;
  }

  setSex(sex: boolean): void {
    this.sex = sex;
  }

  getClassName(): string {
    return this.className;
  }

  setClassName(className: string): void {
    this.className = className;
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number): void {
    this.age = age;
  }

  getAddress(): string {
    return this.address;
  }

  setAddress(address: string): void {
    this.address = address;
  }

  // Method to input data
  inputData(
    studentId: number,
    studentName: string,
    sex: boolean,
    className: string,
    age: number,
    address: string
  ): void {
    this.studentId = studentId;
    this.studentName = studentName;
    this.sex = sex;
    this.className = className;
    this.age = age;
    this.address = address;
  }

  // Method to display data
  displayData(): void {
    console.log("Student ID:", this.studentId);
    console.log("Student Name:", this.studentName);
    console.log("Sex:", this.sex ? "Male" : "Female");
    console.log("Class Name:", this.className);
    console.log("Age:", this.age);
    console.log("Address:", this.address);
  }
}

class StudentManager {
  static studentList: Student[] = [];
  static createStudent(student: Student): void {
    StudentManager.studentList.push(student);
  }
  static updateStudent(student: Student, dataUpdate: IStudent): void {
    const index = StudentManager.studentList.findIndex(
      () => student.getStudentId() === dataUpdate?.studentId
    );
  }
  static showAllStudent(): void {
    StudentManager.studentList.forEach((item) => {
      item.displayData();
    });
  }
  static deleteStudent(studentId: number): void {
    StudentManager.studentList = StudentManager.studentList.filter(
      (item) => item.getStudentId() !== studentId
    );
  }
}

function generateRandomId(): string {
  return Math.random().toString(36).substr(2, 8);
}
let option: any = prompt(
  "Enter the option: C - Create, R - Read, U - Update, D - Delete, E - Exit, Q- CUt"
);
while (option !== "Q") {
  switch (option) {
    case "C":
      const studentId: number | string =
        prompt("Enter student ID: ") ?? generateRandomId();
      const studentName: string = prompt("Enter student name: ") ?? "";
      const sex: boolean =
        prompt("Enter student sex male or female: ") === "male" ? true : false;
      const className: string = prompt("Enter class name: ") ?? "";
      const age: number = parseInt(prompt("Enter student age: ") as any) ?? 18;
      const address: string = prompt("Enter student address: ") ?? "";
      const student: Student = new Student(
        Number(studentId),
        studentName,
        sex,
        className,
        age,
        address
      );
      StudentManager.createStudent(student);
      StudentManager.showAllStudent();
      break;
    default:
      alert("tuoi ngan con");
      break;
  }
  option = prompt(
    "Enter the option: C - Create, R - Read, U - Update, D - Delete, E - Exit, Q- CUt"
  );
}
