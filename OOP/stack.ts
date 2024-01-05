{
  class Node {
    constructor(private _data: string, private _preNode: Node | null) {}

    get data(): string {
      return this._data;
    }

    get preNode(): Node | null {
      return this._preNode;
    }
  }

  interface Stackable {
    push(data: string): void;
    pop(): string | undefined;
    peek(): string | undefined;
    isEmpty(): boolean;
  }

  class Stack implements Stackable {
    private pointer: Node | null;

    constructor() {
      this.pointer = null;
    }

    push(data: string): void {
      const newNode = new Node(data, this.pointer);
      this.pointer = newNode;
    }

    pop(): string | undefined {
      if (this.pointer === null) {
        return undefined;
      } else {
        const lastNodeData = this.pointer.data;
        this.pointer = this.pointer.preNode;
        return lastNodeData;
      }
    }

    peek(): string | undefined {
      return this.pointer?.data;
    }

    isEmpty(): boolean {
      return this.pointer === null;
    }
  }

  const newStack = new Stack();
  newStack.push('1');
  newStack.push('2');
  console.log(newStack.isEmpty());
  console.log(newStack.peek());
  console.log(newStack);
  console.log(newStack.pop());
  console.log(newStack);
  console.log(newStack.pop());
  console.log(newStack);
  console.log(newStack.isEmpty());
  console.log(newStack.pop());
}
