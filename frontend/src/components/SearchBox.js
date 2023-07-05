// import React, { useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// function SearchBox() {
//   const [keyword, setKeyword] = useState('');
//   const navigate = useNavigate();

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (keyword) {
//       navigate(`/?keyword=${keyword}&page=1`);
//     } else {
//       navigate('/');
//     }
//   };

//   return (
//     <Form onSubmit={submitHandler} inline>
//       <div className="d-flex align-items-center">
//         <Form.Control
//           type="text"
//           name="q"
//           placeholder="Search..."
//           onChange={(e) => setKeyword(e.target.value)}
//           className="mr-2"
//         />
//         <div className="ml-2">
//           <Button type="submit" variant="outline-success">
//             Submit
//           </Button>
//         </div>
//       </div>
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
      <div className="d-flex align-items-center">
        <Form.Control
          type="text"
          name="q"
          placeholder="Search"
          onChange={(e) => setKeyword(e.target.value)}
          className="mr-2"
        />
        <div className="ml-2">
          <Button type="submit" variant="outline-success">
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default SearchBox;
