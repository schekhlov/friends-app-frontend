import Node from './Node';

class Nodes {

  constructor() {
    this._items = [];
  }

  get items() {
    return this._items;
  }

  set items(arr) {
    this._items = arr;
  }

  add(node) {
    this.items.push(node);
  }

  create(id, firstName, lastName) {
    const exists = this.getById(id);
    if (exists) {
      return exists;
    }

    const node = new Node(id, firstName, lastName);
    this.add(node);
    return node;
  }

  getById(id) {
    return this.items.find(node => node.id === id);
  }

  toJSON() {
    return this.items.map(item => item.toJSON());
  }

}

export default Nodes;
