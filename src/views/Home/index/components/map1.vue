<template>
  <div>
    <div ref="chart" :style="style"></div>
  </div>
</template>
  
  <script>
import * as echarts from "echarts";
import chinaMap from "@/assets/json/china.json";
import { getMap } from "@/api/api";

export default {
  //props:['type'],//父传子
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "500px",
    },
  },
  data() {
    return {
      lists:[]
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
  async mounted() {
    let res = await getMap();
    let {code,data} = res.data;
    if(code == '20000'){
      this.lists = data;
      this.initChart();
    }
    
  },
  methods: {
    initChart() {
      var myChart = echarts.init(this.$refs.chart);
      //注册地图
      echarts.registerMap("china", chinaMap);

      let option = {
        series: [
          {
            type: "map",
            mapType: "china",
            label: {
              //标签文字样式
              show: true,
              color: "#fff",
              fontSize: 12,
            },
            itemStyle: {
              //区域样式
              areaColor: "#5e84fd",
              borderColor: "#fff",
              fontSize: 12,
            },
            data: this.lists
          }
        ],
        visualMap: {
          min: 1,
          max: 100,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["lightskyblue", "yellow", "orangered"],
          },
        },
        // geo:{
        //   show:true,
        //   type:'map',
        //   map:'china'
        // }
      };
      myChart.setOption(option);
      //响应式
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
  },
};
</script>
  
  
  