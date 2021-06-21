import wishListTypes from './wishList.types';
import { handleAddToWishList, handleRemoveWishListItem } from './wishList.utils';

const INITIAL_STATE = {
  wishListItems: []
};

const wishListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case wishListTypes.ADD_TO_WISHLIST:
      return {
        ...state,
        wishListItems: handleAddToWishList({
          prevWishListItems: state.wishListItems,
          nextWishListItem: action.payload
        })
      };
    case wishListTypes.REMOVE_WISHLIST_ITEM:
      return {
        ...state,
        wishListItems: handleRemoveWishListItem({
          prevWishListItems: state.wishListItems,
          wishListItemToRemove: action.payload
        })
      };
    default:
      return state;
  }
};

export default wishListReducer;