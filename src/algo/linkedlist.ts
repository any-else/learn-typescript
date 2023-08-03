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

class LinkedListData {
  private head: INodeLL | null;
  private tail: INodeLL | null;
  constructor(head: INodeLL | null, tail: INodeLL | null) {
    this.head = head;
    this.tail = tail;
  }

  //build ra nhung phuong thuc thang array minh cung co
  getHead(): INodeLL | null {
    if (this.head == null) {
      return null;
    }
    return this.head;
  }

  getTail(): INodeLL | null {
    return this.tail;
  }

  insertHead(newData: any) {
    const newNode = new NodeLinkedList(newData);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    newNode.pointer = this.head;
    this.head = newNode;
  }
}
