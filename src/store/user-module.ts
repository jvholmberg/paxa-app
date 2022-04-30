import { Module } from "vuex";
import { NormalizedState } from "@/types/generic.interface";
import { User } from "@/types/user.interface";

type UserModuleState = NormalizedState<User>;

const getInitialState = (): UserModuleState => ({
  allIds: [1, 2, 3],
  byId: {
    1: { name: "usr1" },
    2: { name: "usr2" },
    3: { name: "usr3" },
  },
});

const UserModule: Module<UserModuleState, any> = {
  namespaced: true,
  state: () => getInitialState(),
  getters: {
    getAll(state): User[] {
      return state.allIds.map((id) => state.byId[id]);
    },
    getById(state, id: number): User | undefined {
      return state.byId[id];
    },
  },
  mutations: {},
  actions: {},
};
export { UserModuleState, getInitialState };
export default UserModule;
