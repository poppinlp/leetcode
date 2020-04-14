class MinStack {
  constructor() {
    this._top = -1;
    this.data = [];
    this.min = Number.MAX_SAFE_INTEGER;
  }
  push(n) {
    this.data[++this._top] = n;
    n < this.min && (this.min = n);
  }
  pop() {
    this.min = Number.MAX_SAFE_INTEGER;
    for (let i = --this._top; i >= 0; --i) {
      this.data[i] < this.min && (this.min = this.data[i]);
    }
  }
  top() {
    return this.data[this._top];
  }
  getMin() {
    return this.min;
  }
}

class MinStack {
  constructor() {
    this._top = -1;
    this.data = [];
    this.min = Number.MAX_SAFE_INTEGER;
  }
  push(n) {
    this.data[++this._top] = this.min;
    this.data[++this._top] = n;
    n < this.min && (this.min = n);
  }
  pop() {
    this.min = this.data[--this._top];
    --this._top;
  }
  top() {
    return this.data[this._top];
  }
  getMin() {
    return this.min;
  }
}
