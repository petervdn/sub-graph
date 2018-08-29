import Graph from '../../src/lib/Graph';
import Edge from '../../src/lib/Edge';
import TransputType from './TransputType';

export function drawEdges(
  context: CanvasRenderingContext2D,
  elementsContainer: HTMLElement,
  graph: Graph,
): void {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  const nodeElements = elementsContainer.querySelectorAll('.node-wrap');
  const elementsArray = <HTMLDivElement[]>Array.from(nodeElements);
  graph.edges.forEach((edge: Edge) => {
    // const sourceNode = graph.nodes.find(node => node.id === edge.source.nodeId);
    // const destinationNode = graph.nodes.find(node => node.id === edge.destination.nodeId);
    //
    // const sourceNodeElement: HTMLDivElement = elementsArray.find(
    //   element => element.dataset.id === sourceNode.id,
    // );
    // const destinationNodeElement: HTMLDivElement = elementsArray.find(
    //   element => element.dataset.id === destinationNode.id,
    // );

    const outputElement = getTransputElement(
      elementsArray,
      edge.source.nodeId,
      TransputType.OUTPUT,
      edge.source.transputIndex,
    );
    const inputElement = getTransputElement(
      elementsArray,
      edge.destination.nodeId,
      TransputType.INPUT,
      edge.destination.transputIndex,
    );
    // console.log(outputElement, inputElement);
    // console.log(getRelativePositionTo(outputElement, elementsContainer));
    const outputPos = getRelativePositionTo(outputElement, elementsContainer);
    outputPos.y += outputElement.getBoundingClientRect().height * 0.5;
    outputPos.x += outputElement.getBoundingClientRect().width;
    const inputPos = getRelativePositionTo(inputElement, elementsContainer);
    inputPos.y += inputElement.getBoundingClientRect().height * 0.5;

    drawLine(context, outputPos, inputPos);
  });
}
interface IPoint {
  x: number;
  y: number;
}
function drawLine(context: CanvasRenderingContext2D, from: IPoint, to: IPoint): void {
  context.beginPath();
  context.moveTo(from.x, from.y);
  context.lineTo(to.x, to.y);
  context.stroke();
}

export function getRelativePositionTo(element: HTMLElement, reference: HTMLElement): IPoint {
  const pos = { x: 0, y: 0 };
  let el = element;
  while (el && el !== reference) {
    // console.log(el, el.tagName, el.offsetLeft, el.offsetTop);
    if (el.tagName !== 'UL' && !el.classList.contains('main')) { // todo wtfff
      pos.x += el.offsetLeft;
      pos.y += el.offsetTop;
    }

    el = el.parentElement;
  }

  return pos;
}

function getTransputElement(
  nodeElements: HTMLElement[],
  nodeId: string,
  type: string,
  transputIndex: number,
): HTMLElement {
  const nodeElement = nodeElements.find(element => element.dataset.id === nodeId);
  return nodeElement.querySelector(`ul.${type}`).querySelectorAll('li')[transputIndex];
}
