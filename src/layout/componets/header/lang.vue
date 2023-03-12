<template>
  <el-dropdown>
    <el-button type="primary" size="mini">
      {{ $t("message.lang") }}<i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        ><span @click="($event) => switchLang('zh')"
          >中文</span
        ></el-dropdown-item
      >
      <el-dropdown-item
        ><span @click="($event) => switchLang('en')"
          >English</span
        ></el-dropdown-item
      >
    </el-dropdown-menu>
  </el-dropdown>
</template>
      
      
  <script>
export default {
  data() {},

  methods: {
    switchLang(type) {
      this.$i18n.locale = type;
    },
  },
};
</script>
    