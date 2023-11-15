<template>
  <!-- 弹性布局 -->
  <div class="box1">
    <div class="box2">弹性布局</div>
  </div>
</template>
<style lang="less" scoped>
.box1{
  height: 500px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: skyblue;
  .box2{
    height: 200px;
    width: 200px;
    background-color: pink;
    line-height: 200px;
    text-align: center;
  }
}
</style>