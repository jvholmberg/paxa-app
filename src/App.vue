<template>
  <app-navigation />
  <router-view />
  <app-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNavigation from "@/layouts/NavigationComponent.vue";
import AppFooter from "@/layouts/FooterComponent.vue";

export default defineComponent({
  components: {
    AppNavigation,
    AppFooter,
  },
});
</script>
