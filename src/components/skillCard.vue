<template>
  <div       :style="boxShadow"
>
    <v-card
      shadow
      :max-width="isMobile ? mobileWidth : 700"
      class="skills-card-dark "
      :class="isMobile ? 'mobile-skills-card' : ''"
      v-show="show"
      flat
    >
      <div
        class="justify-center"
        style="display: flex; padding-top: 2em !important"
      >
        <v-img
          :max-height="icon.size"
          :max-width="icon.size"
          :src="require('@/assets/' + icon.filename + '')"
        >
        </v-img>
      </div>
      <v-card-title
        class="justify-center skills-card-header-dark py-2 font-weight-regular"
        >{{ title }}
      </v-card-title>

      <v-card-text class="mt-1 pb-0 pr-0">
        <div v-for="skill in skillsData" :key="skill.value">
          <div v-if="!skill.isUgly && skill.data" class="mt-4">
            <Skills :icon="skill.data"></Skills>
          </div>
          <div v-else-if="skill.data" class="mt-1">
            <UglySVGs :value="skill.data"> </UglySVGs>
          </div>
          <div v-if="skill.empty">
            <br />
          </div>
        </div>
        <!-- <br v-show="!isMobile" /> -->
      </v-card-text>
    </v-card>
  </div>
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
    icon: {
      type: Object,
      required: true,
    },
     boxShadow: {
      type: String,
      required: true,
    },
  },

  beforeMount() {
    this.getLanguages();
  },

  methods: {
    getLanguages() {
      this.skills.forEach((skill) => {
        if (!skill.isUgly) {
          skill.data = this.icons.get(skill.value);
        }
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
  /* margin-right: 10px; */
}

.skills-card-dark {
  background: rgba(13, 21, 26, 1);
  /* background: transparent; */

  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  width: 28em;
  height: 41em;
  /* margin-right: 10px; */
}

.skills-card-header {
  background: var(--primaryColor);
  color: var(--primaryTextColor);
  border-bottom: 3px solid rgb(24, 32, 43);
}

.skills-card-header-dark {
  background: rgba(13, 21, 26, 1);
  /* background: transparent; */
  margin-top: 1em;
  margin-bottom: 1.5em;
  color: rgb(32, 202, 92) !important;
  color: white !important;
  /* border-bottom: 3px solid rgb(24, 32, 43); */
  font-size: 1.7em;
  text-decoration: none;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  font-weight: 300 !important;
}
</style>
