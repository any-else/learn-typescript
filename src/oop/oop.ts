import { type } from "os";
export const learnOOP = () => {
  //class Cha
  class Human {
    readonly body: string;
    public gender: string;
    protected nationality: string;

    constructor(body: string, gender: string, nationality: string) {
      this.body = body;
      this.gender = gender;
      this.nationality = nationality;
    }

    work(str: string) {
      return `Hiện tại đang làm công việc  ${str}`;
    }
    // set nationalityName(str: string) {
    //   this.nationality = str;
    // }

    findLove() {
      if (this.gender == "male") {
        return "Đi TÌm bạn gái ";
      } else {
        return "Đi TÌm bạn trai ";
      }
    }
  }

  //tính kế thừa

  //class Con
  class IdolGioiTre extends Human {
    name: string;
    age: number;
    viral: string;

    constructor(
      body: string,
      gender: string,
      nationality: string,
      name: string,
      age: number,
      viral: string
    ) {
      super(body, gender, nationality); //kế thừa lại toàn bộ thuộc tính của thằng cha
      this.name = name;
      this.age = age;
      this.viral = viral;
    }

    get nationalityName(): string {
      return this.nationality;
    }

    sayViral() {
      return this.viral;
    }
  }

  const buiVu = new IdolGioiTre(
    "185cm",
    "male",
    "Viet Nam",
    "Bui Vu",
    23,
    "Code nhu cai Database"
  );
  console.log("bui vu", buiVu.findLove());

  const nhan = new IdolGioiTre(
    "150cm",
    "female",
    "Viet Nam",
    "Thai Nhan",
    18,
    "Cho an cai feedback" || "Cho an cai db"
  );
  console.log("Nhan", nhan.findLove());
};

//Khuon mau

//4 tính chất
// kế thừa (inheritance)
// đóng gói (encapsulation) ==> phạm vi truy cập => access modifiers => public / private / protected / readonly
// đa hình (polymorphism) ==> cùng phuơng thức, có thể làm nhiều hành động khác nhau
// trừu tượng (abstraction) => ẩn đi những cái xử lý logic bên trong và chỉ show ra bên ngoài những cái chức năng dễ hiểu
// ===> thể hiện qua typescript như thế nào ?

export const learnInheritance = () => {
  class Animal {
    //khai bao thuoc tinh
    private type: string;
    //ham khoi tao
    constructor(type: string) {
      console.log("type", type);
      this.type = type;
    }
    set setType(type: string) {
      this.type = type;
    }

    get getType(): string {
      return this.type;
    }

    static sound() {
      console.log("tieng hu");
    }

    public eat() {
      console.log("an ga");
    }
    private hieulon() {
      console.log("hieu lon");
    }
    get hieuLon(): void {
      return this.hieulon();
    }
  }

  // console.log(Animal.eat());
  console.log(Animal.sound());

  //khoi tao
  const cat = new Animal("cat");
  cat.eat();
  cat.hieuLon;

  class Dog extends Animal {
    private name: string;
    private gender: string;
    constructor(type: string, name: string, gender: string) {
      super(type);
      this.name = name;
      this.gender = gender;
    }

    override eat() {
      console.log("an chicken");
    }
  }
  //khoi tao
  const dogNormal = new Dog("SD", "Huyed", "male");

  dogNormal.eat();
  dogNormal.getType;
};

export const learnAbstraction = () => {
  abstract class Rikkei {
    private taxCode: string;
    private stakeholders: any[];
    constructor(taxCode: string) {
      this.taxCode = taxCode;
      this.stakeholders = [
        { name: "Nguyen Van A", age: 23 },
        { name: "Nguyen Van B", age: 30 },
      ];
    }
    private showTaxCode() {
      console.log(`Rikkei Tax Code is ${this.taxCode}`);
    }
    abstract payTaxes(): void;
  }

  //khoi tao 1 doi tuong tu class
  // const nhanRikkei = new Rikkei("3000")

  //tinh nang thu 4
  class RikkeiHN extends Rikkei {
    private name: string;
    constructor(name: string) {
      super("override");
      this.name = name;
    }
    override payTaxes(): void {
      console.log("pay taxes");
    }
  }

  abstract class RikkeiDN extends Rikkei {
    private name: string;
    constructor(name: string) {
      super("hash"); // => cho phep su dung nhung method cua thang
      this.name = name;
    }

    override payTaxes(): void {}
  }

  //Interface
  interface ISales {
    name: string;
    sale: () => void;
  }
  interface IMarketing {
    name: string;
    marketing: () => number;
  }

  interface IWebDev extends IMarketing, ISales {
    age: string;
    dev: () => void;
  }

  class RK implements IWebDev {
    name: string;
    age: string;
    constructor(name: string, age: string) {
      this.name = name;
      this.age = age;
    }
    sale() {
      return "ss";
    }
    marketing(): number {
      console.log("marketing");
      return 1;
    }
    dev() {
      console.log("dev");
    }
  }
};
