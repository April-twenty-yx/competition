<template>
  <div>
    <q-card class="q-pb-xl no-shadow">
      <q-card-section>
        <div class="text-black title text-center relative-position q-ma-xl">
          {{ partTitle }}
          <div class="segment"></div>
        </div>
        <div class="">
          <div class="">
            <div class="inline card shadow-4">
              <q-card>
                <q-card-section>
                  {{ introCha }}
                </q-card-section>
              </q-card>
            </div>
            <div class="inline">
              <q-img :ratio="4/3" :src="introSrc" width="25vw"></q-img>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    partTitle: {
      type: String,
      default: '#'
    },
    introCha: {
      type: String,
      default: ''
    },
    introSrc: {
      type: String,
      default: '#'
    }
  }
}
</script>

<style lang="stylus" scoped>
.title
  font-size 20px
.segment
  width 100px
  height 4px
  background linear-gradient(to right, #0C7BB3, #F2BAE8)
  margin 0 auto
.inline
  display inline-block
.card
  width 50vw
  height auto
  position relative
  right -5vw
  z-index 2
  line-height 30px
  text-indent 2em
</style>
