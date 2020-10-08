<template>
  <component :is="tag" :class="size">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'CustomLabel',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    size: {
      type: String,
      default: 'normal',
      validator: function(value) {
        return ['normal'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style scoped>
.normal {
  font-size: 22px;
  font-weight: bold;
  margin-top: 10px;
  color: cornflowerblue;
}
</style>