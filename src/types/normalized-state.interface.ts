export interface NormalizedState<T> {
  allIds: number[];
  byId: { [key: number]: T };
}
