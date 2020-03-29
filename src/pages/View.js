import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTodo } from '../store/actions';

class View extends React.Component{

  componentDidMount = () => {
  	console.log('View init', this.props.match.params.id);
   	this.props.fetchTodo(this.props.match.params.id);
  };

  render = () => {
	  	if(this.props.todo.title){
		  return (
		    <div>
		      <h1>{ this.props.todo.title }</h1>
		    </div>
		  );
  		}else{
  			return (
			    <div>
			      <h1>LOADING</h1>
			    </div>
			);
  		}

  }

};

const loadData = (store, param) => {
  return store.dispatch(fetchTodo(param));
};

const mapStateToProps = state => ({
  todo: state.todos.todo
});

const mapDispatchToProps = { fetchTodo };

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(View),
  loadData
};