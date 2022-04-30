export interface NormalizedState<T> {
  allIds: number[];
  byId: { [key: number]: T };
}

export interface ActionGetById {
  id: number;
  force: boolean;
}
