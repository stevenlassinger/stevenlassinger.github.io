<template>
  <v-card
    shadow
    :max-width="isMobile ? mobileWidth : 374"
    class="skills-card"
    :class="isMobile ? 'mobile-skills-card' : ''"
    v-show="show"
  >
    <v-card-title
      class="justify-center skills-card-header py-2 font-weight-regular"
      >{{ title }}
    </v-card-title>

    <v-card-text class="mt-1 pb-0 pr-0">
      <div v-for="skill in skillsData" :key="skill.value">
        <div v-if="!skill.isUgly">
          <Skills :icon="skill.data"></Skills>
        </div>
        <div v-else>
          <UglySVGs :value="skill.data"> </UglySVGs>
        </div>
        <div v-if="skill.empty">
          <br>
        </div>
      </div>
      <!-- <br v-show="!isMobile" /> -->
    </v-card-text>
  </v-card>
</template>

<script>
import Skills from "./skill.vue";
import UglySVGs from "./uglySVGs.vue";

export default {
  name: "SkillCard",
  components: {
    Skills: Skills,
    UglySVGs: UglySVGs,
  },
  data: () => ({
    skillsData: [],
  }),

  props: {
    icons: {
      type: Map,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isMobile: {
      type: Boolean,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
    skills: {
      Object,
      required: true,
    },
  },

  beforeMount() {
    this.getLanguages();
  },

  methods: {
    getLanguages() {
      this.skills.forEach((skill) => {
        if (!skill.isUgly)
         skill.data = this.icons.get(skill.value);
        this.skillsData.push(skill);
      });
    },
  },
};
</script>

<style scoped>
.mobile-skills-card {
  margin-right: 0.6em !important;
  margin-left: 0px !important;
  margin-bottom: 1em !important;
}

.skills-card {
  background: white;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  width: 23em;
  margin-right: 10px;
}

.skills-card-header {
  background: var(--primaryColor);
  color: var(--primaryTextColor);
  border-bottom: 3px solid rgb(24, 32, 43);
}
</style>
