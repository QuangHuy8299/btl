import { all, call } from 'redux-saga/effects';
import productsSagas from './Products/products.saga';
import orderSagas from './Orders/orders.sagas'
import userSagas from './User/user.saga';
import categoriesSagas from './Categories/categories.saga';

export default function* rootSaga(){
  yield all([
    call(userSagas),
    call(productsSagas),
    call(orderSagas),
    call(categoriesSagas),
  ])
}

