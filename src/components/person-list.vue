<template>
  <div>
    <ul
      class="item__wrapper"
      v-if="!loading"
      :class="{ blur: !popupClosed }"
      v-on:click="closeDetails()"
    >
      <li
        v-for="(person, index) in data.data"
        :key="index"
        class="item"
        :class="{ active: index == selected, item__cover: person.cover }"
        :style="itemStyles(index)"
        v-on:click.stop.prevent="pickProfile(index, person)"
      >
        <h4 v-if="person.cover">List of profiles</h4>
        <div v-else>
          <figure class="item__image">
            <img :src="person.avatar" :alt="'image of ' + person.first_name" />
            <figcaption>{{ person.last_name }}</figcaption>
          </figure>
          <button
            class="item__button"
            v-on:click.stop.prevent="showDetails(person, index)"
          >
            <span class="item__ripple"></span>
            Details
          </button>
        </div>
      </li>
    </ul>
    <person-details v-show="!popupClosed"></person-details>
  </div>
</template>

<script>
import { mapState } from "vuex";
import personDetails from "@/components/person-details";
export default {
  name: "personList",
  components: { personDetails },
  props: {
    ClosePopup: Boolean
  },
  data() {
    return {
      selected: null,
      offset: null,
      animationStarted: false
    };
  },

  computed: {
    ...mapState("personsModule", [
      "data",
      "totalItems",
      "loading",
      "selectedPerson",
      "popupClosed"
    ]),
    colourGenerator() {
      let colours = [];
      for (let i = 0; i < this.totalItems; i++) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        colours.push("#" + randomColor);
      }
      return colours;
    }
  },
  methods: {
    pickProfile(index, person) {
      this.selected = index;
      const backgroundColor = this.colourGenerator[index];
      this.$store.dispatch("personsModule/PASS_SELECTED_PERSON", {
        person,
        backgroundColor
      });
    },
    itemStyles(index) {
      if (!this.animationStarted) {
        return {};
      }

      // 7 items, 3.5 - 4
      //debugger; // eslint-disable-line
      const centerOn =
        this.selected != null ? this.selected : Math.floor(this.totalItems / 2);
      const startIndex = centerOn - index;
      let offset = this.offset;

      let degrees = -startIndex * Math.round(offset);
      if (this.selected != null && index > this.selected) {
        degrees += 15;
      }

      return {
        transition: "all 700ms ease 0s",
        backgroundColor: this.colourGenerator[index],
        transform: "rotate(" + degrees + "deg)"
      };
    },
    showDetails(person, index) {
      this.selected = index;
      const backgroundColor = this.colourGenerator[index];
      this.$store
        .dispatch("personsModule/PASS_SELECTED_PERSON", {
          person,
          backgroundColor
        })
        .then(() => {
          this.$store.dispatch("personsModule/UPDATE_POPUP", false);
        });
    }
  },

  created() {
    this.$store.dispatch("personsModule/GET_LIST").then(() => {
      this.offset = 90 / this.totalItems; //90 degree
      setTimeout(() => {
        this.animationStarted = true;
      }, 500);
    });
  }
};
</script>

<style lang="scss" scoped>
.item__wrapper {
  position: relative;
  width: 130px;
  height: 470px;
  margin: 30px auto 0 auto;
  color: #fff;
  transition: filter 0.5s;
  font-size: 1.2rem;
  &.blur {
    filter: blur(5px);
  }
  .item {
    position: absolute;
    top: 0;
    left: 0;
    width: 130px;
    background: #fff;
    height: 400px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    background-image: url(../assets/fabric.png);
    transform-origin: 25% 90%;
    backface-visibility: hidden;
    padding: 10px 5px;
    transition: all 700ms ease 0s;
    box-shadow: 2px 4px 6px black;
    &__image {
      img {
        border-radius: 50%;
        width: 70%;
      }
      figcaption {
        font-weight: bold;
        text-transform: uppercase;
        border-top: 1px dashed rgba(0, 0, 0, 0.1);
        border-bottom: 1px dashed rgba(0, 0, 0, 0.1);
      }
    }
    &__button {
      border: none;
      padding: 10px 30px;
      cursor: pointer;
      color: #fff;
      text-transform: uppercase;
      font-size: 1rem;
      background-color: #3e3e3e91;
      outline: none;
      border-radius: 2px;
      background-position: center;
      transition: background 0.8s;
      margin-top: 20px;
      &:hover {
        background: #67666691
          radial-gradient(circle, transparent 1%, #67666691 1%) center/15000%;
      }
      &:active {
        background-color: #9e9d9d91;
        background-size: 100%;
        transition: background 0s;
      }
      &:before {
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
      }
    }
    &:before {
      content: "";
      background-image: url(../assets/dark_leather.jpg);
    }
    &__cover {
      background-image: url(../assets/cover.jpg);
      h4 {
        background: rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);
        padding: 5px;
        height: 35px;
        display: flex;
        align-items: center;
      }
      &:after {
        content: "";
        position: absolute;
        bottom: 15px;
        left: 15px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: linear-gradient(
          135deg,
          #dddddd 0%,
          #58535e 48%,
          #889396 100%
        );
        box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.5),
          1px 1px 1px rgba(255, 255, 255, 0.1);
      }
    }
  }
}
</style>
