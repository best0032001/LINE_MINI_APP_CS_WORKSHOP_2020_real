<template>
  <div class="news">
    <v-container fluid grid-list-lg>
      <v-dialog max-width="100%" v-model="detail">
        <v-card>
          <v-card-title>
            <span class="headline">  {{ detail_title }}</span>
          </v-card-title>

          <v-card-text> 
            <v-card class="pa-3" color="#eeeeee" outlined>
             {{ detail_deteil }}
            </v-card>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-layout row wrap>
        <v-flex xs12 v-for="item in items" :key="item.id">
          <v-card>
            <v-container fluid grid-list-lg>
              <v-layout
                row
                @click="goDetail(item.title, item.deteil, item.imagelink)"
              >
                <v-flex xs9>
                  <div>
                    <div class="subheading font-weight-medium">
                      {{ item.title }}
                    </div>
                  </div>
                </v-flex>
                <v-flex xs3>
                  <v-img
                    :src="`${item.imagelink}`"
                    height="72px"
                    transition="false"
                  ></v-img>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
 
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "news",
  data() {
    return {
      items: [],
      detail: false,
      detail_title: "",
      detail_deteil: "",
      detail_imagelink: "",
    };
  },
  async mounted() {
    this.news();
  },
  methods: {
    goDetail(title, deteil, imagelink) {
      this.detail_title = title;
      this.detail_deteil = deteil;
      this.detail_imagelink = imagelink;
      this.detail = true;
    },
    async news() {
      const url = "https://mobileapi.cmu.ac.th/api/CSWorkShop/news";
      const headers = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      let response = await axios.get(url, headers);
      if (response.status == 200) {
        this.items = response.data.data;
        //alert(response.status);
      }
    },
  },
};
</script>
