<template>
  <div class="window-height">
    <q-layout view="hHh Lpr lff" container class="shadow-2">
      <q-header elevated class="bg-primary">
        <q-toolbar class="rounded-borders">
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>我来组成管理的头部</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list v-for="(menuItem, index) in menuList" :key="index">

            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>

           <q-separator v-if="menuItem.separator" />

          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
const menuList = [
  {
    icon: 'inbox',
    label: 'Banner图管理',
    separator: true
  },
  {
    icon: 'send',
    label: '第一部分管理',
    separator: false
  },
  {
    icon: 'delete',
    label: '数字展示部分管理',
    separator: false
  },
  {
    icon: 'error',
    label: '第三部分管理',
    separator: true
  },
  {
    icon: 'settings',
    label: '第四部分管理',
    separator: false
  }
]

export default {
  data () {
    return {
      drawer: false,
      menuList
    }
  }
}
</script>
