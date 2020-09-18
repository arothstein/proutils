<template>
  <q-page class="flex">
    <div class="q-pa-md full-width full-height column">
      <div class="row">
        <div class="col-12">
          <h1 class="text-h3">My public IP</h1>
          <p
            class="text-subtitle1 text-grey-14"
          >The IP address the Internet sees as the source of your traffic.</p>
          <p>If you don't see an IP displayed, you may need to temporarily disable your AdBlocker, particularly uBlock Origin.</p>
          <MyPublicIp></MyPublicIp>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "MyPublicIpPage",

  components: {
    MyPublicIp: require("../components/MyPublicIp.vue").default
  }
};
</script>