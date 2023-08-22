// Partial sẽ tạo ra định dạng kiểu dữ liệu mới và biến tất cả thành optional
// Partial<Type>
// Partial là key word
//Type chính là định  dạng kiểu => interface

export const learnUtilityType = () => {
  interface ICar {
    model: string;
    color: string;
    price: number;
  }

  //demo class
  class Car implements Partial<ICar> {
    model: string;
    // color: string;
    price: number;
    constructor(model: string, price: number) {
      this.model = model;
      // this.color = color;
      this.price = price;
    }
  }
  //demo function
  const car = (car: ICar, carOption: Partial<ICar>) => {
    return {
      ...car,
      ...carOption,
    };
  };

  car({ model: "BMW", price: 200, color: "red" }, { color: "blue" });
};
