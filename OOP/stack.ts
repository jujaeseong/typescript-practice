{
  type Node = {
    readonly data: string;
    readonly preNode?: Node;
  };

  interface Stackable {
    readonly size: number;
    push(data: string): void;
    pop(): string;
    peek(): string;
    isEmpty(): boolean;
  }

  class Stack implements Stackable {
    private pointer?: Node;
    private _size: number = 0;

    constructor(private capacity: number) {}

    get size(): number {
      return this._size;
    }

    push(data: string): void {
      if (this.size === this.capacity) {
        throw new Error('Stack is Full!');
      }
      const newNode: Node = { data, preNode: this.pointer };
      this.pointer = newNode;
      this._size++;
    }

    pop(): string {
      if (this.pointer == null) {
        throw new Error('Stack is Empty!');
      } else {
        const lastNodeData = this.pointer.data;
        this.pointer = this.pointer.preNode;
        this._size--;
        return lastNodeData;
      }
    }

    peek(): string {
      if (this.pointer == null) {
        throw new Error('Stack is Empty!');
      } else {
        return this.pointer.data;
      }
    }

    isEmpty(): boolean {
      return this._size === 0;
    }
  }

  const newStack = new Stack(10);
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
