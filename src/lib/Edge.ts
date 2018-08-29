export interface IConnection {
  nodeId: string;
  transputIndex: number;
}

export default class Edge {
  public source: IConnection;
  public destination: IConnection;

  constructor(source: IConnection, destination: IConnection) {
    this.source = source;
    this.destination = destination;
  }
}
