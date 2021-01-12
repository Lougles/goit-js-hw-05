class StringBuilder {
  constructor(_value) {
    this._value = _value;
  }
  get value() {
    return this._value;
  }
  set value(value) { 
    this._value = value;
  }
  append(str) {
    // console.log(`${str}${this.value}`);
    this.value = this._value + str;
  }
  prepend(str) {
    this.value = str + this.value;
  }
  pad(str) {
    this.value = str + this.value + str;
  }
}


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='