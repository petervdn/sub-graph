import Transput from './Transput';
import { TransputType } from './enum/TransputType';
import Node from './Node';

export default class Input extends Transput {
  constructor(node: Node) {
    super(node, TransputType.INPUT);
  }
}
