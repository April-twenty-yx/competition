<template>
  <div>
    <q-card class="q-pb-xl no-shadow">
      <q-card-section>
        <slot name="title">
          <div class="text-black title text-center relative-position q-ma-xl">
            {{ partTitle }}
            <div class="segment"></div>
          </div>
        </slot>
        <slot name="main">
          <div class="row q-col-gutter-md total">
            <div class="col-3" v-for="(item, index) in desArray" :key="item._id">
              <q-card
                class="descard shadow-2"
                @mouseenter="showChange(index)"
                :class="{ 'shadow-8': index === currentIndex }"
                @mouseleave="origin"
              >
                <div class="flex flex-center">
                  <q-avatar class="" size="60px">
                    <img src="../../assets/书籍.svg">
                  </q-avatar>
                </div>
                <q-card-section>
                  <div class="text-h6 text-center">{{ item.title }}</div>
                </q-card-section>
                <q-card-section class="q-pt-none text-weight-light">
                  {{ item.des }}
                </q-card-section>
              </q-card>
            </div>
          </div>
        </slot>
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
    desArray: {
      type: Array,
      default () {
        return []
      }
    }
  },
  component: {
  },
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      currentIndex: 0
    }
  },
  methods: {
    showChange (value) {
      console.log('aa')
      this.currentIndex = value
    },
    origin () {
      this.currentIndex = ''
    }
  }
}
</script>

<style lang="stylus" scope>
.title
  font-size 20px
.segment
  width 100px
  height 4px
  background linear-gradient(to right, #0C7BB3, #F2BAE8)
  margin 0 auto
.total
  width 70vw
  margin 0 auto
</style>
