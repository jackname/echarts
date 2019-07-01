<template>
  <ul>
    <li><router-link to="/pie">普通饼图</router-link></li>
    <li><router-link to="/pieG">动效饼图</router-link></li>
    <li><router-link to="/bar">动效柱状图</router-link></li>
    <li><router-link to="/bar1">动效柱状图2</router-link></li>
    <li></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
    };
  },
 
  mounted() {
    
  },
 
};
</script>


<style type="text/scss">
ul,li{
  margin:0;
  padding:0;
}
</style>
