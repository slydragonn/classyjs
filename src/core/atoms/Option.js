import Atom from "./Atom";

export default class Option extends Atom {
  constructor(initialState, lifeCycle) {
    super(
      "option",
      {
        ...initialState,
        children: {
          child: initialState.children,
        },
      },
      lifeCycle,
    );
  }
}
