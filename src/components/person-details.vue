<template>
  <transition name="bounce">
    <div class="person-details">
      <section
        class="person-details__image-section"
        :style="{
          backgroundColor: setColor(selectedBackground, 50)
        }"
      >
        <img :src="selectedPerson.avatar" alt="" />
      </section>
      <section class="person-details__details-section">
        <div>First name: {{ selectedPerson.first_name }}</div>
        <div>last name: {{ selectedPerson.last_name }}</div>
        <div>Email address: {{ selectedPerson.email }}</div>
      </section>
      <span class="close" @click="$emit('close')">X</span>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "personDetails",
  data() {
    return {};
  },
  computed: {
    ...mapState("personsModule", [
      "selectedPerson",
      "selectedBackground",
      "popupClosed"
    ])
  },
  methods: {
    setColor(hex, opacity) {
      const tempHex = hex.replace("#", "");
      const r = parseInt(tempHex.substring(0, 2), 16);
      const g = parseInt(tempHex.substring(2, 4), 16);
      const b = parseInt(tempHex.substring(4, 6), 16);
      return `rgba(${r},${g},${b},${opacity / 100})`;
    },
    closePopup() {
      this.$store.dispatch("personsModule/UPDATE_POPUP", true);
    }
  }
};
</script>

<style lang="scss" scoped>
.person-details {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 1fr;
  z-index: 20;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80vh;
  background-image: url(../assets/fabric.png);
  color: #fff;
  box-shadow: 0px -5px 9px -4px rgba(0, 0, 0, 0.57);
  &__image-section {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      border-radius: 5px;
      width: 30%;
    }
  }
  &__details-section {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    align-self: center;
    text-align: left;
    margin: 0 auto 0 10%;
    font-size: 2.4rem;
    text-transform: capitalize;
    line-height: 5rem;
  }
}
.close {
  position: absolute;
  right: 30px;
  top: 15px;
  font-size: 4rem;
  cursor: pointer;
}
.bounce-enter-active {
  animation: slideInUp 0.3s;
}
.bounce-leave-active {
  animation: slideInUp 0.3s reverse;
}

@media only screen and (min-width: 767px) {
  .person-details {
    grid-template-columns: 0.5fr 1fr;
    grid-template-rows: 1fr;
  }
}

@keyframes slideInUp {
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}
</style>
