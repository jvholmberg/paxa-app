<template>
  <div class="home">
    <h1>This is an organization list page</h1>
    <ul>
      <organization-view
        v-for="orgId in organizationIds"
        :key="orgId"
        :id="orgId"
        :open="openOrganizationId === orgId"
        @toggle="onToggleItem(orgId)" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "@/store";
import OrganizationView from "@/views/OrganizationView.vue";

export default defineComponent({
  name: "OrganizationListView",
  components: { OrganizationView },
  setup() {
    const store = useStore();
    let openOrganizationId = ref<number>();

    const onToggleItem = (organizationId: number) => {
      const nextValue =
        organizationId !== openOrganizationId.value
          ? organizationId
          : undefined;

      openOrganizationId.value = nextValue;
    };

    return {
      organizationIds: store.state.organizations.allIds,
      openOrganizationId,
      onToggleItem,
    };
  },
});
</script>
