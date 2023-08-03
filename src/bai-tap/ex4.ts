//Xây dựng ra một cấu trúc dữ liệu linked list nheeyf
interface INode {
  data: any;
  next: INode | null;
}
class NodeLL implements INode {
  data: any;
  next: INode | null;
  constructor(data: any, next?: INode | null) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  private head: INode | null;
  private tail: any;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  get getHead(): INode | null {
    return this.head;
  }
  get getTail(): any {
    if (this.head == null) {
      return null;
    }

    this.tail = this.head;
    while (this.tail?.next != null) {
      this.tail = this.tail.next;
    }
    return this.tail;
  }

  insertHead(newData: any) {
    const newNode = new NodeLL(newData);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }
  //build ra được những hàm tương tự thằng array

  indexOf(data: any) {
    if (this.head == null) {
      return -1;
    }
    let current = this.head;
    let index = 0;
    while (current != null) {
      if (current.data == data) return index;
      index++;
      current = current.next as any;
    }
    return -1;
  }
  //nhu 1 callback
  find(callback: (data: any, index?: number) => boolean) {
    if (this.head == null) {
      return null;
    }
    let current = this.head;
    let index = 0;
    while (current != null) {
      if (callback(current.data, index)) return current.data;
      index++;
      current = current.next as any;
    }
  }
  //insert to tail
  push(data: any) {
    const newNode = new NodeLL(data);
    if (this.head == null) {
      this.head = newNode;
      return;
    } else {
      const tail = this.getTail();
      tail.next = newNode;
    }
    return this.head;
  }

  //insert vao vi tri cho truoc
  insertPosition(data: any, position: number) {
    if (position <= 0 || this.head == null) {
      this.insertHead(data);
      return this.head;
    }

    let prev: INode = this.head;
    let current: INode = this.head;
    let index: number = 0;

    while (current.next != null && index < position) {
      prev = current;
      current = current.next as any;
      index++;
    }

    const newNode = new NodeLL(data, current);
    prev.next = newNode;

    return this.head;
  }
  //demo delete

  //print
  print() {
    if (this.head == null) {
      return;
    }
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next as any;
    }
  }
}
