<template>
  <div>
    <!-- 无子级 -->
    <el-menu-item :index="item.url" v-if="!item.children">
      <i :class="item.icon"></i>
      <span slot="title">{{item.title}}</span>
    </el-menu-item>

    <!-- 有子级 -->
    <el-submenu :index="item.url" v-else>
      <template slot="title">
        <i :class="item.icon"></i>
        <span slot="title">{{item.title}}</span>
      </template>

      <sideItem v-for="item in item.children" :key="item.url" :item="item"/>
      
      <!-- <el-menu-item :index="item.url">
        <i :class="item.icon"></i>
        <span slot="title">{{item.title}}</span>
      </el-menu-item> -->
    </el-submenu>
  </div>
</template>
  
  
  <script>
export default {
  name:'sideItem',
  data() {
    return {

    };
  },
  props:['item'],
  // methods: {},
}
</script>
  
