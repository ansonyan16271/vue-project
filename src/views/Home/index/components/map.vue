<template>
  <div>
    <div ref="chart" :style="style"></div>
  </div>
</template>
  
  <script>
import * as echarts from "echarts";
import chinaMap from "@/assets/json/china.json";
//import { getMap } from "@/api/api";

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
      lists: [],
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
    this.initChart();
  },
  methods: {
    initChart() {
      var myChart = echarts.init(this.$refs.chart);
      //注册地图
      echarts.registerMap("china", chinaMap);

      let option = {
        geo: {
          show: true,
          type: "map",
          map: "china",
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
            },
        },
        series: [
          {
            type:'effectScatter',
            coordinateSystem:'geo',
            symbol:'circle',
            label:{
              show:true,
              position:'right',
              formatter:'{b}'
            },
            symbolSize:function(value){
              return value[2]
            },
            itemStyle:{
              color:'yellow'
            },
            data:[
              {
                name:'重庆',
                value:[106.54, 29.59,10],
              },
              {
                name:'南昌',
                value:[115.89, 28.68,20],
              },
              {
                name:'秦皇岛',
                value:[119.57, 39.95,30],
              },
              {
                name:'牡丹江',
                value:[129.58, 44.6,15],
              },
              {
                name:'张家界',
                value:[110.479191, 29.117096,25],
              },
              {
                name:'乌鲁木齐',
                value:[87.68, 43.77,20],
              },
              {
                name:'大庆',
                value:[125.03, 46.58,25],
              },
            ]
          },
        ],
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
  
  
  