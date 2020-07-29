<template>
  <div>
    <div class="bg flex justify-center items-center row q-gutter-x-md relative-posiition">
      <div class="col-2 text-center text-white" v-for="item in numArray" :key="item._id">
        <div>
          <div class="number">
            {{ item.num }}
          </div>
          <div class="des">
            {{ item.des }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    numArray: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.bg
  background rgb(45,62,80)
  height 100px
.number
  font-size 35px
.des
  font-size 12px
</style>
