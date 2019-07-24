class Edges {

  constructor() {
    this._items = [];
  }

  get items() {
    return this._items;
  }

  set items(arr) {
    this._items = arr;
  }

  add(node1, node2) {
    this.items.push({ node1, node2 });
  }

  toJSON() {
    return this.items.map(this.toItemJSON.bind(this));
  }

  toItemJSON({ node1, node2 }) {
    return {
      from: node1.id,
      to: node2.id
    };
  }

}

export default Edges;
