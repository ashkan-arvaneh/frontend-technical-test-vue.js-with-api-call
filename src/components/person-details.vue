<template>
  <transition name="bounce">
    <div
      :style="{
        backgroundColor: selectedBackground,
        transform: 'scale(1)',
        opacity: '1'
      }"
      class="person-details"
    >
      <section class="person-details__image-section">
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
    ...mapState("newReleases", ["selectedPerson", "selectedBackground"])
  }
};
</script>

<style lang="scss" scoped>
.person-details {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  z-index: 20;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60vh;
  transition: all 0.4s cubic-bezier(0.47, 1.64, 0.41, 0.8);
  transform: scale(0);
  opacity: 0;
  background-image: url(../assets/fabric.png);
  color: #fff;
  box-shadow: 0px -5px 9px -4px rgba(0, 0, 0, 0.57);
  &__image-section {
    grid-area: 1 / 1 / 2 / 2;
    background-image: url(../assets/cover2.jpg);
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      border-radius: 5px;
      width: 40%;
    }
  }
  &__details-section {
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    align-self: center;
    margin: 0 auto 0 10%;
    font-size: 2.4rem;
    text-transform: capitalize;
    div {
      margin-bottom: 20px;
    }
  }
}
.close {
  position: absolute;
  right: 30px;
  top: 15px;
  font-size: 4rem;
}
.bounce-enter-active {
  animation: bounce-in 0.7s;
}
.bounce-leave-active {
  animation: bounce-in 0.7s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
