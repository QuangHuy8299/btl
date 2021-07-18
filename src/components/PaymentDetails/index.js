import React, { useState, useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import FormInput from './../froms/FromInput';
import Button from './../froms/Button';
import { CountryDropdown } from 'react-country-region-selector';
import { apiInstance } from './../../Utils';
import { selectCartTotal, selectCartItemsCount, selectCartItems } from './../../redux/Cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveOrderHistory } from './../../redux/Orders/orders.actions';
import { Link } from 'react-router-dom';
import './styles.scss';

const initialAddressState = {
  line1: '',
  line2: '',
  city: '',
  state: '',
  postal_code: '',
  country: '',
};

const mapState = createStructuredSelector({
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
  cartItems: selectCartItems,
});

const PaymentDetails = () => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const { total, itemCount, cartItems } = useSelector(mapState);
  const dispatch = useDispatch();
  const [billingAddress, setBillingAddress] = useState({ ...initialAddressState });
  const [shippingAddress, setShippingAddress] = useState({ ...initialAddressState });
  const [recipientName, setRecipientName] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');

  useEffect(() => {
    if (itemCount < 1) {
      history.push('/dashboard');
    }

  }, [itemCount]);

  const handleShipping = evt => {
    const { name, value } = evt.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value
    });
  };

  const handleBilling = evt => {
    const { name, value } = evt.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value
    });
  }

  const handleFormSubmit = async evt => {
    evt.preventDefault();
    const cardElement = elements.getElement('card');

    if (
      !shippingAddress.line1 || !shippingAddress.city ||
      !shippingAddress.state || !shippingAddress.postal_code ||
      !shippingAddress.country || !billingAddress.line1 ||
      !billingAddress.city || !billingAddress.state ||
      !billingAddress.postal_code || !billingAddress.country ||
      !recipientName || !nameOnCard
    ) {
      return;
    }

    apiInstance.post('/payments/create', {
      amount: total * 100,
      shipping: {
        name: recipientName,
        address: {
          ...shippingAddress
        }
      }
    }).then(({ data: clientSecret }) => {

      stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: nameOnCard,
          address: {
            ...billingAddress
          }
        }
      }).then(({ paymentMethod }) => {

        stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id
        })
          .then(({ paymentIntent }) => {

            const configOrder = {
              orderTotal: total,
              orderItems: cartItems.map(item => {
                const { documentID, productThumbnail, productName,
                  productPrice, quantity } = item;

                return {
                  documentID,
                  productThumbnail,
                  productName,
                  productPrice,
                  quantity
                };
              })
            }

            dispatch(
              saveOrderHistory(configOrder)
            );
          });

      })


    });

  };

  const configCardElement = {
    iconStyle: 'solid',
    style: {
      base: {
        fontSize: '16px'
      }
    },
    hidePostalCode: true
  };

  return [
    <div className="breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row breadcrumb_box  align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6 text-center text-sm-left">
                <h2 className="breadcrumb-title">Checkout</h2>
              </div>
              <div className="col-lg-6  col-md-6 col-sm-6">
                <div className="breadcrumb-list text-center text-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">
                    Checkout
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div className="site-wrapper-reveal border-bottom">
      <div className="checkout-main-area section-space--ptb_90">
        <div className="container">
          <div className="checkout-wrap">
            <form onSubmit={handleFormSubmit}>
              <div className="row">
                <div className="col-lg-6">
                  <div className="group billing-info-wrap mr-100">
                    <h6 className="mb-20">
                      Shipping Address
                    </h6>
                    <div className="col-lg-10 col-md-10">
                      <div className="billing-info mb-25">
                        <label>Recipient Name<span className="required" title="required">*</span></label>
                        <FormInput
                          required
                          placeholder="Recipient Name"
                          name="recipientName"
                          handleChange={evt => setRecipientName(evt.target.value)}
                          value={recipientName}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10">
                      <div className="billing-info mb-25">
                        <label>Line 1<span className="required" title="required">*</span></label>
                        <FormInput
                          required
                          placeholder="Line 1"
                          name="line1"
                          handleChange={evt => handleShipping(evt)}
                          value={shippingAddress.line1}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10">
                      <div className="billing-info mb-25">
                        <label>Line 2<span className="required" title="required">*</span></label>
                        <FormInput
                          placeholder="Line 2"
                          name="line2"
                          handleChange={evt => handleShipping(evt)}
                          value={shippingAddress.line2}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10">
                      <div className="billing-info mb-25">
                        <label>City<span className="required" title="required">*</span></label>
                        <FormInput
                          required
                          placeholder="City"
                          name="city"
                          handleChange={evt => handleShipping(evt)}
                          value={shippingAddress.city}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10">
                      <div className="billing-info mb-25">
                        <label>State<span className="required" title="required">*</span></label>
                        <FormInput
                          required
                          placeholder="State"
                          name="state"
                          handleChange={evt => handleShipping(evt)}
                          value={shippingAddress.state}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10">
                      <div className="billing-info mb-25">
                        <label>Postal Code<span className="required" title="required">*</span></label>
                        <FormInput
                          required
                          placeholder="Postal Code"
                          name="postal_code"
                          handleChange={evt => handleShipping(evt)}
                          value={shippingAddress.postal_code}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10">
                      <div className="billing-info mb-25">
                        <label>country<span className="required" title="required">*</span></label>
                        <div className="formRow checkoutInput">
                          <CountryDropdown
                            required
                            onChange={val => handleShipping({
                              target: {
                                name: 'country',
                                value: val
                              }
                            })}
                            value={shippingAddress.country}
                            valueType="short"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="group billing-info-wrap mr-100">
                    <h6 className="mb-20">
                      Billing Address
                    </h6>
                    <div className="">
                      <div className="col-lg-10 col-md-10">
                        <div className="billing-info mb-25">
                          <label>Name on Card<span className="required" title="required">*</span></label>
                          <FormInput
                            required
                            placeholder="Name on Card"
                            name="nameOnCard"
                            handleChange={evt => setNameOnCard(evt.target.value)}
                            value={nameOnCard}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-10">
                        <div className="billing-info mb-25">
                          <label>Line 1<span className="required" title="required">*</span></label>
                          <FormInput
                            required
                            placeholder="Line 1"
                            name="line1"
                            handleChange={evt => handleBilling(evt)}
                            value={billingAddress.line1}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-10">
                        <div className="billing-info mb-25">
                          <label>Line 2<span className="required" title="required">*</span></label>
                          <FormInput
                            placeholder="Line 2"
                            name="line2"
                            handleChange={evt => handleBilling(evt)}
                            value={billingAddress.line2}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-10">
                        <div className="billing-info mb-25">
                          <label>City<span className="required" title="required">*</span></label>
                          <FormInput
                            required
                            placeholder="City"
                            name="city"
                            handleChange={evt => handleBilling(evt)}
                            value={billingAddress.city}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-10">
                        <div className="billing-info mb-25">
                          <label>State<span className="required" title="required">*</span></label>
                          <FormInput
                            required
                            placeholder="State"
                            name="state"
                            handleChange={evt => handleBilling(evt)}
                            value={billingAddress.state}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-10">
                        <div className="billing-info mb-25">
                          <label>Postal Code<span className="required" title="required">*</span></label>
                          <FormInput
                            required
                            placeholder="Postal Code"
                            name="postal_code"
                            handleChange={evt => handleBilling(evt)}
                            value={billingAddress.postal_code}
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-10">
                        <div className="billing-info mb-25">
                          <label>Country<span className="required" title="required">*</span></label>
                          <div className="formRow checkoutInput">
                            <CountryDropdown
                              required
                              onChange={val => handleBilling({
                                target: {
                                  name: 'country',
                                  value: val
                                }
                              })}
                              value={billingAddress.country}
                              valueType="short"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="group">
                <h2>
                  Card Details
                </h2>

                <CardElement
                  options={configCardElement}
                />
              </div>
              <div className="place-order mt-30" style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className="btn--full btn--black btn--lg-check text-center">
                  <Button
                    type="submit"
                    style={{color: "white"}}
                  >
                    Pay Now
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>,
    <div className="paymentDetails" style={{ paddingTop: '160px' }}>

    </div>
  ];
}

export default PaymentDetails;