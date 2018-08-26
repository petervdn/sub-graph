import { TransputType } from './enum/TransputType';
import Node from './Node';

export default class Transput {
  private node: Node;
  private type: TransputType;

  constructor(node: Node, type: TransputType) {
    this.node = node;
    this.type = type;
  }
}
