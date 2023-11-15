<template>
  <div>
    <h1>2. 请举出三种垂直居中的⽅法，并⽤代码实现</h1>
    <button @click="fn(1)">第一种方法</button>
    <button @click="fn(2)">第二种方法</button>
    <button @click="fn(3)">第三种方法</button>
    <first-methods v-if="firstShow"></first-methods>
    <second-method v-else-if="secondShow"></second-method>
    <third-method v-else-if="thirdShow"></third-method>
   
  </div>
</template>

<script>
import firstMethods from './component/firstMethods.vue'
import secondMethod from './component/secondMethod.vue'
import thirdMethod from './component/thirdMethod.vue'
export default {
  components: { firstMethods, secondMethod, thirdMethod },
  name: 'secondTest',
  data () {
    return {
      firstShow: false,
      secondShow: false,
      thirdShow: false
    }
  },
  methods:{
    fn(i){
      if(i==1){
        this.firstShow=true;
        this.secondShow=false;
        this.thirdShow=false
      }else if(i==2){
        this.firstShow=false;
        this.secondShow=true;
        this.thirdShow=false
      }else{
        this.firstShow=false;
        this.secondShow=false;
        this.thirdShow=true
      }
    }
  }
}
</script>

<style></style>
