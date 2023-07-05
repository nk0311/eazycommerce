// import React from 'react'
// import { Card } from 'react-bootstrap'
// import Rating from './Rating'
// import { Link } from 'react-router-dom'

// function Product({ product }) {
//   return (
//     <Card className="my-3 p-3 rounder">
//         <a href={`/product/${product._id}`}>
//             <Card.Img src={product.image}/>
//         </a>

//         <Card.Body>
//         <Link to={`/product/${product._id}`}>
//             <Card.Title as="div">
//                 <strong>{product.name}</strong>
//             </Card.Title>
//         </Link>

//         <Card.Text as="div">
//             {/* This will show the number of reviews */}
//             <div className="my-3">
//                 {product.rating} from {product.numReviews} reviews
//                 <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
//             </div>
//         </Card.Text>

//         <Card.Text as="h3">
//             ${product.price}

//         </Card.Text>
//         </Card.Body>

 
//     </Card>
//   )
// }

// export default Product

// import React from 'react';
// import { Card } from 'react-bootstrap';
// import Rating from './Rating';
// import { Link } from 'react-router-dom';

// function Product({ product }) {
//   return (
//     <Card className="my-3 p-3 rounded product-card">
//       <Link to={`/product/${product._id}`}>
//         <Card.Img src={product.image} />
//       </Link>

//       <Card.Body>
//         <Link to={`/product/${product._id}`}>
//           <Card.Title as="div">
//             <strong>{product.name}</strong>
//           </Card.Title>
//         </Link>

//         <Card.Text as="div">
//           <div className="my-3">
//             {product.rating} from {product.numReviews} reviews
//             <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
//           </div>
//         </Card.Text>

//         <Card.Text as="h3">${product.price}</Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Product;

import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

function Product({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      className={`my-3 p-3 rounded product-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
            {product.rating} from {product.numReviews} reviews
            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
          </div>
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
