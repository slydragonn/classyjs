import Atom from "./Atom";

export default class Link extends Atom {
  constructor(initialState, lifeCycle) {
    super("a", initialState, lifeCycle);
  }
}
