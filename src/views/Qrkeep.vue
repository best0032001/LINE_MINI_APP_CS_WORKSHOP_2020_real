<template>
  <div class="qrkeep">
    <v-dialog v-model="loading" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          loading ...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-container fluid grid-list-lg>
      <v-dialog max-width="100%" v-model="detail">
        <v-card>
          <v-card-title>
            <span class="headline"> {{ text }}</span>
          </v-card-title>

          <v-card-text>
            <v-card class="pa-3" color="#eeeeee" outlined>
              {{ qrlink }}
            </v-card>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-layout row wrap>
        <v-flex xs12 v-for="item in items" :key="item.id">
          <v-card>
            <v-container fluid grid-list-lg>
              <v-flex xs9>
                <div>
                  <div class="subheading font-weight-medium">
                    {{ item.booksdn }}
                  </div>
                </div>
              </v-flex>
              <v-flex xs3>
                <v-btn
                  color="primary"
                  v-on:click="goDetail(item.booksdn,item.bookname)"
                  rounded
                  outlined
                  small
                >
                  View
                </v-btn>
              </v-flex>
              <v-flex xs3>
                <v-btn
                  color="primary"
                  v-on:click="onDelete(item.id)"
                  rounded
                  outlined
                  small
                >
                  delete
                </v-btn>
              </v-flex>
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
      loading: false,
      detail: false,
      text: "",
      qrlink: "",
    };
  },
  async mounted() {
    this.qrlist();
  },
  methods: {
    goDetail(text, qrlink) {
      this.text = text;
      this.qrlink = qrlink;
      this.detail = true;
    },
    async onView(id) {},
    async onDelete(id) {
      this.loading = true;
      const linetoken = "abcd"
      const url = "xxxxxxx" + id;
      const headers = {
        headers: {
          Authorization: linetoken,
          "Content-Type": "application/json",
        },
      };
      let response = await axios.delete(url, headers);
      if (response.status == 200) {
        await this.qrlist();
        //alert(response.status);
      }
      this.loading = false;
    },
    async qrlist() {
      this.loading = true;
      const linetoken = "abcd"
      const url = "xxxxxx";
      const headers = {
        headers: {
          Authorization:linetoken,
          "Content-Type": "application/json",
        },
      };
      let response = await axios.get(url, headers);
      if (response.status == 200) {
        this.items = response.data;
        //alert(response.status);
      }
      this.loading = false;
    },
  },
};
</script>