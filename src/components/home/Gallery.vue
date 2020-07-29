<template>
  <div>
    <q-card class="q-pb-xl no-shadow bigcard">
      <q-card-section>
        <div class="text-black title text-center relative-position q-ma-xl">
          {{ partTitle }}
          <div class="segment"></div>
        </div>
        <div class="carousel">
          <q-carousel
            v-model="slide"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            navigation
            arrows
            height="400px"
            class="bg-grey-1 shadow-2 rounded-borders"
          >
            <q-carousel-slide :name="index + 1" class="column no-wrap" v-for="(item, index) in TDArray" :key="item._id">
              <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
                <q-img class="rounded-borders col-6 full-height" v-for="n in item" :key="n._id" :src="n.src">
                <div class="absolute-bottom text-center">
                  {{ n.des }}
                </div>
                </q-img>
              </div>
            </q-carousel-slide>
          </q-carousel>
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
    TDArray: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      slide: 1
    }
  }
}
</script>

<style lang="stylus" scoped>
.bigcard
  background rgb(244, 244, 244)
.title
  font-size 20px
.segment
  width 100px
  height 4px
  background linear-gradient(to right, #0C7BB3, #F2BAE8)
  margin 0 auto
.carousel
  width 80vw
  margin 0 auto
</style>
