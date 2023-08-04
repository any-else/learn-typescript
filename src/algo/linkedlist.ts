//build mot kieu du kieu ll
interface INodeLL {
  data: any;
  pointer: INodeLL | null;
}

class NodeLinkedList implements INodeLL {
  data: any;
  pointer: INodeLL | null;
  constructor(data: any) {
    this.data = data;
    this.pointer = null;
  }
}

export class LinkedListData {
  private head: INodeLL | null;
  private tail: INodeLL | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //build ra nhung phuong thuc thang array minh cung co
  getHead(): INodeLL | null {
    if (this.head == null) {
      return null;
    }
    return this.head.data;
  }

  getTail(): INodeLL | null {
    if (this.head == null) {
      return null;
    }
    let tail = this.head;
    while (tail?.pointer != null) {
      tail = tail.pointer;
    }
    return tail.data;
  }

  //insertHead
  unshift(newData: any) {
    const newNode = new NodeLinkedList(newData);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    newNode.pointer = this.head;
    this.head = newNode;
  }

  //insertTail
  push(data: any) {
    if (this.head == null) {
      this.head = data;
      return;
    }
    let tail = this.head;
    while (tail?.pointer != null) {
      tail = tail.pointer;
    }
    tail.pointer = data;
    return this.head;
  }
  print() {
    //kiểm tra xem head có bị null hay không ?
    if (this.head == null) return;
    //tạo một giá trị mới để thực hiện việc hiện thị bằng việc trỏ tới các node
    //ví dụ array thì mình phải lặp qua từng phần tử
    //object thì đơn giản thì chấm tới là được
    let current = this.head;
    while (current?.pointer != null) {
      console.log(current.data);
      current = current.pointer;
    }
  }
}
