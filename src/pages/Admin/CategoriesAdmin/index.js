import React, { useState, useEffect } from 'react';
import Modal from './../../../components/Modal';
import Button from './../../../components/froms/Button';
import FormInput from './../../../components/froms/FromInput';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryStart, fetchCategoriesStart, deleteCategoryStart } from './../../../redux/Categories/categories.actions';
import LoadMore from './../../../components/LoadMore';
import CKEditor from 'ckeditor4-react';

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
    <div className="admin">

      <div className="callToActions">
        <ul>
          <li>
            <Button onClick={() => toggleModal()}>
              Add new category
            </Button>
          </li>
        </ul>
      </div>

      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>

            <h2>
              Add new category
            </h2>

            <FormInput
              label="Name"
              type="text"
              value={categoryName}
              handleChange={e => setCategoryName(e.target.value)}
            />
            <br />

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
      <div className="manageProducts">
        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <th>
                <h1>
                  Manage Categories
                </h1>
              </th>
            </tr>
            <tr>
              <td>
                <table className="results" border="0" cellPadding="10" cellSpacing="0">
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
                            <Button onClick={() => dispatch(deleteCategoryStart(documentID))}>
                              Delete
                            </Button>
                          </td>
                        </tr>
                      )
                    })}

                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>

              </td>
            </tr>
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