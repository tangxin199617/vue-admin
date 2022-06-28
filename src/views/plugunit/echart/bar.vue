<template>
  <div id="main"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    echartlist() {
      var myChart = this.$echarts.init(document.getElementById("main"));
      myChart.setOption({
        title: {
          text: "柱状图"
        },
        legend: {
          data: ["销量"]
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            //设置柱状图大小
            barWidth: 20,
            //设置柱状图渐变颜色
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#1268f3" // 0% 处的颜色
                    },
                    {
                      offset: 0.6,
                      color: "#08a4fa" // 60% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#01ccfe" // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  },
  mounted() {
    this.echartlist();
  }
};
</script>

<style scoped>
#main {
  width: 600px;
  height: 300px;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
}
</style>
