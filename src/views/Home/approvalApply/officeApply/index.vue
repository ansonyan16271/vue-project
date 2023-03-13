<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>办公申请</span>
      </div>
      <el-form-item label="申请人 " prop="applicant">
        <el-select v-model="ruleForm.applicant" placeholder="请选择申请人" style="width:100%">
          <el-option v-for="v in user" :key="v.key" :label="v.account" :value="v.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="申请商品  " prop="apply_goods">
        <el-select v-model="ruleForm.apply_goods" placeholder="请选择申请商品" style="width:100%">
          <el-option v-for="v in office" :key="v.key" :label="v.display_name" :value="v.key"></el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item label="申请日期" prop="created">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="ruleForm.created"
          style="width: 100%"
        ></el-date-picker>
      </el-form-item>

      <el-form-item label="申请数量" prop="apply_goods_num">
        <el-input-number v-model="ruleForm.apply_goods_num"  :min="1" :max="10" label="描述文字"></el-input-number>
      </el-form-item>

      <el-form-item label="申请原因" prop="apply_reason">
        <el-input v-model="ruleForm.apply_reason"></el-input>
      </el-form-item>
    </el-card>
  </el-form>
</template>

<script>
import {office} from '@/utils/selectData' //公共数据

import {userEmployee} from '@/api/api'

export default {
  data() {
    return {
      office,
      user:[],
      ruleForm: {
        applicant: '',
        apply_reason: '',
        apply_goods_num: 1,
        created: '',
        apply_goods: ''
      },
      rules: {
        applicant: [
          { required: true, message: "请输入申请人", trigger: "blur" },
          
        ],
      },
    };
  },
  mounted(){
    this.getEmployee();
  },
  methods: {
    async getEmployee(){
      let res = await userEmployee();
      let {code,data} = res.data;
      if(code == 20000){
        this.user = data;
      }
     
    }


  },
};
</script>


