<template>
  <q-list>
    <q-item-label header class="text-grey-8">Utilities</q-item-label>
    <q-expansion-item expand-separator icon="settings_ethernet" label="Network">
      <q-item clickable v-ripple to="/ip-subnet-calculator">
        <q-item-section>IP Subnet Calculator</q-item-section>
      </q-item>
    </q-expansion-item>
    <q-expansion-item expand-separator icon="lock" label="Security">
      <q-item clickable v-ripple to="/passphrase-generator">
        <q-item-section>Passphrase Generator</q-item-section>
      </q-item>
    </q-expansion-item>
    <q-item-label header class="text-grey-8">About</q-item-label>
  </q-list>
</template>

<script>
export default {
  name: "DrawerMenu"
};
</script>