<template>
  <div class="step">
    <h1>4.步骤条组件</h1>
    <div :model="stepname" class="head">
      <div
        class="num1"
        label="1"
        v-bind:style="{ background: num1bgc, color: num1color }"
      >
        {{ stepname.step1 }}
      </div>
      <div
        class="num2"
        label="2"
        v-bind:style="{ background: num2bgc, color: num2color }"
      >
        {{ stepname.step2 }}
      </div>
      <div
        class="num3"
        label="3"
        v-bind:style="{ background: num3bgc, color: num3color }"
      >
        {{ stepname.step3 }}
      </div>
    </div>
    <div class="container">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item v-if="label === 1" :label="form.userName">
          <el-input placeholder="请输入用户名" type="text"></el-input>
        </el-form-item>
        <el-form-item v-if="label === 2" :label="form.telName">
          <el-input placeholder="请填写手机号"></el-input>
        </el-form-item>
        <el-form-item v-if="label === 3" :label="form.userPwd">
          <el-input placeholder="请填写密码"></el-input>
        </el-form-item>
        <el-form-item v-if="label === 1">
          <el-button @click="resetForm('form')">重置</el-button>
          <el-button type="success" @click="nextClick">下一步</el-button>
        </el-form-item>
        <el-form-item v-if="label === 2">
          <el-button @click="resetForm('form')">重置</el-button>
          <el-button type="success" plain @click="beforeClick"
            >上一步</el-button
          >
          <el-button type="success" @click="nextClick">下一步</el-button>
        </el-form-item>
        <el-form-item v-if="label === 3">
          <el-button @click="resetForm('form')">重置</el-button>
          <el-button type="success" plain @click="beforeClick"
            >上一步</el-button
          >
          <el-button type="success" @click="submitForm('form')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 步骤的变化
      label: 1,
      labelMax: 3,
      stepname: {
        step1: '①填写用户名',
        step2: '②请填写手机号',
        step3: '③请填写密码'
      },
      // 步骤条颜色
      num1bgc: 'rgb(44, 209, 169)',
      num2bgc: 'rgb(241, 244, 249)',
      num3bgc: 'rgb(241, 244, 249)',
      num1color: 'white',
      num2color: 'black',
      num3color: 'black',
      btnbgc: 'rgb(44, 209, 169)',
      btncolor: 'white',
      // 表单变化
      form: {
        telName: '手机号',
        tel: '',
        userName: '用户名',
        name: '',
        userPwd: '密码',
        pwd: ''
      }
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    submitForm (form) {
      console.log(form)
      this.$refs[form].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    nextClick () {
      this.label = this.label + 1
      if (this.label === 2) {
        var c = this.num1bgc
        this.num1bgc = this.num2bgc
        this.num2bgc = c
        var d = this.num1color
        this.num1color = this.num2color
        this.num2color = d
      } else if (this.label === 3) {
        var c = this.num2bgc
        this.num2bgc = this.num3bgc
        this.num3bgc = c
        var d = this.num2color
        this.num2color = this.num3color
        this.num3color = d
      }
    },
    beforeClick () {
      this.label = this.label - 1
      if (this.label === 2) {
        var c = this.num2bgc
        this.num2bgc = this.num3bgc
        this.num3bgc = c
        var d = this.num2color
        this.num2color = this.num3color
        this.num3color = d
      } else if (this.label === 1) {
        var c = this.num1bgc
        this.num1bgc = this.num2bgc
        this.num2bgc = c
        var d = this.num1color
        this.num1color = this.num2color
        this.num2color = d
      }
    }
  }
}
</script>
<style>
.step {
  width: 900px;
  height: 600px;
  margin: 0 auto;
}

.head {
  display: flex;
  text-align: center;
  line-height: 50px;
  padding-bottom: 10px;
}

.step .head .num1 {
  width: 300px;
  height: 50px;
  font-size: 22px;
}

.step .head .num2 {
  width: 300px;
  height: 50px;
  font-size: 22px;
}

.step .head .num3 {
  width: 300px;
  height: 50px;
  font-size: 22px;
}
</style>
