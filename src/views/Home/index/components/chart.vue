<template>
    <div>
        <div ref="chart" style="width:100%;height:300px"></div>
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts' 
  
  export default {
    //props:['type'],//父传子
    props:{
        type:{
            type:String,
            default:'bar'
        }
    },
    data(){
      return {
        option:{
                title:{
                    text:'echart图表'
                },
                xAxis:{
                    data:['1月','2月','3月','4月','5月','6月']
                },
                yAxis:{},
                series:[
                    {
                        type:this.type,
                        data:[10,20,30,40,50,60]
                    }
                ]
            }
      }
    },
    mounted(){
        var myChart = echarts.init(this.$refs.chart);
         myChart.setOption(this.option);
         //响应式
         window.addEventListener('resize',()=>{
            myChart.resize(); 
         })
    },
  }
  </script>
  
  
  