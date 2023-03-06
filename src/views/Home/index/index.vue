<template>
  <div class="content">
    <!-- 一行二列   -->
    <div class="content-row">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="8" :lg="8">
          <div class="bg-white bg-purple"><Chart :type="'bar'" /></div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="16" :lg="16">
          <div class="bg-white bg-purple-light"><Chart :type="'line'" /></div>
        </el-col>
      </el-row>
    </div>
    <!-- 平均分配  -->
    <div class="content-row">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <div class="bg-white bg-purple"><Chart /></div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <div class="bg-white bg-purple-light"><Chart /></div>
        </el-col>
      </el-row>
    </div>

    <!-- 二行二列 -->
    <div class="content-row">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
          <div class="bg-purple">
            <div class="content-row">
              <el-row>
                <el-col :span="24">
                  <div class="bg-white bg-purple">11111</div>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
  
  <script>
import { Chart } from "./components";
export default {
  components: {
    Chart,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>