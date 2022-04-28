<template>
  <div @click="onToggleSelf">
    <h1>{{ organization.name }}</h1>
    <p v-if="open">Open</p>
    <p v-else>Closed</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { Organization } from "@/types/organization.interface";

export default defineComponent({
  name: "OrganizationView",
  components: {},
  props: {
    id: {
      type: Number,
      required: true,
    },
    open: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props, context) {
    const store = useStore();

    // Get organization
    const organization: Organization = store.getters["organizations/getById"](
      props.id
    );

    // Exposed events
    const onToggleSelf = () => context.emit("toggle", props.id);

    return {
      organization,
      onToggleSelf,
    };
  },
});
</script>
