class Node {

  constructor(id, firstName, lastName) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get id() {
    return this._id;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get label() {
    return `${this.firstName} ${this.lastName}`;
  }

  toJSON() {
    return {
      id: this.id,
      label: this.label
    }
  }

}

export default Node;
