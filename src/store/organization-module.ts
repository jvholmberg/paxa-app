import { Module } from "vuex";
import { NormalizedState } from "@/types/normalized-state.interface";
import { Organization } from "@/types/organization.interface";

type OrganizationModuleState = NormalizedState<Organization>;

const getInitialState = (): OrganizationModuleState => ({
  allIds: [1, 2, 3],
  byId: {
    1: { name: "org1" },
    2: { name: "org2" },
    3: { name: "org3" },
  },
});

const OrganizationModule: Module<OrganizationModuleState, any> = {
  namespaced: true,
  state: () => getInitialState(),
  getters: {
    getAll: (state) => {
      return state.allIds.map((id) => state.byId[id]);
    },
    getById: (state) => (id: number) => {
      return state.byId[id];
    },
  },
  mutations: {
    update: (state) => (id: number, updates: Partial<Organization>) => {
      return null;
    },
  },
  actions: {},
};
export { OrganizationModuleState, getInitialState };
export default OrganizationModule;
