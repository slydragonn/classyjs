import Atom from "../atoms/Atom";

export default class Select extends Atom {
  constructor(initialState, lifeCycle) {
    super(
      "select",
      {
        ...initialState,
        children: Object.assign({}, initialState.children),
      },
      lifeCycle,
    );
  }
}
