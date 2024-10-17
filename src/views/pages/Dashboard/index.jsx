import React from 'react';
import Banner from '../../../components/Banner';
import cartIcon from '../../../assets/Dashboard/Group.svg';
import { Link } from 'react-router-dom';
import Card from '../../../components/Card/Card';
import { addProduct } from '../../../state/productSlice';
import { useDispatch , useSelector } from 'react-redux';
import toast from "react-hot-toast";

const Index = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.product.products);

  const products = [
    { id: 1, title: 'Sneakers', price: '$65.00', imgSrc: "https://res.cloudinary.com/dtdj79xok/image/upload/fl_preserve_transparency/v1729151310/image_3_bld927.jpg?_s=public-apps", category: 'Running' },
    { id: 2, title: 'Running Shoes', price: '$70.00', imgSrc: 'https://res.cloudinary.com/dtdj79xok/image/upload/v1729151310/image_5_vj4v7l.png', category: 'Running' },
    { id: 3, title: 'Basketball Shoes', price: '$80.00', imgSrc: 'https://res.cloudinary.com/dtdj79xok/image/upload/v1729151310/image_4_lfevxt.png', category: 'Basketball' },
    { id: 4, title: 'Casual Shoes', price: '$55.00', imgSrc: 'https://res.cloudinary.com/dtdj79xok/image/upload/v1729151310/image_2_bthruk.png', category: 'Casual' },
    { id: 5, title: 'Sandals', price: '$40.00', imgSrc: 'https://res.cloudinary.com/dtdj79xok/image/upload/v1729151310/image_5_vj4v7l.png', category: 'Casual' },
];

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        console.log("Product already in cart:", product);
        toast.error("Product already in cart");
        return; 
    }
    dispatch(addProduct(product));
    console.log("Added to cart:", product);
  };

 
  return (
    <div className="relative">
      <div className="flex justify-end mr-6">
        <Link to="/addtocart">
          <button className="flex items-center bg-white text-black bg-[white] py-2 px-4 rounded-full mr-4 mt-4 mb-4">
            <img src={cartIcon} alt="Cart Icon" className="w-5 h-5 mr-2" />
            My Cart
          </button>
        </Link>
      </div>

      <div className='banner' >
        <Banner />
      </div>
      <div className="product-section flex justify-center p-4">
      <div className='product-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4 items-center '>
        {products.map(product => (
          <Card 
            key={product.id}
            title={product.title}
            price={product.price}
            imgSrc={product.imgSrc}
            category={product.category}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
      </div>


      {/* <div className="product-section flex justify-center p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 items-center">
  {products.map(product => (
          <Card 
            key={product.id}
            title={product.title}
            price={product.price}
            imgSrc={product.imgSrc}
            category={product.category}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
  </div>
</div> */}
    </div>
  );
};

export default Index;
