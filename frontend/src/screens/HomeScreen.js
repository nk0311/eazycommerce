// import React, {useState, useEffect} from 'react'
// import { useDispatch, useSelector} from 'react-redux'
// import {Row, Col} from 'react-bootstrap'
// import Product from '../components/Product'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
// // import axios from 'axios'
// import { listProducts  } from '../actions/productActions'

// function HomeScreen() {
//   // const [products, setProducts] = useState([])
//   const dispatch = useDispatch()
//   const productList = useSelector(state => state.productList)
//   const {error, loading, products }= productList


  
//   useEffect(() =>{
//     dispatch(listProducts())

//       // async function fetchProducts(){
//       //   const { data } = await axios.get('/api/products/')
//       //   setProducts(data)
//       // }
//       // fetchProducts()
     
//   }, [dispatch])
//   // const products = []

//   return (
//     <div>
//         <h1>Latest Products</h1>
//         {loading ? <Loader/>
//             : error ? <Message variant='danger'>{error}</Message>
//             : 
//             <Row>
//             {products.map(product => (
//                 <Col key={product._id} sm={12} md={6} lg={4} xl={3}>

//                     <Product product={product} />
//                 </Col>
//             ))}
//         </Row>
//         }
//         {/* <Row>
//             {products.map(product => (
//                 <Col key={product._id} sm={12} md={6} lg={4} xl={3}>

//                     <Product product={product} />
//                 </Col>
//             ))}
//         </Row> */}
      
//     </div>
//   )
// }

// export default HomeScreen
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Row, Col } from 'react-bootstrap';
// import Product from '../components/Product';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import { listProducts } from '../actions/productActions';
// import { useSearchParams } from 'react-router-dom';

// function HomeScreen() {
//   const dispatch = useDispatch();
//   const productList = useSelector((state) => state.productList);
//   const { error, loading, products } = productList;
//   const [searchParams] = useSearchParams();

//   useEffect(() => {
//     dispatch(listProducts(searchParams.get('keyword')));

//     // async function fetchProducts(){
//     //   const { data } = await axios.get('/api/products/')
//     //   setProducts(data)
//     // }
//     // fetchProducts()
//   }, [dispatch, searchParams]);

//   return (
//     <div>
//       <h1>Latest Products</h1>
//       {loading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant="danger">{error}</Message>
//       ) : (
//         <Row>
//           {products.map((product) => (
//             <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//               <Product product={product} />
//             </Col>
//           ))}
//         </Row>
//       )}
//     </div>
//   );
// }

// export default HomeScreen;
// import React, { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Row, Col } from 'react-bootstrap'
// import Product from '../components/Product'
// import Loader from '../components/Loader'
// import Message from '../components/Message'
// import { listProducts } from '../actions/productActions'


// function HomeScreen({ history }) {
//     const dispatch = useDispatch()
//     const productList = useSelector(state => state.productList)
//     const { error, loading, products, page, pages } = productList

//     let keyword = history.location.search

//     useEffect(() => {
//         dispatch(listProducts(keyword))

//     }, [dispatch, keyword])

//     return (
//         <div>
            

//             <h1>Latest Products</h1>
//             {loading ? <Loader />
//                 : error ? <Message variant='danger'>{error}</Message>
//                     :
//                     <div>
//                         <Row>
//                             {products.map(product => (
//                                 <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
//                                     <Product product={product} />
//                                 </Col>
//                             ))}
//                         </Row>
                    
//                     </div>
//             }
//         </div>
//     )
// }

// export default HomeScreen

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProducts } from '../actions/productActions';
import { useLocation } from 'react-router-dom';

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get('keyword');

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
