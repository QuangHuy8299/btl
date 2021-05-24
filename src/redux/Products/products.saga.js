import { takeLatest, put, all, call } from 'redux-saga/effects';
import productTypes from './products.types';
import { handleAddProduct, handleFetchProducts, handleDeleteProduct, handleFetchProduct } from './products.helpers';
import { auth } from './../../firebase/utils';
import { setProducts, fetchProductsStart, setProduct } from './products.actions';

export function* addProduct({ payload }) {
  try {
    const timestamp = new Date();
    yield handleAddProduct({
      ...payload,
      productAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp
    });
    yield put(
      fetchProductsStart()
    );
  } catch (err) {

  }
}

export function* onAddProductStart() {
  yield takeLatest(productTypes.ADD_NEW_PRODUCT_START, addProduct)
}

export function* fetchProducts({ payload }) {
  try {
    const products = yield handleFetchProducts(payload);
    yield put(
      setProducts(products)
    );
  } catch (err) {

  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productTypes.FETCH_PRODUCTS_START, fetchProducts)
}

export function* deleteProduct({ payload }) {
  try {
    yield handleDeleteProduct(payload);
    yield put(
      fetchProductsStart()
    );
  } catch (err) {

  }
}

export function* onDeleteProductStart() {
  yield takeLatest(productTypes.DELETE_PRODUCTS_START, deleteProduct)
}

export function* fetchProduct({ payload }) {
  try {
    const product = yield handleFetchProduct(payload);
    yield put(
      setProduct(product)
    )
  } catch (err) {

  }
}

export function* onFetchProductStart() {
  yield takeLatest(productTypes.FETCH_PRODUCT_START, fetchProduct)
}

export default function* productsSagas() {
  yield all([
    call(onAddProductStart),
    call(onFetchProductsStart),
    call(onDeleteProductStart),
    call(onFetchProductStart)
  ])
}