<template>
  <div class="home">
    <div class="carousel"></div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  
}
</script>

<style scoped>
  .carousel{
    background: url(../assets/homepage-carousel.jpeg);
    height: 785px;
    background-size: cover;
    background-position: center;
  }
</style>
