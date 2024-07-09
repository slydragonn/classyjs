import Atom from "./Atom";

export default class Title extends Atom {
  constructor(TitleType, initialState, lifeCycle) {
    super(
      { h1: "h1", h2: "h2", h3: "h3", h4: "h4" }[TitleType],
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
