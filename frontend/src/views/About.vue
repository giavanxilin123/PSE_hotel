<template>
  <div class="about">
    <div>
      {{task}}
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      task : []
    }
  },
  created(){
    axios.get('http://localhost:3000/api/products')
    .then(res => this.task = res.data)
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style >
  .about .el-button {
    cursor: pointer !important;
    
  }
</style>
