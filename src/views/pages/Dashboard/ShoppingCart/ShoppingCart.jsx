import React from "react";
import "./ShoppingCart.css";
import arrowicon from "../../../../assets/Addtocart/arrow.png";
import button1 from "../../../../assets/Addtocart/Rectangle 6.png";
import button2 from "../../../../assets/Addtocart/Rectangle 7.png";
import deletebtn from "../../../../assets/Addtocart/Trash Can.png";
import manimage from '../../../../assets/Rectangle 3.png';
import cardimage from '../../../../assets/Frame 77.png';
import right from '../../../../assets/Right.png';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeProduct } from "../../../../state/productSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const handleAddToDelete = (productId) => {
    dispatch(removeProduct(productId));
  };

  const handleIncreaseItems = (productId) => {
    dispatch(increaseQuantity(productId));
  };

  const handleDecreaseItems = (productId) => {
    dispatch(decreaseQuantity(productId));
  };

  const totalPrice = products.reduce((total, product) => {
    const priceNumber = parseFloat(product.price.replace(/[^0-9.-]+/g, "")); 
    return total + priceNumber * product.quantity; 
  }, 0);

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between mt-10 gap-5 bg-white p-5 rounded-lg shadow-lg">
          <div className="w-full">
            <div className="row">
              <Link to="/dashboard">
                <div className="flex items-center justify-start heading-shoppingcart gap-2 py-4">
                  <img className="img-fluid" src={arrowicon} alt="" />
                  <h4>Shopping Continue</h4>
                </div>
              </Link>
            </div>
            <hr className="shopping-cart-line" />
            <div className="row mt-6">
              <div className="grid sub-heading-rapo gap-1">
                <h4>Shopping Cart</h4>
                <p>You have {products.length} items in your cart</p>
              </div>
            </div>

            <div className="w-full">
              <ul className="divide-y">
                {products.map((product) => (
                  <li key={product.id} className="py-3 sm:py-4 product-row my-5">
                    <div className="flex flex-col sm:flex-row items-center">
                      <div className="flex-shrink-0 h-[100px]">
                        <img
                          className="img-fluid products-img rounded-full"
                          src={product.imgSrc}
                          alt={product.title}
                        />
                      </div>
                      <div className="flex-1 min-w-0 ms-4">
                        <h6 className="products-tittle">{product.title}</h6>
                        <p className="products-tittle-txt">{product.category}</p>
                      </div>
                      <div className="inline-flex items-center justify-between gap-10 text-base font-semibold text-gray-900 dark:text-white lg:mt-0 md:mt-8 sm:mt-6">
                        <div className="flex items-center gap-2 buttons-txt-rapo">
                          <p>{product.quantity}</p>
                          <div className="buttons-rapo grid gap-2">
                            <button type="button" onClick={() => handleIncreaseItems(product.id)}>
                              <img className="img-fluid" src={button1} alt="Increase" />
                            </button>
                            <button type="button" onClick={() => handleDecreaseItems(product.id)}>
                              <img className="img-fluid" src={button2} alt="Decrease" />
                            </button>
                          </div>
                        </div>
                        <div className="total-price">
                          <h6>{`$${(parseFloat(product.price.replace(/[^0-9.-]+/g, "")) * product.quantity).toFixed(2)}`}</h6>
                        </div>
                        <div className="delete-btn">
                          <button type="button" onClick={() => handleAddToDelete(product.id)}>
                            <img className="img-fluid" src={deletebtn} alt="Delete" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='grid min-w-[325px]'>
            <div className='col-span-4 bg-[#89089F] rounded-xl px-5 py-5'>
              <div className='flex items-center justify-between'>
                <span className='text-white text-[24px]'>Card Details</span>
                <img src={manimage} alt="" />
              </div>
              <p className='text-white text-start text-[15px] mt-4 fw-medium'>Card type</p>
              <div className='mt-2'><img src={cardimage} alt="" /></div>

              <div className='text-white text-start mt-7'>
                <label htmlFor="" className='text-[15px] fw-medium '>Name on card</label>
                <div className='bg-[#BA68C8] rounded-md py-2 px-3 mt-2'>
                  <input type="text" placeholder='Name' className='bg-transparent placeholder-white outline-none w-[100%]' />
                </div>
              </div>

              <div className='text-white text-start mt-5'>
                <label htmlFor="" className='text-[15px] fw-medium '> Card Number</label>
                <div className='bg-[#BA68C8] rounded-md py-2 px-3 mt-2'>
                  <input type="number" placeholder='1111 2222 3333 4444' className='bg-transparent placeholder-white outline-none w-[100%]' />
                </div>
              </div>

              <div className='flex gap-3 w-[100%] '>
                <div className='text-white text-start mt-5 w-[50%] '>
                  <label htmlFor="" className='text-[15px] fw-medium '>Expiration date</label>
                  <div className='bg-[#BA68C8] rounded-md py-2 px-3 mt-2'>
                    <input type="date" placeholder='' className='bg-transparent placeholder-white outline-none w-[100%]' />
                  </div>
                </div>

                <div className='text-white text-start mt-5 w-[50%] '>
                  <label htmlFor="" className='text-[15px] fw-medium '> CVV</label>
                  <div className='bg-[#BA68C8] rounded-md py-2 px-3 mt-2'>
                    <input type="number" placeholder='123' className='bg-transparent placeholder-white outline-none w-[100%]' />
                  </div>
                </div>
              </div>

              <div className='border-t-2 mt-5 border-gray-400 p-2'>
                <div className='text-white flex mt-5 justify-between'>
                  <span>Subtotal</span>
                  <span>{`$${totalPrice.toFixed(2)}`}</span>
                </div>

                <div className='text-white flex mt-2 justify-between'>
                  <span>Shipping</span>
                  <span>$4</span>
                </div>

                <div className='text-white flex mt-2 justify-between'>
                  <span>Total (Tax incl.)</span>
                  <span>{`$${(totalPrice + 4).toFixed(2)}`}</span> 
                </div>

                <div className='text-white flex justify-between bg-[#BA68C8] rounded-lg py-3 px-4 text-start mt-5'>
                  <span>{`$${(totalPrice + 4).toFixed(2)}`}</span>
                  <span className='flex'><a href="/">Checkout</a><img src={right} alt="" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
