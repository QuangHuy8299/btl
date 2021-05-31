import categoriesTypes from './categories.types';

export const addCategoryStart = categoryData => ({
  type: categoriesTypes.ADD_NEW_CATEGORY_START,
  payload: categoryData
});

export const fetchCategoriesStart = (filters = {}) => ({
  type: categoriesTypes.FETCH_CATEGORIES_START,
  payload: filters
});

export const setCategories = categories => ({
  type: categoriesTypes.SET_CATEGORIES,
  payload: categories
});

export const deleteCategoryStart = documentID => ({
  type: categoriesTypes.DELETE_CATEGORIES_START,
  payload: documentID
});

export const fetchCategoryStart = documentID => ({
  type: categoriesTypes.FETCH_CATEGORY_START,
  payload: documentID
});

export const setCategory = category => ({
  type: categoriesTypes.SET_CATEGORY,
  payload: category
});
