<template>
  <div>
    <div ref="chart" :style="style"></div>
  </div>
</template>
  
  <script>
import * as echarts from "echarts";

export default {
  //props:['type'],//父传子
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "100%",
    },
    type: {
      type: String,
      default: "bar",
    },
    option: {
      type: Object,
      default: () => ({
        title: {
          text: "echart图表",
        },
        xAxis: {
          data: ["1月", "2月", "3月", "4月", "5月", "6月"],
        },
        yAxis: {},
        series: [
          {
            type: 'bar',
            data: [10, 20, 30, 40, 50, 60],
          },
        ],
      }),
    },
  },
  data() {
    return {
      myChart:""
    };
  },
  computed: {
    style() {
      return {
        width: this.width,
        height: this.height,
      };
    },
  },
  //国际化监听
  // watch:{
  //   "$i18n.locale"(newValue,oldValue){
  //     myChart.setOption(this.option);
  //   }
  // },
  mounted() {
    var myChart = echarts.init(this.$refs.chart);
    myChart.setOption(this.option);
    //响应式
    window.addEventListener("resize", () => {
      myChart.resize();
    });
  },
};
</script>
  
  
  