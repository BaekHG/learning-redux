import { createStore } from 'redux';
import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const TODOS = 'TODOS';
const getLoclItem = JSON.parse(localStorage.getItem(TODOS));

const addToDo = createAction('ADD');
const deleteTodo = createAction('DELETE');

// const reducer = (state = getLoclItem, action) => {
//   switch (action.type) {
//     case addToDo.type:
//       const addReturn = [{ text: action.payload, id: Date.now() }, ...state];
//       return addReturn;
//     case deleteTodo.type:
// const delReturn = state.filter((toDo) => action.payload !== toDo.id);
// return delReturn;
//     default:
//       return state;
//   }
// };

const reducer = createReducer(getLoclItem, {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteTodo]: (state, action) => {
    const delReturn = state.filter((toDo) => action.payload !== toDo.id);
    return delReturn;
  },
});
// const store = configureStore({ reducer });
const store = createStore(reducer);
const local = () => {
  const current = store.getState();
  localStorage.setItem(TODOS, JSON.stringify(current));
};

store.subscribe(local);

export const actionCreators = {
  addToDo,
  deleteTodo,
};

export default store;
