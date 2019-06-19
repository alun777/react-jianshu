import React, { Component, Fragment } from 'react';
import './Todolist.css'
import TodoItem from './TodoItem';
import axios from 'axios'

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">Enter: </label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button
            onClick={this.handleBtnClick}
          >
            submit
          </button>
        </div>
        <ul ref={(ul) => { this.ul = ul }}>
          {
            this.state.list.map((item, index) => {
              return (
                <div key={item}>
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
                    handleItemDelete={this.handleItemDelete}
                  />
                </div>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  componentDidMount() {
    axios.get('http://localhost.charlesproxy.com:3000/api/todolist')
      .then((res)=>{
        this.setState(()=>{
          return {
            list: res.data
          }
        })
      })
      .catch(()=>{})
      
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

    // or using ...
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    }, () => {
      console.log(this.ul.querySelectorAll('div').length)

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
