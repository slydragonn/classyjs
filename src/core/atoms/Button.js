import Atom from "./Atom";

export default class Button extends Atom {
  constructor(initialState, lifeCycle) {
    super(
      "button",
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
