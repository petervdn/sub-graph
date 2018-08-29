import Node from './Node';
import Edge, { IConnection } from './Edge';

export default class Graph {
  nodes: Node[] = [];
  edges: Edge[] = [];
}

export function addNode(graph: Graph, inputs: number, outputs: number): Node {
  const node = new Node(`node-${graph.nodes.length}`, inputs, outputs);
  graph.nodes.push(node);

  return node;
}

export function addEdge(graph: Graph, source: IConnection, destination: IConnection): Edge {
  const edge = new Edge(source, destination);
  graph.edges.push(edge);

  return edge;
}
