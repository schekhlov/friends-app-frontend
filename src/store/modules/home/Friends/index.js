import axios from 'axios';
import Nodes from './Nodes';
import Edges from './Edges';

class Friends {

  constructor() {
    this.nodes = new Nodes();
    this.edges = new Edges();
    this.nodes.create(251396370, 'Sergey', 'Chekhlov');
  }

  async fetchByUserId(userId) {
    const parent = this.nodes.getById(userId);
    const response = await axios.get('http://91.206.14.34/api/v1/friends?user_id=' + userId);
    if (response.data && response.data.items) {
      const friends = response.data.items.slice(0, 10);
      friends.map(({ id, first_name, last_name }) => {
        const child = this.nodes.create(id, first_name, last_name);
        this.edges.add(parent, child)
      });
    }
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
