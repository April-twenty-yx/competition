<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar class="bg-white relative-position">
        <q-btn
          flat
          dense
        >
          <q-avatar square>
            <img src="../assets/千图网.svg">
          </q-avatar>
          <q-toolbar-title class="text-black">
          千图网
          </q-toolbar-title>
        </q-btn>

        <q-input v-model="text" label="Search" filled dense class="input absolute-center">
          <template v-slot:append>
            <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
            <q-btn dense flat icon="search"/>
          </template>
        </q-input>

        <q-space />
        <div class="text-black">
          <div class="">
            <q-breadcrumbs gutter="xs" active-color="primary">
              <q-breadcrumbs-el to="#第一部分" label="第一部分"/>
              <q-breadcrumbs-el label="关于我们" to="#2" />
              <q-breadcrumbs-el label="主要业务" to="/vue-components/breadcrumbs" />
              <q-breadcrumbs-el label="图书中心" to="/vue-components" />
            </q-breadcrumbs>
          </div>
        </div>
      </q-toolbar>

    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data () {
    return {
      text: ''
    }
  }
}
</script>

<style lang="stylus">
  .input
    width 35vw
</style>
