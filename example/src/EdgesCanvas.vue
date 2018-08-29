<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import Graph from '../../src/lib/Graph';
import { drawEdges } from './util';

export default {
  props: {
    viewSize: {
      x: Number,
      y: Number,
    },
    graph: {
      type: Graph,
      required: true,
    },
    nodeElementsContainer: HTMLDivElement,
  },
  mounted() {
    this.context = this.$refs.canvas.getContext('2d');
    window['context'] = this.context;
  },
  methods: {
    redraw() {
      drawEdges(
        this.context,
        this.nodeElementsContainer,
        this.graph,
      );
    },
  },
  watch: {
    'graph.edges'() {
      this.redraw();
    },
    'graph.nodes': {
      handler() {
        this.redraw();
      },
      deep: true,
    },
    viewSize() {
      this.$refs.canvas.width = this.viewSize.width;
      this.$refs.canvas.height = this.viewSize.height;
    },
  },
};
</script>

<style scoped>
canvas {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
}
</style>
