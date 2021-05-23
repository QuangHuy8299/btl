import { all, call } from 'redux-saga/effects';
import productsSagas from './Products/products.saga';

import userSagas from './User/user.saga';

export default function* rootSaga(){
  yield all([
    call(userSagas),
    call(productsSagas)
  ])
}

