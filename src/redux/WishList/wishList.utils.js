export const existingWishListItem = ({
  prevWishListItems,
  nextWishListItem
}) => {
  return prevWishListItems.find(
    wishListItem => wishListItem.documentID === nextWishListItem.documentID
  );
};

export const handleAddToWishList = ({
  prevWishListItems,
  nextWishListItem
}) => {
  const quantityIncrement = 1;
  const wishListItemExists = existingWishListItem({ prevWishListItems, nextWishListItem });

  if (wishListItemExists) {
    return prevWishListItems.map(wishListItem =>
      wishListItem.documentID == nextWishListItem.documentID
        ? {
          ...wishListItem,
          quantity: wishListItem.quantity + quantityIncrement
        } : wishListItem
    );
  }

  return [
    ...prevWishListItems,
    {
      ...nextWishListItem,
      quantity: quantityIncrement
    }
  ];
};

export const handleRemoveWishListItem = ({
  prevWishListItems,
  wishListItemToRemove
}) => {
  return prevWishListItems.filter(item => item.documentID !== wishListItemToRemove.documentID);
}
