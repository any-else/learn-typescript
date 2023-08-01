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
