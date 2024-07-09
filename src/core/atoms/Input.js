import Atom from "./Atom";

export default class Input extends Atom {
  constructor(initialState, lifeCycle) {
    super(
      "input",
      {
        ...initialState,
        children: {},
      },
      lifeCycle,
    );
  }
}
