import Rx, { Observable, from, interval, take } from "rxjs";
const learnRxjs = () => {
  // function getDetail() {
  //   console.log("hello world, This is details");
  //   return 100;
  // }
  // getDetail();
  // const observable = new Observable(
  //   (observer: Rx.Observer<string | number>) => {
  //     console.log("Rxjs and Reactive Programming");
  //     observer.next(1);
  //     observer.next(2);
  //     observer.next(3);

  //     setTimeout(() => {
  //       observer.next(4);
  //       observer.complete();
  //     }, 1000);
  //   }
  // );

  // console.log("Before subscribe");
  // observable.subscribe({
  //   next: (data: number | string): void => {
  //     console.log("next" + data);
  //   },
  //   error: (err: any): void => {
  //     console.log("error", err);
  //   },
  //   complete: (): void => {
  //     console.log("complete");
  //   },
  // });
  // console.log("After subscribe");
  // //operator
  // const arr = [1, 2, 3, 4];
  // const fromArrayObservable = from(arr);
  // fromArrayObservable.subscribe((data: number) => {
  //   console.log("data", data);
  // });
  //cơ chế unsubscribe
  // const observable2 = new Observable((observer: Rx.Observer<number>) => {
  //   let value: number = 0;
  //   const intervalId = setInterval(() => {
  //     observer.next(value++);
  //   }, 1000);
  //   //handle canceling and disposing the  resource
  //   return function unsubscribe() {
  //     clearInterval(intervalId);
  //   };
  // });
  // const subscription = observable2.subscribe((data: number) => {
  //   console.log("data", data);
  // });
  // setTimeout(() => {
  //   subscription.unsubscribe();
  // }, 10000);

  //Subject
  /**
   * input mình sẽ khai báo ra nhiều loại Observable nhưng muốn observer1 chạy được 1,5s thì khi chạy thằng observer 2 thì nó sẽ lấy trực tiếp kết quả của observable1
   */
  console.log("start SUbject");
  const foo = interval(500).pipe(take(5));

  //c1
  class MutilObserver {
    private observers: Array<any> = [];

    constructor() {}
    addObserver(observer: any) {
      this.observers.push(observer);
    }

    next(data: number): void {
      this.observers.forEach((observer: any) => observer.next(data));
    }
    err() {
      this.observers.forEach((observer: any) => observer.err());
    }
    complete() {
      this.observers.forEach((observer: any) => observer.complete());
    }
  }
  const observers = new MutilObserver();

  const observer1 = {
    next: (data: number) => console.log("next one", data),
    error: (err: any) => console.log("error one", err),
    complete: () => console.log("complete one"),
  };
  const observer2 = {
    next: (data: number) => console.log("next second", data),
    error: (err: any) => console.log("error second", err),
    complete: () => console.log("complete second"),
  };

  observers.addObserver(observer1);

  foo.subscribe(observers);
  setTimeout(() => {
    observers.addObserver(observer2);
  }, 1500);
  /**
   * thì cách này đang không đáp ứng được cách hoạt động được như mong muốn.
   * Mong muốn => khi mà thực hiện thì sau 1,5s cái observer2 phải lấy kết quả từ thằng observer1 tức là sẽ share việc thực thi cho nhiều Observers được không ?
   *
   */
  //c1: không sử dụng cấu trúc Subject của Rxjs
};

export default learnRxjs;
