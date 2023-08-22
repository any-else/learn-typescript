export const learnTypeAdvance = () => {
  interface IHome {
    name: string;
    address: string;
    price: number;
  }

  const vinHome: IHome = {
    name: "Vinhome",
    address: "Ha Noi",
    price: 10,
  };

  const age: number = 18;
  console.log("home", typeof vinHome);
  console.log("age", typeof age);

  class Home implements IHome {
    name: string;
    address: string;
    price: number;
    constructor(name: string, address: string, price: number) {
      this.name = name;
      this.address = address;
      this.price = price;
    }
  }

  class Hotel implements IHome {
    name: string;
    address: string;
    price: number;
    constructor(name: string, address: string, price: number) {
      this.name = name;
      this.address = address;
      this.price = price;
    }
  }

  const vinCity = new Home("VinCity", "Ha Noi", 30000000);
  const hotel = new Hotel("BW hotel", "Ha Noi", 700000);

  type House = Home | Hotel;
  const house1: House = vinCity;
  const house2: House = hotel;

  function isCheckHouse(instance: House) {
    if (instance instanceof Hotel) {
      return console.log("check", true);
    }
    console.log("check", false);
  }
  isCheckHouse(house2);
  console.log(
    "vincity có được khởi tạo từ class HOme hay không ?",
    vinCity instanceof Home
  );

  //in
  interface ITodo {
    id: number;
    name: string;
    completed: boolean;
  }

  const todo: ITodo = {
    id: 1,
    name: "Dong Bong",
    completed: true,
  };

  console.log("huyll" in todo ? "dung roi t true" : "t false");
  console.log("check ", todo.hasOwnProperty("id"));

  // ép kiểu dữ liệu type casting
  //generics
  //as
  for (let key in todo) {
    type T = keyof ITodo;
    /**
     * tạo 1 cái type chứa toàn bộ cái thuộc tính của một object gồm id , name, completed
     * type T = id | name | completed
     */
    console.log(todo[key as T]);
  }

  // ? and ??
  interface IMacBook {
    name: string;
    price: number;
    os: string;
    color?: string; //có hoặc là không (optional chaining)
  }
  let priceLaptop: number | null | undefined | boolean = 400000;
  const macBookAir: IMacBook = {
    name: "macBookAir2017",
    price: priceLaptop ?? 20000000, //nullish coalescing chỉ tính trường hợp null or undefined
    os: "macOS",
  };

  console.log(macBookAir?.color);
};
