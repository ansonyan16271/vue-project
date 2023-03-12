<template>
  <div class="app-breadcrumb">
    <!-- 面包屑 -->
 
    <Breadcrumb />

    <!-- 右侧按钮 -->
    <div class="right-menu">
      <lang />

      <el-button type="danger" size="mini" icon="el-icon-share" @click="goBack">{{$t("message.exit")}}</el-button>
    </div>
  </div>
</template>
  
  
<script>
import Breadcrumb from './breadcrumb.vue';
import { removeToken } from '@/utils/auth';
import Lang from './lang.vue'

export default {
  components: {Breadcrumb,Lang},
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
