/**
 * Declaration Merging trong TS là một tính năng cho phép bạn mở rộng
 * các khai báo của các đối tượng,hàm,lớp và các kiểu dữ liệu khác trong ts
 * . Được định nghĩa lại các khai báo đã tồn tại mà ko cần thay đổi mã nguồn gốc
 *  ==> Vì thế có thể mở rộng thư viện các module cơ bản mà ko cần sửa đổi mã nguồn
 * ví dụ 1: về mở rộng kiểu dữ liệu cho một thư viện
 *
 * declare module 'external-library' {
 *  function someFunction():void
 * }
 * 
 * VD2: mở rộng cho kiểu object 
 * interface Car {
  brand: string;
}

interface Car {
  model: string;
}

const bwm: Car = {
  brand: "BMW",
  model: "BMW",
}
 * VD3: Mở rộng cho phần module như là mở rộng một module để thêm hàm mới
* chỉ hỗ trợ namespaces 
  
  VD 4: về function: có thể mở rộng bằng cách khai báo lại kiểu hàm và thêm các thuộc tính mới 

*/
interface GreetFunction {
  (name: string): string;
}

interface GreetFunction {
  welcomeMessage: string;
}

const greet: GreetFunction = (name: string) => {
  return `${greet.welcomeMessage}, ${name}`;
};

greet.welcomeMessage = "Welcome";

const message = greet("Bui Van Vu");

// Mở rộng cho ENUM
enum Color {
  Red = "red",
  Green = "green",
}

enum Color {
  Blue = "blue",
}

const color: Color = Color.Blue;
