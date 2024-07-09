import Atom from "../atoms/Atom";

export default class List extends Atom {
  constructor(ListType, initialState, lifeCycle) {
    super(
      { ul: "ul", ol: "ol" }[ListType],
      {
        ...initialState,
        children: Object.assign({}, initialState.children),
      },
      lifeCycle,
    );
  }
}
