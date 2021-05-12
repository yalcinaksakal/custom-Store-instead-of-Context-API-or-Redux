import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    ADD: (state, amount) => {
      return { counter: state.counter + amount };
    },
    SUB: (state, amount) => {
      return { counter: state.counter - amount };
    },
  };
  initStore(actions, { counter: 0 });
};

export default configureStore;
