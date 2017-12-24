<template>
  <div id="nfrtt-logo" class="logo-container">
    <div class="logo-shape">
      <div class="top-triangles">
        <div class="triangle-one" />
        <div class="triangle-two" />
        <div class="triangle-three" />
      </div>
      <div class="bottom-triangles">
        <div class="triangle-four" />
      </div>
    </div>
    <div class="logo-copy">
      <span class="pale-yellow char1">N</span>
      <span class="deep-pink char2">F</span>
      <span class="lime-green char3">R</span>
      <span class="dark-purple char4">T</span>
      <span class="dark-orange char5">T</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NrfttLogo',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo-container {
  font-family: 'Bungee', cursive;
  font-size: 60px;
  position: relative;
  width: 400px;
  margin: 15px auto;
}

.logo-copy {
  text-align: center;
}

.logo-shape {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.top-triangles, .bottom-triangles {
  display: flex;
}

.triangle-one {
  height: 0;
  width: 0;
  border-right: 75px solid transparent;
  border-left: 75px solid transparent;
  border-bottom: 100px solid #505050;
}

.triangle-two {
  height: 0;
  width: 0;
  margin-left: -75px;
  border-right: 75px solid transparent;
  border-left: 75px solid transparent;
  border-top: 100px solid #686868;
}

.triangle-three {
  height: 0;
  width: 0;
  margin-left: -75px;
  border-right: 75px solid transparent;
  border-left: 75px solid transparent;
  border-bottom: 100px solid #808080;
}

.triangle-four {
  height: 0;
  width: 0;
  border-right: 150px solid transparent;
  border-left: 150px solid transparent;
  border-top: 150px solid #404040;
}
</style>
