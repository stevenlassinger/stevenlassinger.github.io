<template>
<v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
  <v-app v-on:scroll.passive="onScroll">
    <div>
      <!-- v-if="!isMobile" -->
      <v-app-bar
        ref="appbar"
        dark
        max-height="56px"
        fixed
        id="appbar"
        style="
          border-bottom: 3px solid #18202b;
          z-index: 5;
          background: linear-gradient(to right, #566bc7, #8b62de);
        "
        :style="isMobile ? 'padding-left: 0px;' : ''"
      >
        <v-btn class="mb-2" text color="var(--primaryColor)">
          <router-link to="/">
            <v-icon class="pl-1">mdi-arrow-left-bold</v-icon> Back</router-link
          >
        </v-btn>
      </v-app-bar>
    </div>
    <div class="container mt-10">
      <header class="mdi-filled font-weight-light mt-10 text-h2 px-3">
        Resume
      </header>
      <div class="education">
        <v-row>
          <v-col cols="12">
            <v-card class="card mx-auto" flat>
              <v-card-title
                class="font-weight-regular"
                :class="isMobile ? 'mt-0 pt-0' : 'mt-8'"
                :style="
                  isMobile
                    ? 'font-size: 1.5rem !important;padding-bottom:0px!important'
                    : 'font-size: 2.525rem !important'
                "
              >
                Education
              </v-card-title>
              <div class="text--primary px-4">
                <v-row no-gutters>
                  <v-col cols="8">
                    <v-card class="pt-2" flat>
                      <div
                        class="text-h5 font-weight-regular"
                        :style="isMobile ? 'font-size: 1.1rem !important' : ''"
                      >
                        University of Maryland
                      </div>
                      <div
                        :style="
                          isMobile
                            ? 'font-size: .9rem !important'
                            : 'font-size: 1.2rem'
                        "
                      >
                        Bachelors of Science in Computer Science
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card
                      class="text-h5 font-weight-regular"
                      :class="isMobile ? ' py-2 pr-0 pl-2' : 'pa-2'"
                      :style="
                        isMobile
                          ? 'font-size: 1rem !important'
                          : 'font-size: 1.2rem'
                      "
                      flat
                    >
                      2015 - 2018
                    </v-card>
                  </v-col>
                  <v-col cols="8">
                    <v-card class="pt-2" flat>
                      <div
                        class="text-h5 font-weight-regular"
                        :style="isMobile ? 'font-size: 1.1rem !important' : ''"
                      >
                        Anne Arundel Community College
                      </div>
                      <div
                        :style="
                          isMobile
                            ? 'font-size: .9rem !important'
                            : 'font-size: 1.2rem'
                        "
                      >
                        General Studies
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card
                      class="text-h5 font-weight-regular"
                      :class="isMobile ? ' py-2 pr-0 pl-2' : 'pa-2'"
                      :style="
                        isMobile
                          ? 'font-size: 1rem !important'
                          : 'font-size: 1.2rem'
                      "
                      flat
                    >
                      2014 - 2015
                    </v-card>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <v-divider :class="isMobile ? 'mb-0' : 'mb-4'"></v-divider>
      <div class="work-experience">
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto card" flat>
              <v-card-title
                class="font-weight-regular"
                :class="isMobile ? 'mt-0 pt-0' : 'mt-8'"
                :style="
                  isMobile
                    ? 'font-size: 1.5rem !important;padding-bottom:0px!important'
                    : 'font-size: 2.525rem !important'
                "
              >
                Experience
              </v-card-title>
              <div class="text--primary px-4">
                <v-row no-gutters>
                  <v-col cols="8" class="mb-3 pt-2">
                    <v-card class="" flat>
                      <div
                        class="text-h5 font-weight-regular"
                        :style="isMobile ? 'font-size: 1.1rem !important' : ''"
                      >
                        Amches Inc.
                      </div>
                      <div
                        :style="
                          isMobile
                            ? 'font-size: .9rem !important'
                            : 'font-size: 1.2rem'
                        "
                      >
                        Software Engineer
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="4" :class="isMobile ? 'pt-0' : 'pt-2'">
                    <div
                      class="text-h5 font-weight-regular"
                      :class="isMobile ? ' py-2 px-0 pb-0' : 'pa-2'"
                      :style="
                        isMobile
                          ? 'font-size: 1rem !important'
                          : 'font-size: 1.2rem'
                      "
                    >
                      2020 - Present
                    </div>
                    <div
                      :style="
                        isMobile
                          ? 'font-size: 1rem !important'
                          : 'font-size: 1.2rem'
                      "
                      :class="isMobile ? ' py-0 px-0' : 'px-2'"
                      class="font-weight-medium"
                    >
                      Tech Stack
                    </div>
                  </v-col>
                  <v-col cols="8">
                    <v-card class="" flat>
                      <div
                        :style="
                          isMobile ? 'font-size: .9rem' : 'font-size: 1rem'
                        "
                      >
                        Currently working with a team of UI developers to
                        develop and maintain the front-end of an RF collections
                        system. Developed and updated Vue components for the UI.
                        I've presented code demonstrations during sprint
                        meetings. I've integrated gRPC into the client which
                        improved data communication and removed the need for a
                        restful API within our node server. I've developed a
                        scalable visualization of real-time RF over a radio
                        spectrum.
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card
                      :class="isMobile ? 'px-0' : 'px-2'"
                      :style="isMobile ? 'font-size: .9rem' : 'font-size: 1rem'"
                      flat
                    >
                      Vue.js, Docker, Kubernetes MongoDB, Gitlab
                    </v-card>
                  </v-col>
                </v-row>
                <v-divider class="mt-7"></v-divider>

                <v-row no-gutters class="mt-8">
                  <v-col cols="8" class="mb-3">
                    <v-card class="" flat>
                      <div class="text-h5 font-weight-regular">
                        Minerva Engineering
                      </div>
                      <div style="font-size: 1.2rem" class="font-weight-medium">
                        Software Developer
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="4" :class="isMobile ? 'pt-0' : 'pt-2'">
                    <div
                      class="text-h5 font-weight-regular"
                      :class="isMobile ? ' py-2 px-0 pb-0' : 'pa-2'"
                      :style="
                        isMobile
                          ? 'font-size: 1rem !important'
                          : 'font-size: 1.2rem'
                      "
                    >
                      2018 - 2020
                    </div>
                    <div
                      :style="
                        isMobile
                          ? 'font-size: 1rem !important'
                          : 'font-size: 1.2rem'
                      "
                      :class="isMobile ? ' py-0 px-0' : 'px-2'"
                      class="font-weight-medium"
                    >
                      Tech Stack
                    </div>
                  </v-col>
                  <v-col cols="8">
                    <v-card class="" flat>
                      <div
                        :style="
                          isMobile ? 'font-size: .9rem' : 'font-size: 1rem'
                        "
                      >
                        Worked onsite at the Laboratory for Telecommunication
                        Science to support research in mobile phone development.
                        Developed and maintained both front-end and back-end
                        capabilities for a property management system which
                        greatly improved property speeds while also providing
                        the user with a detailed view of their inventory.
                        Developed front-end to visualize cellular network
                        properties in real-time which provides operators with a
                        realistic, geographical view of a cellular layout based
                        on location. Developed front-end that enables analysts
                        with real-time interaction to perform dynamic analysis
                        on multiple phones simultaneously. Developed a tool to
                        automate the process of scanning and archiving
                        information about a phone’s battery.
                      </div>
                    </v-card>
                  </v-col>
                  <v-col cols="4">
                    <v-card
                      :class="isMobile ? 'px-0' : 'px-2'"
                      :style="isMobile ? 'font-size: .9rem' : 'font-size: 1rem'"
                      flat
                    >
                      Nodejs, NGINX, Docker, MySQL, Gitlab, Snipe-IT
                    </v-card>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-app>
   </v-parallax>
</template>

<script>
export default {
  name: "Resume",

  data: () => ({
    isMobile: window.innerWidth < 480,
    mobileWidth: window.innerWidth * 0.9,
  }),

  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.name-title {
  caret-color: transparent;
  font-size: 2rem;
}

a {
  text-decoration: none;
  color: var(--primaryTextColor) !important;
  font-size: 2rem;
  font-weight: 100 !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
}

/* a:hover {
  background-color: #566bc7c2 !important;
} */

#appbar {
  position: fixed !important;
}
</style>
