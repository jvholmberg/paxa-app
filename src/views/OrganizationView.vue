<template>
  <div class="home">
    <h1>This is an organization page</h1>
    <div>Organization {{ $route.params.id }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrganizationView",
  components: {},
});
</script>
