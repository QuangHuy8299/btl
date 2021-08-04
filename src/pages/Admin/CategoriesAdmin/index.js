import React, { useState, useEffect } from 'react';
import Modal from './../../../components/Modal';
import Button from './../../../components/froms/Button';
import FormInput from './../../../components/froms/FromInput';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryStart, fetchCategoriesStart, deleteCategoryStart } from './../../../redux/Categories/categories.actions';
import LoadMore from './../../../components/LoadMore';
import CKEditor from 'ckeditor4-react';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const mapState = ({ categoriesData }) => ({
  categories: categoriesData.categories
});

const CategoriesAdmin = props => {
  const { categories } = useSelector(mapState);
  const dispatch = useDispatch();
  const [hideModal, setHideModal] = useState(true);
  const [categoryName, setCategoryName] = useState('');
  const [categoryDesc, setCategoryDesc] = useState('');

  const { data, queryDoc, isLastPage } = categories;

  useEffect(() => {
    dispatch(
      fetchCategoriesStart()
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
      addCategoryStart({
        categoryName,
        categoryDesc,
      })
    );
    resetForm();
  };

  const resetForm = () => {
    setHideModal(true);
    setCategoryName('');
    setCategoryDesc('');
  };

  const handleLoadMore = () => {
    dispatch(
      fetchCategoriesStart({
        startAfterDoc: queryDoc,
        persistCategories: data,
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
                          Add new category
                        </h2>

                        <FormInput
                          label="Name"
                          style={{width: "100%"}}
                          type="text"
                          value={categoryName}
                          handleChange={e => setCategoryName(e.target.value)}
                        />
                        <br />
                        <label>Description</label>
                        <CKEditor
                          onChange={evt => setCategoryDesc(evt.editor.getData())}
                        />
                        <br />
                        <Button type="submit">
                          Add category
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
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {(Array.isArray(data) && data.length > 0) && data.map((category, index) => {
                        const {
                          categoryName,
                          documentID
                        } = category;
                        return (
                          <tr>
                            <td>
                              {categoryName}
                            </td>
                            <td>
                              <button className="edit_btn">
                                Edit
                              </button>
                            </td>
                            <td>
                              <Button className="delete_btn" onClick={() => dispatch(deleteCategoryStart(documentID))}>
                                Delete
                              </Button>
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

export default CategoriesAdmin;