import { Module, Store } from "vuex";
import api from "@/axiosInstance";
import { ActionGetById, NormalizedState } from "@/types/generic.interface";
import { Organization } from "@/types/organization.interface";
import { State } from ".";

type OrganizationModuleState = NormalizedState<Organization>;

const getInitialState = (): OrganizationModuleState => ({
  allIds: [],
  byId: {},
});

// Keys
const MODULE = "organizations";

const GET_ALL = "getAll";
const GET_BY_ID = "getById";

const SET_ALL = "setAll";
const SET_BY_ID = "setById";

// Shortcuts for actions
const useGetAll = (store: Store<State>) =>
  store.dispatch(`${MODULE}/${GET_ALL}`);
const useGetById = (store: Store<State>, id: number, force = false) =>
  store.dispatch(`${MODULE}/${GET_BY_ID}`, { id, force });

// Module
const OrganizationModule: Module<OrganizationModuleState, any> = {
  namespaced: true,
  state: () => getInitialState(),
  getters: {
    [GET_ALL]: (state) => {
      return state.allIds.map((id) => state.byId[id]);
    },
    [GET_BY_ID]: (state) => (id: number) => {
      return state.byId[id];
    },
  },
  mutations: {
    [SET_ALL]: (state, entities: Organization[]) => {
      console.log("setAll", entities);
      return null;
    },
    [SET_BY_ID]: (state, entity: Organization) => {
      console.log("setById", entity.id);
      state.allIds[state.allIds.length] = entity.id;
      state.byId[entity.id] = entity;
    },
  },
  actions: {
    [GET_ALL]: async (context) => {
      console.log("getAll");
      const response = await api.get<Organization[]>("");
      context.commit(SET_ALL, response);
    },
    [GET_BY_ID]: async (context, { id, force = false }: ActionGetById) => {
      console.log("getById", id);
      const existing = context.state.byId[id];
      if (!existing || force) {
        const response = await api.get("");
        context.commit(SET_BY_ID, response);
      }
    },
  },
};
export { OrganizationModuleState, getInitialState, useGetAll, useGetById };
export default OrganizationModule;
