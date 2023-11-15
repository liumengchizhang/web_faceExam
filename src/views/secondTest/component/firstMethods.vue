<template>
  <!-- 子绝父相，然后通过平移transform平移 -->
  <div class="box1">
    <div class="box2">子绝父向</div>
  </div>
</template>
<style lang="less" scoped>
.box1{
  height: 500px;
  width: 500px;
  position: relative;
  background: skyblue;
  .box2{
    height: 200px;
    width: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    background: pink;
    line-height: 200px;
    text-align: center;
  }
}
</style>