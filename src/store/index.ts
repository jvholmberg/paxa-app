import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

import UserModule, { UserModuleState } from "./user-module";
import OrganizationModule, {
  OrganizationModuleState,
} from "./organization-module";

interface State {
  users: UserModuleState;
  organizations: OrganizationModuleState;
}

const key: InjectionKey<Store<State>> = Symbol();

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    users: UserModule,
    organizations: OrganizationModule,
  },
});

const useStore = () => {
  return baseUseStore(key);
};

export default store;
export { key, useStore, State };
