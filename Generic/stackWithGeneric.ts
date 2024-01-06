{
  type Node<T> = {
    readonly data: T;
    readonly preNode?: Node<T>;
  };

  interface Stackable<T> {
    readonly size: number;
    push(data: T): void;
    pop(): T;
    peek(): T;
    isEmpty(): boolean;
  }

  class Stack<T> implements Stackable<T> {
    private pointer?: Node<T>;
    private _size: number = 0;

    constructor(private capacity: number) {}

    get size(): number {
      return this._size;
    }

    push(data: T): void {
      if (this.size === this.capacity) {
        throw new Error('Stack is Full!');
      }
      const newNode: Node<T> = { data, preNode: this.pointer };
      this.pointer = newNode;
      this._size++;
    }

    pop(): T {
      if (this.pointer == null) {
        throw new Error('Stack is Empty!');
      } else {
        const lastNodeData = this.pointer.data;
        this.pointer = this.pointer.preNode;
        this._size--;
        return lastNodeData;
      }
    }

    peek(): T {
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

  const newStack = new Stack<number>(10);
  newStack.push(1);
  // newStack.push('2');
  // newStack.push({ 3: 'hello' });
  // newStack.push(true);
  // newStack.push(null);
  // newStack.push(undefined);
  console.log(newStack);
}
