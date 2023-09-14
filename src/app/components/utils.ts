interface ICircularBuffer {
  add: (data: any) => void;
  toArray: () => void;
  getDirection: () => "up" | "down" | undefined;
}

export class CircularBuffer implements ICircularBuffer {
  private buffer: Array<number>;
  private index: number;
  constructor(private size: number) {
    this.buffer = new Array(size);
    this.size = size;
    this.index = 0;
  }

  add(data: any) {
    this.buffer[this.index] = data;
    this.index = (this.index + 1) % this.size;
  }

  toArray() {
    return this.buffer;
  }
  getDirection() {
    if (this.buffer[0] > this.buffer[this.size - 1]) {
      return "down";
    } else if (this.buffer[0] < this.buffer[this.size - 1]) return "up";
  }
}

// Пример использования
// const buffer = new CircularBuffer(3);

// buffer.add(1);
// console.log(buffer.toArray()); // [1, undefined, undefined]

// buffer.add(2);
// buffer.add(3);
// console.log(buffer.toArray()); // [1, 2, 3]

// buffer.add(4);
// console.log(buffer.toArray()); // [4, 2, 3]


