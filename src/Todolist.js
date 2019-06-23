import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from "./store/index"
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction } from './store/actionCreators';
import TodolistUI from './TodolistUI';
import axios from 'axios';

class Todolist extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodolistUI
        inputValue={this.state.inputValue}
        handleInputChange = {this.handleInputChange}
        handleBtnClick = {this.handleBtnClick}
        handleItemDelete = {this.handleItemDelete}
        list={this.state.list}
      />)
  }

  componentDidMount() {
    axios.get('https://www.easy-mock.com/mock/5d0f1ffe7e96485dab376807/list.json').then((res)=>{
      const data = res.data;
      const action = initListAction(data);
      store.dispatch(action);
    })
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

}

export default Todolist;
