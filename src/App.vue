<template>
  <app-navigation />
  <router-view />
  <app-footer />
</template>

<script>
import { defineComponent } from "vue";
import AppNavigation from "@/components/NavigationComponent.vue";
import AppFooter from "@/components/FooterComponent.vue";

export default defineComponent({
  components: {
    AppNavigation,
    AppFooter,
  },
});
</script>
