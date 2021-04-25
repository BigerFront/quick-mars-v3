<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-if="false" class="line">
      <svg-icon icon-class="info" size="xsmall" />
      <span>hello</span>
      <svg-icon icon-class="error" size="small" />
      <span style="font-size: 1.5rem">hello</span>
      <svg-icon icon-class="fail" />
      <svg-icon icon-class="warn-circle" size="large" />
      <svg-icon icon-class="info" size="xlarge" />
      <svg-icon icon-class="success" size="xlarge" />
    </div>
  </div>
</template>
<style scoped>
.line {
  border: 1px solid red;
}
</style>
