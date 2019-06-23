import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from "./store/index"


class Todolist extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
        <div>
          <Input
            placeholder='todo info'
            style={{ width: '300px' }}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button 
            type="primary" 
            style={{ marginLeft: '10px' }}
            onClick = {this.handleBtnClick}
          >
            Submit
          </Button>
        </div>
        <List
          style={{ width: '300px', marginTop: '10px' }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item 
              onClick = {this.handleItemDelete.bind(this, index)}
            >
              {item}
            </List.Item>
          )}
        />
      </div>

    )
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = {
      type: 'delete_todo_item',
      index
    }
    store.dispatch(action);
  }

}

export default Todolist;
