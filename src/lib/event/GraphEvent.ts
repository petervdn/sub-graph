import AbstractEvent from 'seng-event/lib/AbstractEvent';
import { EVENT_TYPE_PLACEHOLDER, generateEventTypes } from 'seng-event/lib/util/eventTypeUtils';
import Node from '../Node';
import Edge from '../Edge';

class GraphEvent extends AbstractEvent {
  public static NODE_ADDED: string = EVENT_TYPE_PLACEHOLDER;
  public static NODE_REMOVED: string = EVENT_TYPE_PLACEHOLDER;
  public static EDGE_ADDED: string = EVENT_TYPE_PLACEHOLDER;
  public static EDGE_REMOVED: string = EVENT_TYPE_PLACEHOLDER;

  public data: Node | Edge;

  constructor(type: string, data?: Node | Edge) {
    super(type);

    this.data = data;
  }

  public clone(): GraphEvent {
    return new GraphEvent(this.type, this.data);
  }
}

generateEventTypes({ GraphEvent });

export default GraphEvent;
