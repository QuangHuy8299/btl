import wishListTypes from './wishList.types';

export const addWishListProduct = (nextWishListItem) => ({
  type: wishListTypes.ADD_TO_WISHLIST,
  payload: nextWishListItem
});

export const removeWishListItem = (wishListItem) => ({
  type: wishListTypes.REMOVE_WISHLIST_ITEM,
  payload: wishListItem
});
