<template>
  <v-app v-on:scroll.passive="onScroll">
    <div v-if="!isMobile">
      <header class="landing-page">
        <div align="center" class="lp-actions">
          <div class="welcome"><font>Steve</font> // UI Developer</div>
          <div style="font-size: 2em" class="intro-bio">
            I've been a <b>UI developer </b>for the past 3 years. I am currently
            working out of the <b>DC</b>, <b>Maryland</b>, <b>Virginia</b> area.
            I enjoy building data driven UI's and learning new technologies. Hit
            <b>explore</b> to learn more about <b>me</b>!
          </div>
          <div class="custom-divider"></div>
          <v-hover v-slot:default="{ hover }">
            <v-btn
              class="mx-16 mt-2 white--text"
              icon
              :class="hover ? 'fb-hover' : ''"
              :href="'https://www.facebook.com/steven.lassinger'"
              target="_blank"
            >
              <v-icon :size="'3em'" class="elevation-24">
                {{ "mdi-facebook" }}
              </v-icon>
            </v-btn>
          </v-hover>
          <v-hover v-slot:default="{ hover }">
            <v-btn
              class="mx-16 mt-2 white--text"
              icon
              :class="hover ? 'linkedin-hover' : ''"
              :href="'https://www.linkedin.com/public-profile/in/steven-lassinger-b81339157?challengeId=AQEIhWYjpnCbIAAAAXdWrjwEyZT27iYWOiYHGB0ICJqlrM4GidKbFVBgwZE-Jy7juQSXk1nVZL2S0JWjwg3-PPD8PZZ2-UMFDg&submissionId=4817940b-6436-5f16-4ea5-3bc4d589850c'"
              target="_blank"
            >
              <v-icon :size="'3em'" class="elevation-24">
                {{ "mdi-linkedin" }}
              </v-icon>
            </v-btn>
          </v-hover>
          <v-hover v-slot:default="{ hover }">
            <v-btn
              class="mx-16 mt-2 white--text"
              :class="hover ? 'github-hover' : ''"
              icon
              :href="'https://github.com/stevenlassinger'"
              target="_blank"
            >
              <v-icon :size="'3em'" class="elevation-24">
                {{ "mdi-github" }}
              </v-icon>
            </v-btn>
          </v-hover>
          <v-card-actions class="justify-center">
            <v-btn
              v-on:click="explore()"
              class="explore-btn elevation-24"
              v-scroll-to="{ el: '.intro-section', offset: 1 }"
              large
              elevate-on-scroll="true"
            >
              <v-icon class="">mdi-chevron-down</v-icon>
              Explore
              <v-icon class="">mdi-chevron-down</v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </header>
    </div>
    <div v-if="isMobile">
      <v-spacer v-show="!isMobile"></v-spacer>
      <v-app-bar
        absolute
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
        class="elevation-6"
        style="background: linear-gradient(to right, #566bc7, #8b62de)"
      >
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              style="background: transparent; box-shadow: none; padding: 0px"
            >
              <v-app-bar-nav-icon
                class="mobile-nav-bar"
                color="white"
              ></v-app-bar-nav-icon>
            </v-btn>
          </template>
          <v-list justify="center">
            <v-list-item
              v-for="(item, index) in menu"
              :key="index"
              :to="item.title == 'Resume' ? '/resume' : ''"
              v-scroll-to="{ el: item.scrollToSection, offset: -50 }"
            >
              <v-icon>{{ item.icon }}</v-icon>
              <v-list-item-title class="pl-1">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>
    <div v-else>
      <v-app-bar
        inverted-scroll
        ref="appbar"
        dark
        short
        flat
        id="appbar"
        v-show="appbarShow"
        class="py-4"
        style="
          border-bottom: 3px solid #18202b;
          z-index: 5;
          top: 0px;
          background: #162129;
        "
      >
        <!-- <div class="name-title font-weight-thin ml-4">Steve</div> -->
        <!-- <v-spacer></v-spacer> -->

        <v-btn
          text
          v-scroll-to="{ el: '.intro-section', offset: -50 }"
          class="px-3"
        >
          <div class="font-weight-light">About Me</div>
          <v-icon class="pl-1">mdi-account</v-icon>
        </v-btn>
        <v-btn
          text
          v-scroll-to="{ el: '.skills-section', offset: -50 }"
          class="px-3"
        >
          <div class="font-weight-light">Skills</div>
          <v-icon class="pl-1">mdi-code-tags</v-icon>
        </v-btn>
        <v-btn
          text
          class="px-3"
          v-scroll-to="{ el: '.contact-section', offset: -50 }"
        >
          <div class="font-weight-light">Contact</div>
          <v-icon class="pl-1">mdi-email</v-icon>
        </v-btn>
        <v-btn text to="/resume" class="px-3"
          >Resume
          <v-icon class="pl-1">mdi-file-document</v-icon>
        </v-btn>
      </v-app-bar>
    </div>
    <!-- INTRO SECTION -->
    <section class="intro-section">
      <div
        class="is-body"
        :class="!isMobile ? 'container' : ''"
        :style="isMobile ? ' margin-top: 4em;' : ''"
      >
        <div
          class="text-h3 mb-2 mt-5"
          align="center"
          style="
            color: rgb(32, 202, 92) !important;
            letter-spacing: 0.0892857143em !important;
            font-family: 'Roboto', sans-serif !important;
          "
          :class="
            isMobile ? 'mobile-header font-weight-regular' : 'font-weight-light'
          "
          v-show="show"
        >
          <!-- About -->
        </div>
        <v-row class="ml-0" align="center" justify="center">
          <v-card
            shadow
            :max-width="isMobile ? mobileWidth : 374"
            style="
              background: var(--primaryColor);
              color: var(--primaryTextColor);
            "
            :style="isMobile ? 'margin-right: .6em;' : ''"
            v-show="show && isMobile"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img
              style="border-bottom: 3px solid rgb(24, 32, 43)"
              position="center center"
              height="28vh"
              src="../assets/bmoreAvatar.jpeg"
            ></v-img>
            <v-card-title>
              <div class="font-weight-regular" style="display: inline">
                Steve Lassinger
              </div>
              <div
                style="display: inline"
                class="font-weight-light font-italic text-subtitle-1"
              >
                FULL-STACK WEB DEVELOPER
              </div>
            </v-card-title>
            <v-divider
              class="mx-4"
              style="background: var(--primaryTextColor)"
            ></v-divider>

            <v-card-text class="pl-1">
              <v-row align="center" class="mx-0">
                <v-icon class="ml-2 mr-2 mdi-filled">mdi-briefcase</v-icon>
                <div class="font-weight-bold mr-4 mdi-filled">Company</div>
                <div class="info-value">InterImage</div>
              </v-row>
              <v-row align="center" class="mx-0">
                <v-icon class="ml-2 mr-2 mdi-filled">mdi-map-marker</v-icon>
                <div class="font-weight-bold mr-5 mdi-filled">Location</div>
                <div class="info-value">Annapolis, MD</div>
              </v-row>
              <v-row align="center" class="mx-0 mt-1">
                <v-icon class="pl-1 ml-1 mr-2 mdi-filled">mdi-school</v-icon>
                <div class="font-weight-bold mr-3 mdi-filled">Education</div>
                <div class="info-value">University of Maryland</div>
              </v-row>
              <v-row align="center" class="mx-0 mt-1">
                <v-icon class="pl-1 ml-1 mr-2 mdi-filled"
                  >mdi-book-open-page-variant</v-icon
                >
                <div class="font-weight-bold mr-10 mdi-filled">Major</div>
                <div class="info-value">B.S. Computer Science</div>
              </v-row>
              <v-row align="center" class="mx-0 mt-1">
                <v-icon class="pl-1 ml-1 mr-2 mdi-filled">mdi-email</v-icon>
                <div class="font-weight-bold mr-10 mdi-filled">Email</div>
                <div class="info-value">slassinger@yahoo.com</div>
              </v-row>
            </v-card-text>
          </v-card>

          <v-avatar size="250" class="lighten-2 mr-14">
            <img src="../assets/bmoreAvatar1.jpeg" alt="Steve" />
          </v-avatar>
          <v-card flat color="transparent" width="525">
            <v-card-title
              class="pl-2"
              style="
                font-size: 2em;
                color: white !important;
                font-family: eurostile, sans-serif !important;
              "
              >I'm Steve Lassinger</v-card-title
            >
            <v-card-text class="pl-0">
              <v-row align="center" class="mx-0 mt-1">
                <v-col col="6" class="px-0 py-1">
                  <v-icon
                    class="pl-1 ml-1 mr-1 mdi-filled"
                    style="display: inline-flex; color: #20ca5c !important"
                    >mdi-email</v-icon
                  >
                  <div
                    class="font-weight-bold mr-1 mdi-filled"
                    style="display: inline-flex; color: white !important"
                  >
                    Email
                  </div>
                  <div style="display: inline-flex; color: #dad8d8">
                    slassinger@yahoo.com
                  </div>
                </v-col>
                <v-col col="6" class="px-0 py-1">
                  <v-icon
                    class="pl-1 ml-1 mr-1 mdi-filled"
                    style="display: inline-flex; color: #20ca5c !important"
                    >mdi-book-open-page-variant</v-icon
                  >
                  <div
                    class="font-weight-bold mr-1 mdi-filled"
                    style="display: inline-flex; color: white !important"
                  >
                    Major
                  </div>
                  <div style="display: inline-flex; color: #dad8d8">
                    B.S. Computer Science
                  </div>
                </v-col>
              </v-row>
              <v-row align="center" class="mx-0 mt-1">
                <v-col col="6" class="px-0 py-1">
                  <v-icon
                    class="pl-1 ml-1 mr-1 mdi-filled"
                    style="display: inline-flex; color: #20ca5c !important"
                    >mdi-map-marker</v-icon
                  >
                  <div
                    class="font-weight-bold mr-1 mdi-filled"
                    style="display: inline-flex; color: white !important"
                  >
                    Location
                  </div>
                  <div style="display: inline-flex; color: #dad8d8">
                    Annapolis, MD
                  </div>
                </v-col>
                <v-col col="6" class="px-0 py-1">
                  <v-icon
                    class="pl-1 ml-1 mr-1 mdi-filled"
                    style="display: inline-flex; color: #20ca5c !important"
                    >mdi-school</v-icon
                  >
                  <div
                    class="font-weight-bold mr-1 mdi-filled"
                    style="display: inline-flex; color: white !important"
                  >
                    Education
                  </div>
                  <div style="display: inline-flex; color: #dad8d8">
                    University of Maryland
                  </div>
                </v-col>
              </v-row>
              <v-row align="center" class="mx-0 mt-1">
                <v-col col="6" class="px-0 py-1">
                  <v-icon
                    class="pl-1 ml-1 mr-1 mdi-filled"
                    style="display: inline-flex; color: #20ca5c !important"
                    >mdi-briefcase</v-icon
                  >
                  <div
                    class="font-weight-bold mr-1 mdi-filled"
                    style="display: inline-flex; color: white !important"
                  >
                    Company
                  </div>
                  <div style="display: inline-flex; color: #dad8d8">
                    InterImage
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="ma-2"
                style="color: rgb(32, 202, 92) !important"
                outlined
                href="./resume.pdf"
                download
              >
                <div style="color: white !important; text-transform: none">
                  Download Resume
                </div>
              </v-btn>
            </v-card-actions>
          </v-card>
          <!-- </transition>

          <transition name="slide-from-right"> -->

          <!-- </transition> -->
        </v-row>
      </div>
      <!-- SKILLS SECTION -->
    </section>
    <section class="skills-section">
      <div
        class="skills-body"
        :style="isMobile ? 'margin-bottom: 0px' : ''"
        :class="!isMobile ? ' ' : ''"
      >
        <!-- <div
          class="text-h3"
          :class="
            isMobile
              ? 'mobile-header font-weight-regular'
              : 'font-weight-light mb-2'
          "
        >
          Skills
        </div> -->
        <!-- <v-divider class="mb-4"></v-divider> -->

        <v-row class="ml-0" align="center" justify="center">
          <SkillCard
            :icons="icons"
            :show="show"
            :skills="languages"
            :isMobile="isMobile"
            :title="'Languages'"
            :icon="{ filename: 'code.png', size: 100 }"
            :boxShadow="'box-shadow: 0px 0px 10px black!important;'"
          >
          </SkillCard>
          <v-divider class="divider" vertical></v-divider>
          <SkillCard
            :icons="icons"
            :skills="frameworks"
            :show="show"
            :isMobile="isMobile"
            :title="'Frameworks'"
            :icon="{ filename: 'framework.png', size: 100 }"
            :boxShadow="'box-shadow: 0px 0px 10px black!important;'"
          >
          </SkillCard>
          <v-divider class="divider" vertical></v-divider>
          <SkillCard
            :icons="icons"
            :skills="development"
            :show="show"
            :isMobile="isMobile"
            :title="'Development'"
            :icon="{ filename: 'development.png', size: 100 }"
            :boxShadow="'box-shadow: 1px 0px 10px black!important;'"
          >
          </SkillCard>
        </v-row>
      </div>
    </section>

    <!-- CONTACT SECTION old -->
    <section
      class="contact-section1"
      :style="isMobile ? 'margin-bottom: 3em;' : ''"
      v-show="isMobile"
    >
      <div
        class="contact-body"
        :style="isMobile ? 'margin-top:0px; height: 80vh;' : ''"
        :class="!isMobile ? 'container' : ''"
      >
        <!-- <div class="text-h3 mb-2 contact-header font-weight-light" :class="
            isMobile ? 'mobile-header font-weight-regular' : 'font-weight-light'
          ">
                Contact Me
            </div> -->
        <!-- <v-divider class="mb-4"></v-divider> -->

        <div
          class="elevation-3"
          :class="isMobile ? 'mobile-form-container mt-3' : 'container1 mt-14'"
          style="background: linear-gradient(to right, #566bc7, #8b62de)"
        >
          <form class="contact-form" @submit.prevent="sendEmail">
            <label style="color: white">Name</label>
            <input
              type="text"
              v-model="name"
              name="name"
              placeholder="Your Name"
              class="form-input"
            />
            <label style="color: white">Email</label>
            <input
              type="email"
              v-model="email"
              name="email"
              placeholder="Your Email"
              class="form-input"
            />
            <label style="color: white">Message</label>
            <textarea
              name="message"
              v-model="message"
              cols="30"
              rows="5"
              placeholder="Message"
              class="form-input"
              style="resize: none"
            >
            </textarea>
            <input type="submit" value="Send" class="form-input" />
          </form>
        </div>
      </div>
    </section>
    <!-- CONTACT SECTION -->
    <section
      class="contact-section"
      :style="isMobile ? 'margin-bottom: 3em;' : ''"
    >
      <div
        class="contact-body"
        :style="isMobile ? 'margin-top:0px; height: 80vh;' : ''"
        :class="!isMobile ? 'container' : ''"
      >
        <div
          class="text-h3 mb-2 contact-header font-weight-light"
          :class="
            isMobile ? 'mobile-header font-weight-regular' : 'font-weight-light'
          "
          style="
            text-align: center;
            color: white;
            font-weight: 300 !important;
            font-family: 'eurostile', sans-serif !important;
          "
        >
          Contact Me
        </div>
        <div
          :class="isMobile ? 'mobile-form-container mt-3' : 'container1 mt-14'"
          style="background: transparent"
        >
          <form class="contact-form" @submit.prevent="sendEmail">
            <label style="color: white">Name</label>
            <input
              type="text"
              v-model="name"
              name="name"
              placeholder="Your Name"
              class="form-input-dark"
            />
            <label style="color: white">Email</label>
            <input
              type="email"
              v-model="email"
              name="email"
              placeholder="Your Email"
              class="form-input-dark"
            />
            <label style="color: white">Message</label>
            <textarea
              name="message"
              v-model="message"
              cols="30"
              rows="5"
              placeholder="Message"
              class="form-input-dark"
              style="resize: none"
            >
            </textarea>
            <input type="submit" value="Send" class="form-input-dark-submit" />
          </form>
        </div>
      </div>
    </section>

    <!-- FOOTER SECTION -->
    <section class="" style="background: #162129; padding-top: 5em">
      <v-footer
        style="background: #162129; margin-bottom: 3em"
        padless
        v-show="footerShow || isMobile"
      >
        <v-row
          justify="center"
          no-gutters
          style="
            padding-right: 31%;
            padding-left: 31%;
            background-color: #162129;
          "
        >
          <v-col
            class="footer-col lighten-2 text-center white--text"
            :class="isMobile ? 'py-1' : 'py-4'"
            cols="4"
          >
            <v-btn
              text
              v-scroll-to="{ el: '.intro-section', offset: -50 }"
              style="padding-right: 10px;!important;padding-left: 0px;!important"
            >
              <v-icon style="color: white" class="pr-2">mdi-account</v-icon>
              <div style="color: white" class="font-weight-light">About Me</div>
            </v-btn>
          </v-col>
          <v-col
            class="footer-col lighten-2 text-center white--text"
            :class="isMobile ? 'py-1' : 'py-4'"
            cols="4"
          >
            <v-btn
              text
              v-scroll-to="{ el: '.intro-section', offset: -50 }"
              style="padding-right: 20px;!important;padding-left: 0px;!important"
            >
              <v-icon style="color: white" class="pr-2">mdi-code-tags</v-icon>
              <div style="color: white" class="font-weight-light">Skills</div>
            </v-btn>
          </v-col>
          <v-col
            class="footer-col lighten-2 text-center white--text"
            :class="isMobile ? 'py-1' : 'py-4'"
            cols="4"
          >
            <v-btn
              text
              v-scroll-to="{ el: '.intro-section', offset: -50 }"
              style="padding: none !important"
            >
              <v-icon style="color: white" class="pr-2">mdi-email</v-icon>
              <div style="color: white" class="font-weight-light">Contact</div>
            </v-btn>
          </v-col>

          <v-col
            class="footer-col lighten-2 text-center white--text"
            :class="isMobile ? 'py-1' : 'py-4'"
            cols="4"
            v-for="icon in footerIcons"
            :key="icon.link"
          >
            <v-btn
              class="mx-4 white--text"
              text
              :href="icon.link"
              target="_blank"
            >
              <v-icon :size="isMobile ? '2em' : '2em'" class="pr-3">
                {{ icon.value }}
              </v-icon>
              {{ icon.name }}
            </v-btn>
          </v-col>
        </v-row>
      </v-footer>
    </section>
  </v-app>
</template>

<script>

import SkillCard from "../components/skillCard.vue";

import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import Icons from "../icons.js";

init("user_LqMtDg5AaLF8MBBzUXPtA");
const axios = require("axios");

export default {
  name: "Home",
  components: {
    SkillCard: SkillCard,
  },
  data: () => ({
    show: true,
    footerShow: false,
    scrolled: false,
    appbarShow: false,
    windowHeight: 0,
    icons: Icons.getIcons(),
    name: "",
    email: "",
    message: "",
    isMobile: window.innerWidth < 480,
    mobileWidth: window.innerWidth * 0.9,
    menu: [
      {
        icon: "mdi-account",
        title: "About Me",
        scrollToSection: ".info-section",
      },
      {
        icon: "mdi-code-tags",
        title: "Skills",
        scrollToSection: ".skills-section",
      },
      {
        icon: "mdi-email",
        title: "Contact",
        scrollToSection: ".contact-section",
      },
      {
        icon: "mdi-file-document",
        title: "Resume",
        scrollToSection: "",
      },
    ],

    emailRules: [
      (v) =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
    ],
    footerIcons: [
      {
        value: "mdi-facebook",
        link: "https://www.facebook.com/steven.lassinger",
        name: "Facebook",
      },
      {
        value: "mdi-linkedin",
        link: "https://www.linkedin.com/public-profile/in/steven-lassinger-b81339157?challengeId=AQEIhWYjpnCbIAAAAXdWrjwEyZT27iYWOiYHGB0ICJqlrM4GidKbFVBgwZE-Jy7juQSXk1nVZL2S0JWjwg3-PPD8PZZ2-UMFDg&submissionId=4817940b-6436-5f16-4ea5-3bc4d589850c",
        name: "LinkedIn",
      },
      {
        value: "mdi-github",
        link: "https://github.com/stevenlassinger",
        name: "Github",
      },
    ],
    navPos: null,
    lastPos: 0,

    languages: [
      {
        value: "js",
        isUgly: false,
        data: {},
      },
      {
        value: "node",
        isUgly: false,
        data: {},
      },
      {
        value: "css",
        isUgly: false,
        data: {},
      },
      {
        value: "html",
        isUgly: false,
        data: {},
      },
      {
        value: "java",
        isUgly: false,
        data: {},
      },
      {
        value: "c",
        isUgly: false,
        data: {},
      },
      {
        value: "mysql",
        isUgly: false,
        data: {},
      },
      {
        value: "python",
        isUgly: true,
        data: "python",
      },
       {
        empty: true,
      },
       {
        empty: true,
      },
    ],
    frameworks: [
      {
        value: "bootstrap",
        isUgly: false,
        data: {},
      },
      {
        value: "jquery",
        isUgly: false,
        data: {},
      },
      {
        value: "vue",
        isUgly: false,
        data: {},
      },
      {
        value: "materialui",
        isUgly: false,
        data: {},
      },
     
    ],
    development: [
      {
        value: "docker",
        isUgly: true,
        data: "docker",
      },
      {
        value: "git",
        isUgly: false,
        data: {},
      },
      {
        value: "vscode",
        isUgly: false,
        data: {},
      },
      {
        value: "linux",
        isUgly: false,
        data: {},
      },
      {
        value: "nginx",
        isUgly: false,
        data: {},
      },
      {
        value: "webpack",
        isUgly: false,
        data: {},
      },
      {
        value: "jira",
        isUgly: true,
        data: "jira",
      },
     
    ],
    spotifyInfo: "not playing",
  }),
  beforeCreate() {
    this.icons = Icons.getIcons();

  },

  mounted() {
    //wait for node server
    console.log("icons:%o",JSON.parse(JSON.stringify(this.icons)))
    console.log("idk:%o", Icons.getIcons())
    // this.getSpotify().then((res) => {
    //   this.spotifyInfo = res;
    // });
    // setInterval(() => {
    //   this.getSpotify().then((res) => {
    //     this.spotifyInfo = res;
    //   });
    // }, 60000);

    if (this.isMobile) {
      this.$router.push("MobileNotice");
      // this.show = true;
      // var x = document.querySelector("meta");
      // x.content = "width=device-width, initial-scale=1 ";
      // this.appbarShow = false;
    }

    this.navPos = document.getElementById("appbar").offsetTop;

    if (!this.isMobile) {
      setTimeout(function () {
        var top = document.getElementById("app").offsetTop;
        window.scrollTo(0, top);
      }, 200);

      window.addEventListener("scroll", this.onScroll);
    }
    window.onresize = () => {
      this.isMobile = window.innerWidth < 480;
      // console.log("ismobile:%o", this.isMobile);
      // console.log("window.innerWidth" + window.innerWidth);
    };
  },

  methods: {
    menuItems() {
      return this.menu;
    },

    async getSpotify() {
      const getArtists = (artists) => {
        var artistConcatString = "";
        artists.forEach((a, index) => {
          if (index == artists.length - 1) {
            artistConcatString += a.name;
          } else {
            artistConcatString += a.name + ", ";
          }
        });
        return artistConcatString;
      };

      const res = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing?market=ES&additional_types=episode",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              "Bearer BQDpUlXMHGEsfzNLyk73UtPatH4IArUQCxdspRHaP_JJRPmdUsFuAnrZUjrIbr8RICVKL8Eyz2PIZdjdF6dXOrwfAaYosFvZIuL8zq5lVIcLjXjgYE_q5SeATOlxsfzZrk8hs6d-TR01EdGBdSpH",
          },
        }
      );


      // console.log(
      //   "currently listenting to?:%o  by: %o",
      //   res.data.item.name,
      //   res.data.item.artists[0].name
      // );
      return res.data.item.name + " by" + getArtists(res.data.item.artists);
    },

    onScroll() {
      var pos = window.scrollY;
      // console.log("document.getElementById(appbar)", document.getElementById("appbar"))
      // console.log(
      //   "position:%o,last position:%o, appbar height offset:%o, navPosition:%o",
      //   pos,
      //   this.lastPos,
      //   document.getElementById("appbar").offsetHeight,
      //   this.navPos
      // );

      document.getElementById("appbar").style.position = "relative";

      // if (
      //   pos >= this.navPos + document.getElementById("appbar").offsetHeight &&
      //   this.lastPos < pos
      // ) {
      //   if (!document.getElementById("appbar").classList.contains("fixed")) {
      //     document.getElementById("appbar").className += " " + "fixed";
      //     document.getElementById("appbar").classList.remove("relative");
      //   }
      //   document.getElementById("appbar").style.position = "fixed";
      //   console.log("FIXED");
      //   this.appbarShow = true;
      // }

      // if (pos < this.navPos && this.lastPos > pos) {
      //   if (!document.getElementById("appbar").classList.contains("relative")) {
      //     document.getElementById("appbar").className += " " + "relative";
      //     document.getElementById("appbar").classList.remove("fixed");
      //   }
      //   console.log("RELVATIVE");
      //   document.getElementById("appbar").style.position = "relative";

      //   // this.appbarShow = false;
      //   this.appbarShow = true;
      // }

      this.lastPos = pos;

      // this.windowHeight = window.scrollY;
      if (window.scrollY == 0) {
        this.footerShow = false;
        this.appbarShow = false;
      }
      if (window.scrollY > 0) {
        // this.footerShow = false;
        this.appbarShow = true;
      }

      setTimeout(() => {
        // Any code to be executed when the window is scrolled
        // if (this.isMobile) {
        if (window.scrollY > 100) {
          this.footerShow = true;
        }

        if (!this.scrolled && window.scrollY > 500) {
          this.show = true;
          this.footerShow = true;
          this.scrolled = true;
        }
        // }
      }, 200);
    },

    explore() {
      this.appbarShow = true;
      this.$refs.appbar.$el.style.position = "fixed";

      if (!this.show) {
        this.show = true;
        this.footerShow = true;
        this.scrolled = true;
      }
    },
    sendEmail(e) {
      // console.log(this.name);
      // console.log(this.email);
      // console.log(this.message);

      emailjs
        .sendForm(
          "service_pxhvriq",
          "template_5i9syxv",
          e.target,
          "user_LqMtDg5AaLF8MBBzUXPtA",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.github-hover {
  color: #bbb !important;
}

.yoyo {
  padding: 0px !important;
}

.fb-hover {
  color: #3b5998 !important;
}

.linkedin-hover {
  color: #0e76a8 !important;
}

.divider {
  border-color: #313131 !important;
}

.custom-divider {
  margin: 20px 0;
  margin: 25px 0;
  width: 50%;
  height: 1px;
  border: 0;
  background: black;
  background: -webkit-gradient(
    linear,
    0 0,
    100% 0,
    from(transparent),
    to(transparent),
    color-stop(50%, gray)
  );
}

/* MOBILE */
.mobile-header {
  text-align: center;
  font-size: 2em !important;
  font-weight: 600;
  margin-top: 0px;
}

.mobile-nav-bar {
  background: transparent;
}

.mobile-skills-card {
  margin-right: 0.6em !important;
  margin-left: 0px !important;
  margin-bottom: 1em !important;
}

.mobile-form-container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #fff;
  padding: 20px;
  width: 90%;
}

.mdi-menu {
  font-size: 35px !important;
}

/* DESKTOP/LAPTOP */
.name-title {
  caret-color: transparent;
  font-size: 2rem;
}

.landing-page {
  background-image: url("../assets/bg2.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
}

.lp-actions {
  width: 100%;
  transform: translatey(19%);
}

.welcome {
  color: var(--primaryTextColor);
  font-size: 6em;
  font-weight: 600;
  text-shadow: 17px 5px 16px black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

.intro-bio {
  color: white;
  font-weight: 200;
  width: 63%;
  /* font-family: */
}

.explore-btn {
  position: absolute;
  bottom: 25%;
}

.intro-section {
  /* background: #151414; */
  background: #000000;
  background: #162129;
}

.skills-section {
  /* background: #000000; */
  /* background: #151414; */
  /* background: rgba(13, 21, 26, 0.78)!important; */
  background: rgba(13, 21, 26, 1);
  /* background: #162129; */
}

.skills-card {
  background: white;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;
  width: 23em;
  margin-right: 10px;
}

.contact-section {
  /* background: #18202b; */
  background: #162129;
  background: rgba(13, 21, 26, 1);
}

.contact-header {
  /* color: var(--primaryTextColor); */
}

.skills-card-header {
  background: var(--primaryColor);
  color: var(--primaryTextColor);
  border-bottom: 3px solid rgb(24, 32, 43);
}

.is-body,
.skills-body {
  margin-top: -8em !important;
  margin-bottom: 11em;
}

.is-body {
  margin-top: 10em !important;
    margin-bottom: 22em;
    }

.contact-body {
  margin-top: 1em;
  /* height: 67vh; */
}

.info-value {
  color: var(--primaryTextColor) !important;
}

.icon {
  height: 2em;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.footer-col {
  /* background: var(--primaryColor); */
  background: #162129;
  /* border-top: 3px solid rgb(24, 32, 43) !important; */
}

.footer-links {
  color: var(--primaryTextColor) !important;
}

/* FROM LEFT ------> */
.slide-from-left-leave-active,
.slide-from-left-enter-active {
  transition: 1s;
}

.slide-from-left-enter {
  transform: translate(-100%, 0);
}

.slide-from-left-leave-to {
  transform: translate(100%, 0);
}

/* FROM Right <------ */
.slide-from-right-leave-active,
.slide-from-right-enter-active {
  transition: 1s;
}

.slide-from-right-enter {
  transform: translate(100%, 0);
}

.slide-from-right-leave-to {
  transform: translate(-100%, 0);
}

/* FROM top  */
.slide-from-top-leave-active,
.slide-from-top-enter-active {
  transition: 1s;
}

.slide-from-top-enter {
  transform: translateY(-100%);
}

.slide-from-top-leave-to {
  transform: translateY(100%);
}

* {
  box-sizing: border-box;
}

.container1 {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #fff;
  padding: 20px;
  width: 50%;
}

.contact-section {
  /* background-image: url("./assets/contact-bg1.jpg");
  background-size: cover;
  background-position: center;
  display: flex; */
}

label {
  float: left;
}

input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  background-color: white;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: lightgray;
}

@media (min-width: 1904px) {
  .container {
    /* margin-left: 35em;
    margin-right: 35em; */
    max-width: 85em;
  }
}

@media (max-width: 1263) {
  .container {
    /* margin-left: 35em;
    margin-right: 35em; */
    max-width: 85em;
  }
}

nav.fixed.desk {
  animation: popDown 0.5s;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: popDown;
}

@keyframes popDown {
  0% {
    transform: translateY(-100px);
  }
}

.fixed {
  /* position: fixed !important; */
}

.relative {
  /* position: fixed!important; */
}

a {
  text-decoration: none;
  color: var(--primaryTextColor) !important;
  font-size: 0.875rem;
  font-weight: 300 !important;
}

.submit-btn {
  background: linear-gradient(to right, #566bc7, #8b62de);
  color: white;
}

.form-input {
  background: white;
}

.form-input-dark {
  background: transparent;
  border-color: rgb(32, 202, 92) !important;
  color: white;
}

.form-input-dark-submit {
  border: 1px solid rgb(32, 202, 92) !important;
  color: white;
  background-color: transparent !important;
}
</style>
