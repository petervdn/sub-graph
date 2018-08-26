import EventDispatcher from 'seng-event';
import Node from './Node';

export default class Graph extends EventDispatcher {
  private nodes: Node[] = [];

  constructor() {
    super();
  }

  public addNode(inputs: number, outputs: number): Node {
    const node = new Node(inputs, outputs);
    this.nodes.push(node);
    return node;
  }
}
