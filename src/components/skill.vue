<template>
  <v-row no-gutters>
    <v-col cols="1" class="py-1">
      <svg class="icon" viewBox="0 0 128 128">
        <path
          v-for="path in icon.paths"
          :key="path.d"
          :d="path.d"
          :fill="path.fill"
        ></path>
      </svg>
    </v-col>
    <v-col
      cols="3"
      class="pl-3 pt-2 font-weight-bold font-italic"
      style="color: black; display: inline-flex"
    >
      {{ icon.value }}
    </v-col>
    <v-col v-if="icon.level == 1" cols="4" class="pt-2">
      <div class="rectangle proficient ml-2 mr-1"></div>
      <div class="rectangle proficient mr-1"></div>
      <div class="rectangle proficient mr-1"></div>
    </v-col>
    <v-col v-else-if="icon.level == 2" cols="4" class="pt-2">
      <div class="rectangle intermediate ml-2 mr-1"></div>
      <div class="rectangle intermediate mr-1"></div>
      <div class="rectangle mr-1"></div>
    </v-col>
    <v-col v-else-if="icon.level == 3" cols="4" class="pt-2">
      <div class="rectangle novice ml-2 mr-1"></div>
      <div class="rectangle mr-1"></div>
      <div class="rectangle mr-1"></div>
    </v-col>

    <v-col v-if="icon.level == 1" cols="4" class="font-weight-bold pt-2">
      proficient
    </v-col>
    <v-col
      v-else-if="icon.level == 2"
      cols="4"
      class="font-weight-bold pt-2"
    >
      intermediate
    </v-col>
    <v-col
      v-else-if="icon.level == 3"
      cols="4"
      class="font-weight-bold pt-2"
    >
      novice
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Skills",
  
  props: {
    icon: {
      type: Object,
      required: true,
    },
  },

  methods: {},
};
</script>

<style scoped>
.icon {
  height: 2em;
}

.rectangle {
  height: 10px;
  width: 25px;
  display: inline-flex;
  border-radius: 3px;
  background-color: gray;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 30%);
}

.proficient {
  background-color:rgb(105 230 105);
}

.intermediate {
  background-color:rgb(212 214 92);
}

.novice {
  background-color: rgb(224 138 67);
}
</style>
