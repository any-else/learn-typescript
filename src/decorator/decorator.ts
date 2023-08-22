import { type } from "os";
/**
 *  @decorator
 *  là 1 tính năng mạnh mẽ và quan trọng. Nó cho phép bạn thêm metadata
 * hoặc gán làm thay đổi các chức năng vào các lớp phương thức và thuộc tính hoặc
 * các tham số của hàm. Thường để sửa đổi hành vi của các phần tử trong mã
 *
 *  Một số ứng dụng của decorator trong ts
 * => Xác thực người dùng
 * => Logging
 * => Xử lý lỗi
 * => Cache data
 * => Đo thời gian thực thi hàm
 */

// Ví dụ về thay đổi hành vi logger

export const learnDecorator = () => {
  //dinh nghia ham decorator logger để đưa ra thời gian thực thi hàm
  function logger(
    target: any,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    console.log("target", target); // đây là tham số đại diện cho đối tượng hoặc hàm mà decorator được áp dụng lên. Trong ví dụ này thì thằng này sẽ áp dụng với phương thức calc trong lớp Calc
    console.log("key", key); // đại diện cho tên phương thức hoặc hàm
    console.log("descriptor", descriptor); // tham số này đại diện cho đối tượng PropertyDescriptor của thuộc tính hoặc phương thức được áp dụng decorator, PropertyDescriptor chứa thông tin và phương thức để định nghĩa và thay đổi hành vi của thuộc tính hoặc phương thức
    /**
     *  nó chứa các thông tin và phương thức để định nghĩa và thay đổi hành vi của thuộc tính hoặc phương thức
     *  nó là 1 object chứa các thông tin và trạng thái
     * trong thằng descriptor nó chứa những thuộc tính và phương thức khác nhau như là
     * @value
     *  - Thuộc tính này chứa các giá trị ban đầu của phường thức hoặc thuộc tính
     *  - descriptor.value nó sẽ truy cập và lưu trữ giá trị ban đầu của phương thức
     * @writable
     *  - Thuộc tính naỳ xác định xem thuộc tính hoặc phương thức có thể ghi đè hay không. Mặc định là true
     * @enumerable
     *  - Thuộc tính này xác định xem thuộc tính hoặc phương thức có thể được cấu hình lại hay không. Mặc định vẫn sẽ là true
     *  @configurable
     *  - Thuộc tính xác định xem thuộc tính hoặc phương thức có thể được cấu hình lại hay không. Default vẫn là true
     *
     *  @get
     *  - Phương thức này sẽ trả về giá trị của thuộc tính khi nó được truy cập
     *  @set
     *  - thường được dùng khi mà mình thiết lập giá trị khi nó được gán
     */

    //trước khi muốn thay đổi hoặc ghi đè lại một phương thức của thằng mình sẽ áp dụng thằng decorator lên cái phương thức đấy
    //tại sao lại làm thế bới vì đơn giản là mình muốn mở rộng hoặc customer lại nó
    const originalMethod = descriptor.value;
    //tại bước trên mình sẽ lưu giá trị ban đầu của phương thức của phương thúc được áp dụng decorator vào một cái biến bất kỳ
    // sau đó mình sẽ custom hoặc chỉnh sửa thuộc tính hoặc thông qua cái thằng code ở dưới
    // rồi sử dụng biến đã gán để tham chiếu và gọi phương thức gốc trong hàm mới mà chúng ta đã chỉnh sửa ở trên

    console.log("originalMethod", originalMethod);
    console.log("writable", descriptor.writable);
    descriptor.value = function (...args: any[]) {
      //thời gian bắt đầu thực thi
      console.log("thời gian bắt đầu thực thi", new Date().toISOString());
      const result = originalMethod.apply(this, args);
      console.log("thời gian kết thúc lúc thực thi", new Date().toISOString());
      return result;
    }; //cái này đơn giản là mình sẽ mở rộng phạm vi phương thức theo ys muốn trong decorator thôi
    return descriptor;
  }

  //class su dung decorator
  class MathCalc {
    @logger
    add(a: number, c: number): number {
      return a + c;
    }
  }

  const cc = new MathCalc();

  console.log(cc.add(2, 4));

  //test chay type unknow
  const learnUnknown = (value: unknown) => {
    return typeof value === "string"
      ? value.toUpperCase()
      : "con cac du ma may";
  };
  const test1 = learnUnknown(34);
  console.log("test1", test1);
  // decorator với class
  //basic
  //decorator function
  function sealed(constructor: Function) {
    console.log("constructor", constructor);
    Object.seal(constructor);
    Object.seal(constructor.prototype);
  }

  //inint lớp cha
  class SealedClass {
    type = "report";
    title: string;
    constructor(title: string) {
      this.title = title;
    }
  }
  // logger
  function log(className: string) {
    return function (constructor: Function) {
      console.log(`Class ${className} has been instantiated.`);
    };
  }

  class LoggedClass {
    constructor() {
      console.log("LoggedClass contructor");
    }
  }

  // Decorator to make property uppercase
  function UppercaseProperty(target: any, propertyKey: string) {
    let value: any;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: any) {
      value = newVal.toUpperCase();
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }

  // Decorator to double parameter values
  function DoubleParam(
    target: any,
    methodName: string,
    parameterIndex: number
  ) {
    const originalMethod = target[methodName];

    target[methodName] = function (...args: any[]) {
      const paramValue = args[parameterIndex];
      args[parameterIndex] = paramValue * 2;
      return originalMethod.apply(this, args);
    };
  }

  class Example {
    @UppercaseProperty
    name: string = "";

    constructor(name: string) {
      this.name = name;
    }

    multiply(a: number, @DoubleParam b: number): number {
      return a * b;
    }
  }

  const instance = new Example("hello");
  console.log(instance.name); // Output: "HELLO"

  const result = instance.multiply(2, 3); // The second parameter (b) will be doubled to 6
  console.log("résult", result); // Output: 12

  /**
   * là 1 loại decorator trực tiếp lên class. Điều này cho phép bổ sung
   * các chức năng cũng như metadata vào class đó. Khi sử dụng decorator
   * vào class, nó sẽ thực thi một hàm mà bạn đã chỉ định, và mình có thể thực hiện thay đổi hoặc chú thích cho cái class đấy
   */

  //decorator với MetaData
  /**
   * là một gói thư viện giúp làm việc với metadata trong Javascript và Typescript
   * Metadata là các thông tin mô tả bổ sung về code, ví dụ như các thông tin hoặc decorator
   * Reflect-metadata cung cấp các API để đọc, ghi, xóa metadata một cách dễ dàng
   *
   * Một số API chính:
   *  - Reflecct.defineMetadata: định nghĩa metadata cho một thuộc tính
   *  - Reflect.getMetadata: đọc metadata của một thuộc tính
   *  - Reflect.getOWnMetadata: Đọc metadata được định nghĩa trực tiếp trên một thuộc tinhs
   *  - Reflect.hasMetadata: Kiêm tra xem 1 thuộc tính có tồn tại hay không
   *  - Reflect.deleteMetadata: Xóa metadata của một thuộc tính
   * Các decorator trong ts cho phép chúng ta định nghĩa metadata đã định nghĩa hay không ?
   *
   */
};
