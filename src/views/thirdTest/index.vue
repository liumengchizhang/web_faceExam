<template>
  <div class="height-view">
    <h1>
    3. 在⼀个容器中有三个模块，定义某⼀模块⾼度，使得其它模块能⾃适应最⾼⾼度 
  </h1>
  <div class="heightv">
    <div class="box1" ref="boxOne" :style="{height:setHeightMax+'px'}">模块1</div>
    <div class="box2" ref="boxTwo" :style="{height:setHeightMax+'px'}">模块2</div>
    <div class="box3" ref="boxThree" :style="{height:setHeightMax+'px'}">模块3</div>
  </div>
  </div>
  </template>
  
  <script>
  import { 
    defineComponent, 
    getCurrentInstance, 
    nextTick, 
    onMounted, 
    reactive, 
    ref 
  } from 'vue';
  
  import { useRoute, useRouter } from 'vue-router';
  
  
  export default defineComponent({
    name: '',
    // 注册你的组件
    components:{  },
    props: {
  
    },
    
    emits: [
    ],
    setup(props, {attrs, slots, emit, expose }){
    const route = useRoute();
    const router = useRouter();
    const boxOne = ref(null)
    const boxTwo = ref(null)
    const boxThree = ref(null)
    const setHeightMax = ref('')
    onMounted(()=>{
      // 获取最高高度
      const maxHeightArray = [boxOne.value.offsetHeight,boxTwo.value.offsetHeight,boxThree.value.offsetHeight]
      const max = Math.max(...maxHeightArray)
      console.log(max)
      nextTick(()=>{
        setHeightMax.value = max
      })
      // console.log(boxOne.value,'boxOne')
      // console.log(document.getElementById('box-one'))
    })
      return {
        setHeightMax,
        boxOne,
        boxTwo,
        boxThree,
        attrs,    // Attribute (非响应式对象，等同于 attrs)，有状态，会随组件本身的更新而更新
        slots,
        emit,     // 触发事件 (方法，等同于 emit)
        expose,   // 暴露公共 property (函数)
      }
    },
    
  
    methods:{
    
    }
  });
  </script>
  
  <style lang="less" scoped>
  .heightv{
    width: 800px;
    display: flex;
    text-align: center;
    margin: 0 auto;
    .box1 {
      width: 100px;
      height: 600px;
      background-color: pink;
    }
    .box2{
      width: 100px;
      height: 120px;
      background-color: skyblue;
    }
    .box3{
      width: 100px;
      background-color: #2f5577;
    }
  }
  </style>