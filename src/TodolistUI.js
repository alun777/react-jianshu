import React from "react";
import { Input, Button, List } from 'antd';
// import { Component } from 'react';

const TodolistUI = (props) => {
  return(
    <div style={{ marginLeft: "10px", marginTop: "10px" }}>
        <div>
          <Input
            placeholder='todo info'
            style={{ width: '300px' }}
            value={props.inputValue}
            onChange={props.handleInputChange}
          />
          <Button 
            type="primary" 
            style={{ marginLeft: '10px' }}
            onClick = {props.handleBtnClick}
          >
            Submit
          </Button>
        </div>
        <List
          style={{ width: '300px', marginTop: '10px' }}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item 
              onClick = {(index) => {props.handleItemDelete(index)}}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    )
}

export default TodolistUI;
