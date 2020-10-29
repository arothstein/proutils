<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <h2 class="text-grey-14">{{ ipResults.ip }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <q-card>
          <q-card-section class="bg-primary text-white">
            <div class="text-h5">IP WHOIS Info</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div class="text-subtitle2">Network Name</div>
            <div>{{ whoisResults.net.name.$ }}</div>
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2">Organization</div>
            <div>{{ whoisResults.net.orgRef["@name"] }}</div>
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2">CIDR</div>
            <div>{{ whoisResults.net.startAddress.$ }}/{{ whoisResults.net.netBlocks.netBlock.cidrLength.$ }}</div>
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2">Net Range</div>
            <div>{{ whoisResults.net.startAddress.$ }} - {{ whoisResults.net.endAddress.$ }}</div>
          </q-card-section>
          <q-card-section v-if="whoisResults.net.originASes !== undefined">
            <div class="text-subtitle2">Origin AS</div>
            <div>{{ whoisResults.net.originASes.originAS }}</div>
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2">Type</div>
            <div>{{ whoisResults.net.netBlocks.netBlock.description.$ }}</div>
          </q-card-section>
          <q-card-section v-if="whoisResults.net.registrationDate">
            <div class="text-subtitle2">Registration Date</div>
            <div>{{ whoisResults.net.registrationDate.$ | formatDate }}</div>
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle2">Last Updated</div>
            <div>{{ whoisResults.net.updateDate.$ | formatDate }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      ipResults: {
        ip: "",
      },
      showResults: false,

      whoisResults: {
        net: {
          startAddress: null,
          endAddress: null,
          name: null,
          registrationDate: null,
          updateDate: null,
          netBlocks: {
            netBlock: {
              cidrLength: null,
              description: null,
            },
          },
          customerRef: {
            "-name": null,
          },
          orgRef: {
            "-name": null,
          },
          originASes: {
            originAS: null,
          },
        },
      },
    };
  },

  methods: {
    getIPAndWHOIS() {
      // chain the public IP and WHOIS information

      this.$axios.get("/public-ip").then((res) => {
        this.ipResults = res.data;
        this.showResults = true;
        this.$axios.get("/ip-whois/" + this.ipResults.ip).then((res) => {
          console.log(res);
          this.whoisResults = res.data;
          this.showResults = true;
        });
      });
    },
  },

  filters: {
    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY");
      }
    },
  },

  created() {
    this.getIPAndWHOIS();
  },
};
</script>