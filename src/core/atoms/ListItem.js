import Atom from "./Atom";

export default class ListItem extends Atom {
  constructor(initialState, lifeCycle) {
    super("li", initialState, lifeCycle);
  }
}
