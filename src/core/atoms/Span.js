import Atom from "./Atom";

export default class Span extends Atom {
  constructor(initialState, lifeCycle) {
    super(
      "span",
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
