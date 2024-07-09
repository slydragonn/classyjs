export default function createAtom(atomType, initialState) {
  let atom = document.createElement(atomType);
  let key = parseInt(Math.random() * 10000000000);
  let state = initialState;

  atom.setAttribute("data-key", key);

  const setAtomValues = (newState) => {
    for (let [stateName, stateValue] of Object.entries(newState)) {
      for (let [name, value] of Object.entries(stateValue)) {
        if (stateName === "children") {
          if (typeof value === "object") {
            value.render(atom);
          } else if (typeof value === "number" || typeof value === "string") {
            atom.innerText = value;
          } else {
            atom.appendChild(value);
          }
        } else if (stateName === "props") {
          atom[name] = value;
        } else if (stateName === "attrs") {
          atom.setAttribute(name, value);
        } else if (stateName === "events") {
          atom.addEventListener(name, value);
        }
      }
    }
  };

  setAtomValues(state);

  const updateState = (newState) => {
    setAtomValues(newState);
    return atom;
  };

  return {
    render: atom,
    key,
    updateState,
  };
}
