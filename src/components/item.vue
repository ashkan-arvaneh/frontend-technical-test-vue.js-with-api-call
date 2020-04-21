<template>
  <ul class="item__wrapper">
    <li
      v-for="(person, index) in data.data"
      :key="index"
      class="item"
      :class="{ active: index == selected }"
      @click="selected = index"
      :style="itemStyles(index)"
      v-on:click.stop.prevent="pickProfile(index)"
    >
      <figure class="item__image">
        <img :src="person.avatar" :alt="'image of ' + person.first_name" />
        <figcaption>{{ person.last_name }}</figcaption>
      </figure>
      <button class="item__button">
        <span class="item__ripple"></span>
        Details
      </button>
    </li>
    <li class="item item__cover">
      <h4>List of profiles</h4>
      <!-- <h5><span>We ♥ color</span></h5> -->
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "item",

  data() {
    return {
      loading: true,
      selected: null
    };
  },

  computed: {
    ...mapState("newReleases", ["data", "totalItems"]),
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
    pickProfile(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
    },
    itemStyles(index) {
      const offset = 90 / this.totalItems; //90 degree
      return {
        backgroundColor: this.colourGenerator[index],
        transform: "rotate(" + -index * Math.round(offset) + "deg)"
      };
    }
  },

  created() {
    this.$store.dispatch("newReleases/GET_LIST").then(() => {});
  }
};
</script>

<style lang="scss" scoped>
.item__wrapper {
  position: relative;
  width: 150px;
  height: 400px;
  margin: 30px auto 0 auto;
  color: #fff;

  font-size: 1.2rem;
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
    box-shadow: -1px -1px 3px rgba(0, 0, 0, 0.2),
      12px 12px 20px rgba(0, 0, 0, 0.6),
      inset 2px 2px 0 rgba(255, 255, 255, 0.1);
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
