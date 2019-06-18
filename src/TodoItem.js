import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const { content } = this.props;
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>)
  }
  handleClick() {
    const { handleItemDelete, index } = this.props;
    handleItemDelete(index)
  }
}

TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleItemDelete: PropTypes.func,
  index: PropTypes.number.isRequired
}

TodoItem.defaultProps = {

}



export default TodoItem;
