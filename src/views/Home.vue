<template>
  <div class="home">
    <person-list></person-list>
  </div>
</template>

<script>
// @ is an alias to /src
import personList from "@/components/person-list";
export default {
  name: "Home",
  components: { personList }
};
</script>
