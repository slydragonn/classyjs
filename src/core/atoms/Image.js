import Atom from "./Atom";

export default class Image extends Atom {
  constructor(initialState, lifeCycle) {
    super("img", initialState, lifeCycle);
  }
}
