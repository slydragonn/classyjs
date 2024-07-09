import Atom from "./Atom";

export default class Text extends Atom {
  constructor(initialState, lifeCycle) {
    super(
      "p",
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
