import createAtom from "./createAtom";

export default class Atom {
  constructor(atomType, initialState, lifeCycle = {}) {
    this.state = initialState;
    this.lifeCycle = lifeCycle;
    this.atom = createAtom(atomType, this.state);
    this.parent;
  }
  render(parent) {
    this.parent = parent;
    this.parent.appendChild(this.atom.render);
    if (this.lifeCycle?.mount) {
      return this.lifeCycle.mount();
    }
    return;
  }
  update(newState, callback) {
    let state = { ...this.state, ...newState };
    if (typeof newState.children !== "object") {
      state = {
        ...this.state,
        ...newState,
        children: {
          child: newState.children,
        },
      };
    }
    this.state = state;
    const newAtom = this.atom.updateState(this.state);
    const oldAtom = this.parent.querySelector(`[data-key="${this.atom.key}"]`);
    //const oldAtom = this.parent.lastChild;
    if (oldAtom && oldAtom.parentNode) {
      oldAtom.parentNode.replaceChild(newAtom, oldAtom);
      if (typeof callback === "function") {
        callback(this.state);
      }
      if (this.lifeCycle?.mount) {
        return this.lifeCycle.mount();
      }
      return;
    }
    this.parent.appendChild(newAtom);
    if (typeof callback === "function") {
      callback(this.state);
    }
    if (this.lifeCycle?.mount) {
      return this.lifeCycle.mount;
    }
  }
}
