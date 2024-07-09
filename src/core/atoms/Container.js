import Atom from "./Atom";

export default class Container extends Atom {
  constructor(initialState, lifeCycle) {
    super("div", initialState, lifeCycle);
  }
}
