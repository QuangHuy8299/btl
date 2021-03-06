import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './User/user.reducer';
import productsReducer from './Products/products.reducer';
import cartReducer from './Cart/cart.reducer';
import ordersReducer from './Orders/orders.reducer';
import categoriesReducer from './Categories/categories.reducer';
import wishListReducer from './WishList/wishList.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cartData: cartReducer,
  ordersData: ordersReducer,
  categoriesData: categoriesReducer,
  wishListData: wishListReducer
});

const configStorage = {
  key: 'root',
  storage,
  whitelist: ['cartData', 'wishListData']
};

export default persistReducer(configStorage, rootReducer);
