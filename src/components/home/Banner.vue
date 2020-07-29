<template>
  <div>
    <q-card>
      <div>
        <q-img
          :src="pSrc"
          :ratio="16/9"
          :height="fHeight"
        >
          <div class="absolute-full flex flex-center character" v-html="des">
          </div>
        </q-img>
      </div>
    </q-card>

  </div>
</template>

<script>
export default {
  props: {
    pHeight: {
      type: Number,
      default: 500
    },
    pSrc: {
      type: String,
      default: 'https://cdn.quasar.dev/img/parallax2.jpg'
    },
    pCha: {
      type: String,
      default: 'Caption'
    }
  },
  data () {
    return {
      ppCha: this.pCha
    }
  },
  computed: {
    fHeight () {
      return this.pHeight + 'px'
    },
    des () {
      var result = ''
      for (const i of this.ppCha.split('，')) {
        result = result + i + '<br/>'
      }
      return result
    }
  }
}
</script>

<style lang="stylus">
.img
  width 100%
.character
  font-size 22px
</style>
