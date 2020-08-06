<template>
  <q-page class="flex">
    <div class="q-pa-md full-width full-height column">
      <div class="row">
        <div class="col-12">
          <h1 class="text-h3">IP Subnet Calculator</h1>
          <p
            class="text-subtitle1 text-grey-14"
          >Change the IP Address and CIDR Mask values to calculate the other values.</p>
          <IpSubnetCalc></IpSubnetCalc>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "IpSubnetCalcPage",

  components: {
    IpSubnetCalc: require("../components/IpSubnetCalc.vue").default
  }
};
</script>