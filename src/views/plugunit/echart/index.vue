<template>
  <div class="chart">
    <h1>echart图表</h1>
    <div class="Graphics">
      <bar></bar>
      <poly-line></poly-line>
      <v-pie></v-pie>
      <v-map></v-map>
    </div>
  </div>
</template>

<script>
import bar from "./bar.vue";
import polyline from "./line.vue";
import pie from "./pie.vue";
import map from "./map.vue";
export default {
  components: {
    bar,
    "poly-line": polyline,
    "v-pie": pie,
    "v-map": map
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.chart {
  padding: 20px;
}
.chart h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
}
.Graphics {
  display: flex;
  flex-wrap: wrap;
}
</style>
