import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: 'change_input_value',
  value
}); 

export const getAddItemAction = () => ({
  type: 'add_todo_item'
});

export const getDeleteItemAction = (index) => ({
  type: 'delete_todo_item',
  index
});

export const initListAction = (data) => ({
  type: 'init_list_action',
  data
});

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5d0f1ffe7e96485dab376807/list.json').then((res)=>{
      const data = res.data;
      const action = initListAction(data);
      dispatch(action);
    })
  }
}

