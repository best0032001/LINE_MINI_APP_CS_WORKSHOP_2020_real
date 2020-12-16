<template>
  <v-bottom-navigation app fixed grow color="primary">
    <v-btn value="code" :to="{ name: 'News' }">
      <span>News</span>
      <v-icon>code</v-icon>
    </v-btn>

    <v-btn value="favorites" :to="{ name: 'Qrkeep' }">
      <span>QR KEEP</span>
      <v-icon>favorite</v-icon>
    </v-btn>
    <v-btn value="Scan" :to="{ name: 'Scan' }">
      <span>Scan</span>
      <v-icon>qr_code_scanner</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNav",
  data: () => ({
    drawer: null,
  }),
};
</script>
