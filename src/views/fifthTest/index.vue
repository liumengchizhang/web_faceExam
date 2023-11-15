<template>
  <div>
    5.密码输入组件
    <div class="pwdcontain">
      <div id="payPwd">
        <div class="font">
          <div>请输入支付密码(数字)</div>
          <div style="cursor: pointer;font-size: 12px" @click="showpwd" title="输入密码后点我有惊喜哦~">点我显示密码：{{ this.data }}</div>
        </div>
        <div class="paybox">
          <el-input v-model="input.input1" class="inputbox" maxlength="1" name="num" type="password"></el-input>
          <el-input v-model="input.input2" class="inputbox" maxlength="1" name="num" type="password"></el-input>
          <el-input v-model="input.input3" class="inputbox" maxlength="1" name="num" type="password"></el-input>
          <el-input v-model="input.input4" class="inputbox" maxlength="1" name="num" type="password"></el-input>
          <el-input v-model="input.input5" class="inputbox" maxlength="1" name="num" type="password"></el-input>
          <el-input v-model="input.input6" class="inputbox" maxlength="1" name="num" type="password"></el-input>
          <el-button class="resetbtn" @click="clearAllNumber">重置</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Password',
  data () {
    return {
      data: undefined,
      input: {
        input1: undefined,
        input2: undefined,
        input3: undefined,
        input4: undefined,
        input5: undefined,
        input6: undefined
      },
      num1: null,
      num2: null,
      num3: null,
      num4: null,
      num5: null,
      num6: null
    }
  },
  watch: {},
  methods: {
    showpwd () {
      this.sumnum(this.input)
    },
    clearAllNumber () {
      this.input.input1 = undefined
      this.input.input2 = undefined
      this.input.input3 = undefined
      this.input.input4 = undefined
      this.input.input5 = undefined
      this.input.input6 = undefined
    },
    sumnum (sum) {
      const a = sum.input1 + sum.input2 + sum.input3 + sum.input4 + sum.input5 + sum.input6
      this.data = parseInt(a)
    }
  }
}
</script>

<style scoped>
.pwdcontain {
  width: 600px;
  background-color: antiquewhite;
  margin: 0 auto;
  padding: 20px 10px;
  border-radius: 10px;
}

.pwdcontain #payPwd {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
}

.pwdcontain #payPwd .font {
  font-size: 24px;
}

.pwdcontain #payPwd .paybox {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
}

.pwdcontain #payPwd .paybox .inputbox {
  box-sizing: border-box;
  border-top: 3px solid rgb(154, 154, 154);
  border-left: 3px solid rgb(154, 154, 154);
  border-right: 3px solid rgb(238, 238, 238);
  border-top: 3px solid rgb(154, 154, 154);
  border-bottom: 3px solid rgb(238, 238, 238);
}

.pwdcontain #payPwd .paybox .resetbtn {
  margin-left: 20px;
  border-top: 3px solid rgb(154, 154, 154);
  border-left: 3px solid rgb(154, 154, 154);
  border-right: 3px solid rgb(238, 238, 238);
  border-top: 3px solid rgb(154, 154, 154);
  border-bottom: 3px solid rgb(238, 238, 238);
}
/*  方法二*/
.pwdcontain #payPwd .paybox .el-input >>> .el-input__inner {
  border-radius: 0px;
  padding: 0;
  text-align: center;
  border: none;
}
</style>
