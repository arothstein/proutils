<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4 q-pb-xl">
        <div class="col-4 col-xs-12 col-sm-6">
          <q-input v-model.trim="ipAddress" label="IP address"></q-input>
        </div>
        <div class="col-4 col-xs-12 col-sm-6">
          <q-select v-model="cidrMask" :options="cidrMaskOptions" label="CIDR mask"></q-select>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-4">
        <q-card>
          <q-card-section class="bg-primary text-white">
            <div class="text-h5">Network info</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-subtitle1 text-grey-14 q-pb-xs">Subnet mask</q-item-label>
                  <q-item-label>{{ cidrNetDetails.mask }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-subtitle1 text-grey-14 q-pb-xs">Number of hosts</q-item-label>
                  <q-item-label>{{ cidrNetDetails.numberHosts }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-subtitle1 text-grey-14 q-pb-xs">Usable address range</q-item-label>
                  <q-item-label>{{ cidrNetDetails.firstHostAddress }} - {{ cidrNetDetails.lastHostAddress}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-subtitle1 text-grey-14 q-pb-xs">Network ID</q-item-label>
                  <q-item-label>{{ cidrNetDetails.networkAddress }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-subtitle1 text-grey-14 q-pb-xs">Broadcast address</q-item-label>
                  <q-item-label>{{ cidrNetDetails.broadcastAddress }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import * as ip from "ip-utils";

export default {

    data: function() {
        return {
            ipAddress: "10.1.1.1",
            cidrMask: "24"
        }
    },

    computed: {
        cidrMaskOptions: function() {
            var options = [];
            for (var i=8; i<=30; i++) {
                options.push(i);
            }
            return options;
        },

        cidrNetDetails: function() {
            var network = this.ipAddress + "/" + this.cidrMask;
            return ip.cidrInfo(network);
        }
    }
};
</script>