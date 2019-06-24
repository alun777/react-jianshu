
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

export const getInitList = () => ({
  type: 'get_init_list'
});

