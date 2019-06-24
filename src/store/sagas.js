import { takeEvery, put } from 'redux-saga/effects';
import { initListAction } from './actionCreators';
import axios from 'axios';

function* getInitList() {
  try {
    const res = yield axios.get('https://www.easy-mock.com/mock/5d0f1ffe7e96485dab376807/list.json');
    const action = initListAction(res.data);
    yield put(action);
  }catch(e) {
    console.log('mock list server erro 404');
  }
}

function* todoSagas() {
  yield takeEvery("get_init_list", getInitList);
}

export default todoSagas;
