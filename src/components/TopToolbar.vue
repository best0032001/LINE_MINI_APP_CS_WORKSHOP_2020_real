<template>
  <div>
    <v-navigation-drawer app fixed v-model="drawer">
      <v-card class="mx-auto" max-width="100%" tile>
        <v-img
          height="100%"
          src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
        >
          <v-row align="end" class="fill-height">
            <v-col align-self="start" class="pa-0" cols="12">
              <v-avatar class="profile" color="grey" size="164" tile>
                <v-img :src="getPhoto()"></v-img>
              </v-avatar>
            </v-col>
            <v-col class="py-0">
              <v-list-item color="rgba(0, 0, 0, .4)" dark>
                <v-list-item-content>
                  <v-list-item-title class="title">{{
                    lineprofile.displayName
                  }}</v-list-item-title>
                  <v-list-item-subtitle
                    >{{ lineprofile.statusMessage }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
      10
    </v-navigation-drawer>

    <v-app-bar app fixed dark color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>LINE MINI APP</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "TopToolbar",
  data: () => ({
    drawer: null,
    lineprofile: {
      userId: "",
      displayName: "",
      pictureUrl: "https://cdn.vuetifyjs.com/images/profiles/marcus.jpg",
      statusMessage: "",
    },
  }),
  mounted() {
    this.$liff.init(
      { liffId: "xxxxx" },
      () => {
        if (this.$liff.isLoggedIn()) {
          console.log("isLoggedIn");
        } else {
          this.$liff.login();
        }
        this.getLineProfile();
      },
      (err) => console.error(err.code)
    );
  },
  methods: {
    getPhoto() {
      return this.lineprofile.pictureUrl;
    },
    getLineProfile() {
      let _this = this;
      this.$liff
        .getProfile()
        .then(function(profile) {
          _this.lineprofile = profile;
          //_this.lineprofile.pictureUrl="\""+_this.lineprofile.pictureUrl+"\""
          //alert(_this.lineprofile.pictureUrl);
        })
        .catch(function(error) {
          alert("Error getting profile: " + error);
        });
    },
  },
};
</script>
