<template>
  <article class="emblem-portrait">
    <slot>
      <span class="default-content">This will only be displayed if there is no content to be distributed.</span>
    </slot>
  </article>
</template>

<script>
export default {
  name: 'EmblemPortrait',
};
</script>

<style scoped>

.emblem-portrait {
  background-color: #f9f9f9;
  height: 300px;
  width: 250px;
  display: inline-block;
  padding: 10px;
  margin: 5px 10px;
  box-shadow: 6px 6px 15px #ccc;
}

.default-content {
  display: block;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}

</style>
