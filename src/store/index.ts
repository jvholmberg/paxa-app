import { createStore } from "vuex";

import UserModule from "./user-module";
import OrganizationModule from "./organization-module";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    users: UserModule,
    organizations: OrganizationModule,
  },
});
