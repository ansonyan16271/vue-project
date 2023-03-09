<template>
  <div class="app-wrapper">
    <el-container>
      <!-- 左侧导航 -->
      <Sidebar />
      <el-container>
        <el-header>
          <!-- 头部 -->
          <Header />
        </el-header>
        <el-main>
          <!-- 主体部分 -->
          <Main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  
  <script>
// import Sidebar from './componets/sidebar.vue';
// import Header from './componets/header.vue';
// import Main from './componets/main.vue';
import { Sidebar, Header, Main } from "./componets";

export default {
  data() {
    return {
      
    };
  },
  components: {
    Sidebar,
    Header,
    Main,
  },
  methods: {},
};
</script>