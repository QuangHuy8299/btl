import { takeLatest, put, all, call } from 'redux-saga/effects';
import categoriesTypes from './categories.types';
import { handleAddCategory, handleFetchCategories, handleDeleteCategory, handleFetchCategory } from './categories.helper';
import { auth } from './../../firebase/utils';
import { setCategories, fetchCategoriesStart, setCategory } from './categories.actions';

export function* addCategory({ payload }) {
  try {
    const timestamp = new Date();
    yield handleAddCategory({
      ...payload,
      categoryAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp
    });
    yield put(
      fetchCategoriesStart()
    );
  } catch (err) {

  }
}

export function* onAddCategoryStart() {
  yield takeLatest(categoriesTypes.ADD_NEW_CATEGORY_START, addCategory)
}

export function* fetchCategories({ payload }) {
  try {
    const categories = yield handleFetchCategories(payload);
    yield put(
      setCategories(categories)
    );
  } catch (err) {

  }
}

export function* onFetchCategoriesStart() {
  yield takeLatest(categoriesTypes.FETCH_CATEGORIES_START, fetchCategories)
}

export function* deleteCategory({ payload }) {
  try {
    yield handleDeleteCategory(payload);
    yield put(
      fetchCategoriesStart()
    );
  } catch (err) {

  }
}

export function* onDeleteCategoryStart() {
  yield takeLatest(categoriesTypes.DELETE_CATEGORIES_START, deleteCategory)
}

export function* fetchCategory({ payload }) {
  try {
    const category = yield handleFetchCategory(payload);
    yield put(
      setCategory(category)
    )
  } catch (err) {

  }
}

export function* onFetchCategoryStart() {
  yield takeLatest(categoriesTypes.FETCH_CATEGORY_START, fetchCategory)
}

export default function* categoriesSagas() {
  yield all([
    call(onAddCategoryStart),
    call(onFetchCategoriesStart),
    call(onDeleteCategoryStart),
    call(onFetchCategoryStart)
  ])
}