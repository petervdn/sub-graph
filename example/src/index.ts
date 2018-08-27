import Graph from '../../src/lib/Graph';
import App from './App.vue';


const graph = new Graph();
graph.addNode(2, 1);

var app = new Vue({
  el: '#app',
  components: { App },
  template: '<App />',
});
