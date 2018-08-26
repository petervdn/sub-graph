import Transput from './Transput';
import { TransputType } from './enum/TransputType';
import Node from './Node';

export default class Output extends Transput {
  constructor(node: Node) {
    super(node, TransputType.OUTPUT);
  }
}
