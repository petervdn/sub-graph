export default class Node {
  public id: string;
  public numberOfInputs: number;
  public numberOfOutputs: number;
  public position = null;

  constructor(id: string, numberOfInputs: number, numberOfOutputs: number) {
    this.id = id;
    this.numberOfInputs = numberOfInputs;
    this.numberOfOutputs = numberOfOutputs;
  }
}
