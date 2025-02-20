import React from 'react';
function NotFound() {
    return ( 
      <div className="conatiner text-center m-5 p-5">
         <img
                src="../font-awesome/images/404-error.png"
                alt="NOTFound"
                style={{ width: "20%" }}
              />
            <h1 className='fs-2 mt-2 mb-2'><b>Oops... page not found</b></h1>
            <h2 className='fs-4'>We don't know how you ended up here,but you should go away now.</h2>
      </div>
     );
}

export default NotFound;