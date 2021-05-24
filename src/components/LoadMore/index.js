import React from 'react';
import Button from './../froms/Button';

const LoadMore = ({
  onLoadMoreEvt = () => {},
}) => {
  return(
    <Button onClick={() =>onLoadMoreEvt()}>
      Load More
    </Button>
  );
};

export default LoadMore;