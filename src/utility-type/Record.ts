//Record<Keys, Type>
//công dụng của nó là gì: đơn giản hiểu biến tập hợp các Keys truyền vào làm key của một obj mới
// keys: tập các kiểu chuỗi nào đó được viết theo union type
// Type: hiểu interface => value của obj

export const learnRecord = () => {
  interface ICar {
    model: string;
    color: string;
    price: number;
  }

  type Supplier = "bmw" | "mec" | "audi";
  //demo Class
  class Car implements ICar {
    model: string;
    color: string;
    price: number;
    constructor(model: string, color: string, price: number) {
      this.model = model;
      this.color = color;
      this.price = price;
    }

    printInfo(obj: Record<Supplier, ICar>) {
      console.log(obj);
    }
  }
  const carSmall = new Car("BMW", "red", 200);

  carSmall.printInfo({
    bmw: { model: "BMW", color: "red", price: 200 },
    mec: { model: "BMW", color: "red", price: 200 },
    audi: { model: "BMW", color: "red", price: 200 },
  });
};

//Overload
//khai báo
// Hàm add nhận 2 tham số number và trả về number
function add(a: number | string, b: number): number;

// Hàm add nhận 2 tham số string và trả về string
function add(a: string, b: string): string;

// Hàm add nhận 3 tham số string và trả về string

// Phương thức chung cho cả ba trường hợp
function add(a: any, b: any) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
