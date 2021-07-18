<template>
  <v-app v-on:scroll.passive="onScroll" style="background:#162129!important">
    <v-container fluid pa-0>
      <v-row align="center" justify="center" style="height: 100vh" dense>
        <v-col
          cols="12"
          lg="6"
          md="6"
         
          class="
            lighten-2
            fill-height
            d-flex
            flex-column
            justify-center
            align-center
          "
        >
          <v-card flat class="justify-center"  style="background:#162129!important">
            <v-img
              max-height="250"
              max-width="250"
              src="../assets/develop-icon-3.jpg"
            ></v-img>
          </v-card>
          <v-card flat  style="background:#162129!important; color:white; ">
            <v-card-title style="word-break: normal; font-size:1em;font-weight:300">
              The mobile version is currently under construction. Until then, consider viewing my site on a desktop :(
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "MobileNotice",
};
</script>

<style scoped>
</style>
