import React from 'react';
import './../styles.scss';

const ProductAdditional = props => {
  return (
    <div className="pro_feature">
      <table className="shop_attributes">
        <tbody>
          <tr>
            <th>Weight</th>
            <td>1.2 kg</td>
          </tr>
          <tr>
            <th>Dimensions</th>
            <td>12 × 2 × 1.5 cm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductAdditional;