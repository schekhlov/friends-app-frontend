import Nodes from './Nodes';
import Edges from './Edges';

class Friends {

  constructor() {
    this.nodes = new Nodes();
    this.edges = new Edges();
    this.nodes.create(251396370, 'Sergey', 'Chekhlov');
  }

  update(userId, data) {
    const parent = this.nodes.getById(userId);
    const friends = data.items.slice(0, 10);
    friends.map(({ id, first_name, last_name }) => {
      const child = this.nodes.create(id, first_name, last_name);
      this.edges.add(parent, child)
    });
  }

  toJSON() {
    const nodes = this.nodes.toJSON();
    const edges = this.edges.toJSON();

    return {
      nodes,
      edges
    };
  }

}

export default new Friends();
