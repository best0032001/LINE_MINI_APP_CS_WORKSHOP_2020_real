<template>
  <v-bottom-navigation app fixed grow color="primary">
    <v-btn value="code" :to="{ name: 'News' }">
      <span>News</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn value="favorites" :to="{ name: 'Qrkeep' }">
      <span>QR KEEP</span>
      <v-icon>mdi-email</v-icon>
    </v-btn>
    <v-btn value="Scan" :to="{ name: 'Scan' }">
      <span>Scan</span>
      <v-icon>mdi-arrow-up-bold-box-outline</v-icon>
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
