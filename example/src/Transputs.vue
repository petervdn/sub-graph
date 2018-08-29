<template>
  <ul :class="type">
    <li v-for="n in amount"
        @mousedown="onTransputMouseDown(n - 1)"
        @mouseup="onTransputMouseUp(n - 1)"
    >{{label}} {{n - 1}}</li>
  </ul>
</template>

<script>
import TransputType from './TransputType';

export default {
  props: {
    amount: Number,
    type: String,
  },
  computed: {
    label() {
      return this.type === TransputType.INPUT ? 'in' : 'out';
    },
  },
  methods: {
    // onClick(event) {
    //   const pos = getRelativePositionTo(event.target, document.body.querySelector('.view'));
    //   window['context'].fillStyle = 'black';
    //   window['context'].fillRect(pos.x, pos.y, 10, 10);
    //
    //   console.log(pos);
    // },
    onTransputMouseUp(index) {
      this.$emit('endConnection', { index, type: this.type });
    },
    onTransputMouseDown(index) {
      this.$emit('startConnection', { index, type: this.type });
    },
  },
};
</script>

<style>
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
li {
  background-color: #666666;
  color: white;
  padding: 5px;
  margin: 2px 0;
  min-width: 20px;
  user-select: none;
}
</style>
