export default function createContext(name, initialState) {
  const key = `context-${name}`;
  let state;

  if (sessionStorage.getItem(key)) {
    state = JSON.parse(sessionStorage.getItem(key));
    console.log("state", state);
  } else {
    state = initialState;
    sessionStorage.setItem(key, JSON.stringify(state));
  }

  const setState = (callback) => {
    const newState = callback(state);
    state = newState;
    sessionStorage.setItem(key, JSON.stringify(newState));
    return newState;
  };

  return {
    initialState: state,
    setState,
  };
}
