<template>
  <header>
    <span></span>
    <h1>Chicken Music</h1>
  </header>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/variable.styl';
  @import '../../common/stylus/mixin.styl';
  header
    height 44px
    text-align center
    color $color-theme
    span
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      bg-image('logo')
      background-size: 30px 32px
    h1
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
  
</style>



