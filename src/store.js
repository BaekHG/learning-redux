import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';
const TODOS = 'TODOS';
const getLoclItem = JSON.parse(localStorage.getItem(TODOS));

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE,
    id,
  };
};
const reducer = (state = getLoclItem, action) => {
  switch (action.type) {
    case ADD:
      const addReturn = [{ text: action.text, id: Date.now() }, ...state];
      return addReturn;
    case DELETE:
      const delReturn = state.filter((toDo) => action.id !== toDo.id);
      return delReturn;
    default:
      return state;
  }
};
const store = createStore(reducer);
const local = () => {
  const current = store.getState();
  localStorage.setItem(TODOS, JSON.stringify(current));
  // const localStr = localStorage.getItem(TODOS);
  // store.dispatch({type:default action})
};

store.subscribe(local);

export const actionCreators = {
  addToDo,
  deleteTodo,
};

export default store;
