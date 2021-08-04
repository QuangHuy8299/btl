import React, { useState, useEffect } from 'react';
import Modal from './../../../components/Modal';
import Button from './../../../components/froms/Button';
import FormInput from './../../../components/froms/FromInput';
import FormSelect from './../../../components/froms/FromSelect';
import { useDispatch, useSelector } from 'react-redux';
import { addProductStart, fetchProductsStart, deleteProductStart } from './../../../redux/Products/products.actions';
import LoadMore from './../../../components/LoadMore';
import CKEditor from 'ckeditor4-react';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const mapState = ({ productsData }) => ({
  products: productsData.products
});

const ProductAdmin = props => {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState('mens');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState('');

  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(
      fetchProductsStart()
    );

  }, []);

  const toggleModal = () => setHideModal(!hideModal);
  const configModal = {
    hideModal,
    toggleModal
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productDesc,
      })
    );
    resetForm();
  };

  const resetForm = () => {
    setHideModal(true);
    setProductCategory('men');
    setProductName('');
    setProductThumbnail('');
    setProductPrice(0);
    setProductDesc('');
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        startAfterDoc: queryDoc,
        persistProducts: data,
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <div className="admin main_content_iner">
      <div className="container-fluid p-0">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="dashboard_header mb_50">
              <div className="row">
                <div className="col-lg-6">
                  <div className="dashboard_header_title">
                    <h3>
                      Manage Products
                    </h3>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="dashboard_breadcam text-right">
                    <p><Link to="/admin">Dashboard</Link> / Product</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="QA_section">
              <div className="white_box_tittle list_header">
                <h4>Table</h4>
                <div className="box_right d-flex lms_block">
                  <div className="serach_field_2">
                    <div className="search_inner">
                      <form active="#">
                        <div className="search_field">
                          <input type="text" placeholder="Search content here..." />
                        </div>
                        <button type="submit"> <SearchIcon style={{ fontSize: "20px" }} /> </button>
                      </form>
                    </div>
                  </div>
                  <div className="add_button ml-10">
                    <a href="#" data-toggle="modal" data-target="#addcategory" className="btn_1" onClick={() => toggleModal()}>Add New</a>
                  </div>
                  <Modal {...configModal}>
                    <div className="addNewProductForm">
                      <form onSubmit={handleSubmit}>

                        <h2>
                          Add new product
                        </h2>

                        <FormSelect
                          label="Category"
                          options={[{
                            value: "mens",
                            name: "Mens"
                          }, {
                            value: "womens",
                            name: "Womens"
                          }]}
                          handleChange={e => setProductCategory(e.target.value)}
                        />

                        <FormInput
                          style={{width: "100%"}}
                          label="Name"
                          type="text"
                          value={productName}
                          handleChange={e => setProductName(e.target.value)}
                        />

                        <FormInput
                          label="Main image URL"
                          style={{width: "100%"}}
                          type="url"
                          value={productThumbnail}
                          handleChange={e => setProductThumbnail(e.target.value)}
                        />

                        <FormInput
                          label="Price"
                          style={{width: "100%"}}
                          type="number"
                          min="0.00"
                          max="10000.00"
                          step="0.01"
                          value={productPrice}
                          handleChange={e => setProductPrice(e.target.value)}
                        />
                        <br />
                        <label>Description</label>
                        <CKEditor
                          onChange={evt => setProductDesc(evt.editor.getData())}
                        />
                        <br />
                        <Button type="submit">
                          Add product
                        </Button>

                      </form>
                    </div>
                  </Modal>
                </div>
              </div>
              <div className="QA_table mb_30">
                <div className="dataTables_wrapper no-footer">
                  <table className="table lms_table_active dataTable no-footer dtr-inline">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Thumbnail</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {(Array.isArray(data) && data.length > 0) && data.map((product, index) => {
                        const {
                          productName,
                          productThumbnail,
                          productPrice,
                          documentID
                        } = product;
                        return (
                          <tr>
                            <td>
                              {productName}
                            </td>
                            <td>
                              <img className="thumb" src={productThumbnail} />
                            </td>
                            <td>
                              Category
                            </td>
                            <td>
                              ${productPrice}
                            </td>
                            <td>
                              <button className="edit_btn">
                                Edit
                              </button>
                            </td>
                            <td>
                              <button className="delete_btn" onClick={() => dispatch(deleteProductStart(documentID))}>
                                Delete
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="manageProducts">
        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td>
                <table border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>
                        {!isLastPage && (
                          <LoadMore {...configLoadMore} />
                        )}

                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductAdmin;