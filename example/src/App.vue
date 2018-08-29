<template>
  <div class="app">
    <div class="controls">
      <button @click="addNode">add node</button>
    </div>
    <div class="view" ref="view">
      <EdgesCanvas
        :viewSize="viewSize"
        :graph="graph"
        :nodeElementsContainer="nodeElementsContainer"
      />
      <template v-for="(node, index) in graph.nodes">
        <Node
          :node="node"
          :index="index"
          @startConnection="onStartConnection"
          @endConnection="onEndConnection"
        />
      </template>
    </div>
  </div>
</template>

<script>
import Graph, { addEdge, addNode } from '../../src/lib/Graph';
import Node from './Node.vue';
import EdgesCanvas from './EdgesCanvas.vue';

export default {
  components: {
    Node,
    EdgesCanvas,
  },
  data() {
    return {
      nodeElementsContainer: null,
      graph: new Graph(),
      viewSize: { width: 0, height: 0 },
    };
  },
  mounted() {
    this.resize();

    this.nodeElementsContainer = this.$refs.view;
    console.log(this.graph);
  },
  methods: {
    resize() {
      const rect = this.$refs.view.getBoundingClientRect();
      this.viewSize = { width: rect.width, height: rect.height };
    },
    onStartConnection(data) {
      this.startConnection = data;
    },
    onEndConnection(endConnection) {
      if (
        this.startConnection &&
        endConnection &&
        this.startConnection.type !== endConnection.type
      ) {
        const edge = addEdge(
          this.graph,
          {
            nodeId: this.startConnection.node.id,
            transputIndex: this.startConnection.index,
          },
          {
            nodeId: endConnection.node.id,
            transputIndex: endConnection.index,
          },
        );
      }
    },
    addNode() {
      addNode(this.graph, 1 + Math.floor(Math.random() * 8), 1 + Math.floor(Math.random() * 8));
    },
  },
};
</script>

<style>
.controls {
  background-color: #222222;
  color: white;
  padding: 20px;
}
.view {
  height: 500px;
  position: relative;
  background-color: blanchedalmond;
}
</style>
