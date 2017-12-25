<template>
  <div>
    <h1 class="headline">Welcome to the test homepage group!</h1>
    <EmblemPortrait/>
    <EmblemPortrait>
      <p>This portrait emblem with some actual content.</p>
    </EmblemPortrait>
  </div>
</template>

<script>
import EmblemPortrait from '@/components/EmblemPortrait';

export default {
  name: 'HomePage',
  components: { EmblemPortrait },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.headline {
  font-family: 'Bungee', cursive;
}

</style>
