// import React from 'react';
// import { Card } from 'react-bootstrap';
// import Rating from './Rating';
// import { Link } from 'react-router-dom';

// function Product({ product }) {
//   return (
//     <Card className="my-3 p-3 rounded-5">
//       <Link to={`/product/${product._id}`}>
//         <Card.Img src={product.image} alt={product.name} className="rounded-4" />
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
//             <Rating
//               value={product.rating}
//               text={`${product.numReviews} reviews`}
//               color={'#f8e825'}
//             />
//           </div>
//         </Card.Text>

//         <Card.Text as="h3">${product.price}</Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }

// export default Product;
import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded-5">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          alt={product.name}
          className="rounded-4"
          style={{ height: '300px', objectFit: 'cover' }}
        />
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
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={'#f8e825'}
            />
          </div>
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
