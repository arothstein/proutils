<template>
  <div class="row">
    <div class="col-xs-12 col-md-6">
      <h2 class="text-grey-14">{{ ipResults.ip }}</h2>
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
      /*
        this.$axios.get('https://api64.ipify.org?format=json').then(res => {
        console.log(res);
        this.ipResults = res.data;
        });
        this.$axios.get('http://whois.arin.net/rest/ip/' + this.ipResults.ip).then(res => {
        console.log(res);
        });
        */
      /*axios.get("http://api.proutils.com/public-ip").then(res => {
        console.log(res);
        this.ipResults = res.data;}); */

      this.$axios.get("/public-ip").then((res) => {
        console.log(res);
        this.ipResults = res.data;
        /*this.$axios.get("/whois/" + this.ipResults.IP).then(res => {
        console.log(res);
        this.whoisResults = res.data;
        this.showResults = true;
      }); */
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