<template>
  <div class="scan">
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
    <v-dialog v-model="dialog" max-width="100%">
      <v-card>
        <v-card-title>
          <span class="headline"> Add New QR LINK </span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field
                v-model="text"
                label="bookname"
                dense
                filled
                required
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="qrlink"
                label="booksdn"
                dense
                filled
                required
              />
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" x-large tile depressed v-on:click="save">
              Add
            </v-btn>
            <v-btn @click="Close" color="warning" x-large tile depressed>
              Close
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-container bg fill-height grid-list-md text-xs-center>
      <v-layout row wrap align-center>
        <v-flex>
          <v-row align="center">
            <v-col class="text-center" cols="12" sm="12">
              <div class="my-2">
                <v-btn v-on:click="scancode" large color="primary"
                  >Scan QR</v-btn
                >
              </div>
            </v-col>
          </v-row>
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
      loading: false,
      items: [],
      dialog: false,
      qrlink: "xxxx",
      text: "",
    };
  },
  async mounted() {
    this.Open();
  },
  methods: {
    scancode() {
      liff.scanCode().then((result) => {
        this.qrlink = JSON.stringify(result.value);
        this.dialog = true;
      });
    },
    Open() {
      this.dialog = true;
      //this.scancode();
      //this.save();
    },
    Close() {
      this.dialog = false;
    },
    async save() {
      this.loading = true;

      const linetoken = "abcd";
      const url = "xxxxxx";
      const headers = {
        headers: {
          Authorization: linetoken,
          "Content-Type": "application/json",
        },
      };
      let response = await axios.post(
        url,
        {
          bookname: this.text,
          booksdn: this.qrlink,
        },
        headers
      );
      console.log(response.status);
      this.loading = false;
      if (response.status == 200) {
        this.$router.push("/Qrkeep");
        //alert(response.status);
      }
    },
  },
};
</script>
