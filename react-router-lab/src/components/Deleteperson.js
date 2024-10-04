import React from 'react';

const handleDelete = () => {
 
  const API_URL=process.env.REACT_APP_API_URL

return (
 <h1> this is the output</h1 >

  );
};

  export default DeletePerson;



// import React from 'react';

// const DeletePerson = ({ id, onDelete }) => {
//   const API_URL = process.env.REACT_APP_API_URL;
//   const handleDelete = () => {
//     if (window.confirm('Are you sure you want to delete this person?')) {
//       onDelete(id);
//     }
//   };

//   return (
//     <button className="btn btn-delete" onClick={handleDelete}>
//       Delete
//     </button>
//   );
// };

// export default DeletePerson;