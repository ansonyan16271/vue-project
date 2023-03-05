<template>
  <div class="app-breadcrumb">
    <!-- 面包屑 -->
 
    <Breadcrumb />

    <!-- 右侧按钮 -->
    <div class="right-menu">
      <el-button type="danger" size="mini" icon="el-icon-share" @click="goBack">退出</el-button>
    </div>
  </div>
</template>
  
  
<script>
import Breadcrumb from './breadcrumb.vue';
import { removeToken } from '@/utils/auth';

export default {
  components: {Breadcrumb},
  data() {
    return {

    }
  },
  methods: {
    goBack() {
      removeToken();
      this.$router.push('/login');
    },
  },
};
</script>
