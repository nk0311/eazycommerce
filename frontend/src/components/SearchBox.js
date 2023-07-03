// // import React, {useState} from 'react'
// // import { Button, Form } from 'react-bootstrap'
// // import { useSearchParams } from 'react-router-dom'

// // function SearchBox() {
// //     const [searchParams, setSearchParams] = useSearchParams();
// //     const [keyword, setKeyword] = useState('')

// //     // const submitHandler = (e) =>{
// //     //     e.preventDefault()
// //     // }

// //     const submitHandler = (e) => {
// //         e.preventDefault();
// //         setSearchParams({ q: keyword });
// //         navigate(`/search`); // Replace '/search' with the actual path for search results
// //       };
      

    
// //     return (
// //         <Form onSubmit={submitHandler} inline>
// //             <Form.Control
// //                 type='text'
// //                 name='q'
// //                 onChange={ (e) => setKeyword(e.target.value)}
// //                 className='mr-sm-2 ml-sm-5'
// //             ></Form.Control>


// //             <Button
// //                 type='submit'
// //                 variant='outline-success'
// //                 className='p-2'
// //             >
// //                 Submit
// //             </Button>

// //         </Form>
// //     )
// // }

// // export default SearchBox


// import React, { useState } from 'react';
// import { Link, useSearchParams, useNavigate } from 'react-router-dom';
// import { Button, Form } from 'react-bootstrap';

// function SearchBox() {
//   const [keyword, setKeyword] = useState('');
// //   const [searchParams, setSearchParams] = useSearchParams();
//   const navigate = useNavigate();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if(keyword){
//         navigate(`/?keyword=${keyword}`)
//     }

//     else{
//         history.pushState(history.pushState(history.location.pathname))
//     }

    
//     // setSearchParams({ q: keyword });
//     // navigate(`/search`); // Replace '/search' with the actual path for search results
//   };

//   return (
//     <Form onSubmit={submitHandler} inline>
//       <Form.Control
//         type="text"
//         name="q"
//         onChange={(e) => setKeyword(e.target.value)}
//         className="mr-sm-2 ml-sm-5"
//       />

//       <Button
//         type="submit"
//         variant="outline-success" 
//         className="p-2"
//         >
      
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default SearchBox;


// import React, { useState } from 'react';
// import { Link, useSearchParams, useNavigate } from 'react-router-dom';
// import { Button, Form } from 'react-bootstrap';

// function SearchBox() {
//   const [keyword, setKeyword] = useState('');
//   const [searchParams, setSearchParams] = useSearchParams();
//   const navigate = useNavigate();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (keyword) {
//       setSearchParams({ keyword });
//       navigate('/search');
//     } else {
//       navigate('/');
//     }
//   };

//   return (
//     <Form onSubmit={submitHandler} inline>
//       <Form.Control
//         type="text"
//         name="q"
//         value={keyword}
//         onChange={(e) => setKeyword(e.target.value)}
//         className="mr-sm-2 ml-sm-5"
//       />

//       <Button type="submit" variant="outline-success" className="p-2">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default SearchBox;

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SearchBox() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/?keyword=${keyword}&page=1`);
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        className="mr-sm-2 ml-sm-5"
      />

      <Button type="submit" variant="outline-success" className="p-2">
        Submit
      </Button>
    </Form>
  );
}

export default SearchBox;
