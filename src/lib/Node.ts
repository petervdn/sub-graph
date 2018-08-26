import Transput from './Transput';
import { TransputType } from './enum/TransputType';

export default class Node {
  private transputs: Transput[] = [];
  constructor(numberOfInputs: number, numberOfOutputs: number) {
    // create inputs and output
    [numberOfInputs, numberOfOutputs].forEach((amount, index) => {
      for (let i = 0; i < amount; i += 1) {
        this.transputs.push(
          new Transput(this, index === 0 ? TransputType.INPUT : TransputType.OUTPUT),
        );
      }
    });
  }

  // public getTransputs(type: TransputType): ITr
}
