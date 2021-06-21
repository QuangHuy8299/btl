import { createSelector } from 'reselect';

export const selectWishListData = state => state.wishListData;

export const selectWishListItems = createSelector(
  [selectWishListData],
  wishListData => wishListData.wishListItems
);

export const selectWishListItemsCount = createSelector(
  [selectWishListItems],
  wishListItems =>
    wishListItems.reduce(
      (quantity, wishList) =>
        quantity + wishList.quantity
      , 0)
);