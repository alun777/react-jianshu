import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class Todolist extends Component {
  render() {
    return (
      <div style={{ marginLeft: "10px", marginTop: "10px" }}>
        <div>
          <Input placeholder='todo info' style={{ width: '300px' }} />
          <Button type="primary" style={{ marginLeft: '10px' }}>Submit</Button>
        </div>
        <List
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      </div>

    )
  }
}

export default Todolist;
