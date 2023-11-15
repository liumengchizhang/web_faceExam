<template>
  <el-container>
    <el-aside width="200px" style="background-color: rgb(221, 228, 221)">
      <el-menu
        :default-active="activeIndex"
        @select="handleSelect"
        class="el-menu-demo"
        style="background-color: antiquewhite"
        :router="true"   
      >
        <el-menu-item
          :index="title.path"
          v-for="title in titleObj"
          :key="title.path"
          @click="handleclick"  
        >
          <template slot="title" v-if="title.children[0].meta.title">{{
            title.children[0].meta.title
          }}
          </template>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import router from '@/router'
export default {
  data () {
    return {
      titleObj: router.options.routes,
      activeIndex: '2',
      isCollapse:true
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      console.log('11')
      this.activeIndex=key
    },
    handleclick () {
      console.log('11')
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>
<style lang="less" scoped>
.el-container {
  height: 100vh;
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  /deep/.el-icon-arrow-down {
    display: none !important;
  }
}
</style>
