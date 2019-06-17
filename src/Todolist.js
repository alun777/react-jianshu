import React, { Component, Fragment } from 'react';
import './Todolist.css'
import TodoItem from './TodoItem';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">Typing:</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button
            onClick={this.handleBtnClick.bind(this)}
          >submit</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <div key={index}>
                  {/*<li 
                key={index}
                onClick={this.handleItemDelete.bind(this, index)}
                dangerouslySetInnerHTML={{__html: item}}
              >  
              {item} this would include <h1></h1>}
              </li>*/}
                  <TodoItem
                    content={item}
                    index={index}
                    handleItemDelete = {this.handleItemDelete.bind(this)}

                  />

                </div>

              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick() {
    // ES5
    // const newList = this.state.list
    // newList.push(this.state.inputValue)
    // this.setState({
    //   list: newList
    // })

    // using ...
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  handleItemDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
}
export default Todolist;
