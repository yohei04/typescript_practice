import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/indexAction';

const Test = (props: any) => {
  return (
    <div>
      <h1>test + {props.addTodo.text}</h1>
      {console.log(props)}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    todos: state.todo.todo,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTodo: () =>
      dispatch(addTodo("text")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
