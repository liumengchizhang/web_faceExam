<template>
  <div class="box1">
    <div class="box2">表格内容垂直居中</div>
  </div>
</template>
<style lang="less" scoped>
.box1{
  height: 500px;
  width: 500px;
  display: table;
  background-color: skyblue;
  .box2{
    display: table-cell;
    text-align: center;
    height: 200px;
    width: 200px;
    background-color: pink;
    vertical-align: middle;
  }
}
</style>