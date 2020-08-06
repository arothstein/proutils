<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>ProUtils</q-toolbar-title>
        <q-btn flat round dense icon="fab fa-github" @click="gotoGitHub" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <LeftDrawer></LeftDrawer>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: "MainLayout",

  data() {
    return {
      leftDrawerOpen: false
    };
  },

  components: {
    LeftDrawer: require("components/LeftDrawer.vue").default
  },

    methods: {
    gotoGitHub() {
      openURL("https://github.com/arothstein/proutils");
  }
  }
};
</script>
