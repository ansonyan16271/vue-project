<template>
    <el-aside width="200px" class="aside">
        <el-menu :default-active="$route.path" exact class="el-menu-vertical-demo" router>
            <sideItem v-for="item in items" :key="item.url" :item="item"/>
        </el-menu>
    </el-aside>
</template>
  
  
  <script>
  import sideItem from './sideItem.vue'
  import items from '@/utils/menu'  //公共数据
  export default{
    data(){
        return{
            items
        }
    },
    components:{
        sideItem,
    },
    methods:{
        
    }
  
  }
  </script>
  
