import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';
const Detail = ({ toDo, OnclickBtn }) => {
  return (
    <div>
      <h1>{toDo.text}</h1>
      <h5>create at {toDo.id}</h5>
      <Link to="/">
        <button onClick={OnclickBtn}>Del</button>
        <button>Previous</button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return {
    OnclickBtn: () => {
      dispatch(actionCreators.deleteTodo(parseInt(id)));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
