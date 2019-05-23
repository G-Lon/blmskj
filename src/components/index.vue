<template>
  <div>
    <div class="sliders">
      <el-carousel height="380px">
        <el-carousel-item>
          <img src="../images/charisma.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../images/tree.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../images/girl.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../images/boy.jpg" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sliderData: [
        { path: '../images/charisma.jpg' },
        { path: '../images/tree.jpg' },
        { path: '../images/girl.jpg' },
        { path: '../images/boy.jpg' },
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
}
</style>
