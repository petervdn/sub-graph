<template>
  <div
    class="node-wrap"
    :data-id="node.id"
    :style="{
      zIndex: index + 1,
      left: node.position.x + 'px',
      top: node.position.y + 'px'
    }">
    <h2 class="title" @mousedown="onTitleMouseDown" @mouseup="onMouseUp">{{node.id}}</h2>
    <div class="main">
      <template v-for="category in transputCategories">
        <Transputs
          :amount="category.amount"
          @startConnection="onStartConnection"
          @endConnection="onEndConnection"
          :type="category.type"
        />
      </template>
    </div>
  </div>
</template>

<script>
import Transputs from './Transputs.vue';
import TransputType from './TransputType';

export default {
  // name: "main-content",
  components: {
    Transputs,
  },
  created() {
    if (!this.node.position) {
      this.node.position = { x: 0, y: 0 };
    }
  },
  props: {
    node: {
      numberOfInputs: Number,
      numberOfOutputs: Number,
    },
    index: Number,
  },
  data() {
    return {
      TransputType,
      transputCategories: [
        { type: TransputType.INPUT, amount: this.node.numberOfInputs },
        { type: TransputType.OUTPUT, amount: this.node.numberOfOutputs },
      ],
      nodes: [],
      dragMovement: null,
    };
  },
  computed: {
    position() {
      // return {
      //   x: this.node.position.x + (this.dragMovement ? this.dragMovement.x : 0),
      //   y: this.node.position.y + (this.dragMovement ? this.dragMovement.y : 0),
      // };
    },
  },
  methods: {
    onStartConnection(data) {
      this.$emit('startConnection', { ...data, node: this.node });
    },
    onEndConnection(data) {
      this.$emit('endConnection', { ...data, node: this.node });
    },
    onMouseMove(event) {
      const dragMovement = {
        x: event.screenX - this.startDragMousePosition.x,
        y: event.screenY - this.startDragMousePosition.y,
      };

      this.node.position.x = this.startDragNodePosition.x + dragMovement.x;
      this.node.position.y = this.startDragNodePosition.y + dragMovement.y;
    },
    onTitleMouseDown(event) {
      this.startDragMousePosition = { x: event.screenX, y: event.screenY };
      this.startDragNodePosition = { x: this.node.position.x, y: this.node.position.y };
      window.addEventListener('mousemove', this.onMouseMove);
      window.addEventListener('mouseup', this.onMouseUp);
    },
    onMouseUp() {
      window.removeEventListener('mousemove', this.onMouseMove);
      window.removeEventListener('mouseup', this.onMouseUp);

      // update position & reset drag // todo can we use a computed like this?
      // this.node.position = {
      //   x: this.position.x,
      //   y: this.position.y,
      // };
      // this.dragMovement = null;
    },
  },
};
</script>

<style>
.node-wrap {
  opacity: 0.5;
  width: 200px;
  position: absolute;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2);
}
.title {
  margin: 0;
  padding: 4px;
  font-size: 0.8rem;
  background-color: #222222;
  color: white;
  user-select: none;
}
.main {
  display: flex;
  justify-content: space-between;
  background-color: #00b0e8;
}
.inputs,
.outputs {
  margin: 0;
  padding: 0;
  list-style-type: none;
  user-select: none;
}
.inputs li,
.outputs li {
  background-color: #666666;
  color: white;
  padding: 5px;
  margin: 2px 0;
  min-width: 20px;
}
</style>
