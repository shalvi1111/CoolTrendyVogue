// import React, { useState } from 'react';
// import axios from "axios";
// import {Link} from "react-router-dom";
// function AddProduct() {

//    // const [data , setData] = useState({
//    //    title :'',
//    //  //   image :'',
//    //    description :'',
//    //    price :'',
//    //    qty :'',
    
     
 
//    //  });

//     const [image , setImage]= useState('');
//     const [qty , setQty]= useState('');
//     const [price , setPrice]= useState('');
//     const [title , setTitle]= useState('');
//     const [description , setDescription]= useState('');
//     const [addedProduct, setAddedProduct] = useState(null);
//     // const [image , setImage]= useState('');
//     console.log(image);
//     console.log(title,price,description,qty,image ,"PIUDFBJ")
  
      
//     const handleTitle = (e) =>{
//       setTitle(e.target.value)
//     }

//     const handleDesc = (e) =>{
//       setDescription(e.target.value)
//     }

//     const handleQty = (e) =>{
//       setQty(e.target.value)
//     }

//     const handlePrice = (e) =>{
//       setPrice(e.target.value)
//     }
//    //  const handleInput = (event)=>{
//    //      const { name , value}= event.target ;
//    //       setData({...data ,[name] : value })
//    //  }
     
    
   
        

//      const  handleSubmit =(event) =>{
        
//          event.preventDefault()
//          const formData = new FormData()
//          formData.append("title", title);
//          formData.append("description", description);
//          formData.append("price", price);
//          formData.append("qty", qty);
//          formData.append("image", image);
        
//          // console.log(data);
//          axios
//         .post("http://localhost:4000/addProduct", formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         })
//         .then((res) => {
//           console.log(res.data, "Product Added");
//           setAddedProduct(res.data); // Store the newly added product in state
//         })
//         .catch((err) => {
//           console.error("Error adding product:", err);
//         });
//     }
         
     

//     return ( 
//       <div className="container p-5 m-5 text-center row" >
//       <form onSubmit={handleSubmit} encType="multipart/form-data"    >
      
//           <div className="col-10 offset-2">
//           <h1 className='fs-4 '><b><i>Unleash your creativity—add a product that will turn heads and set trends!</i></b></h1>
       

//          {/* <div className="col-8 title mb-4 ">
//                <label htmlFor ="image" ><b>Image:</b></label> &nbsp;
//                <input type='text' placeholder='Enter the image of product' name='image' style={{width:"90%"}}
//                  onSubmit={handleInput} />
//             </div> */}


//             <div className="title mb-4 mt-5 col-8 ">
//             <div className="d-inline-flex ">
//                <label htmlFor="title"  className="form-label fs-5"><b>Title:</b></label> &nbsp;&nbsp;
//                <input type='text' placeholder='Enter the title of the product' name='title'  
//                onChange={handleTitle}  className='form-control ms-5 w-100'/>
//             </div>
//             </div>


//             <div className=" description mb-4 col-8">
//             <div className="d-inline-flex align-items-center">
//                <label htmlFor="description" className="form-label fs-5"><b>Description:</b></label> 
//                <textarea name='description' className='col-8 row-6 form-control ms-5' 
//                  onChange={handleDesc} type="text" placeholder='Write the description' ></textarea>
//                  </div>
//             </div>

//              <div className="image mb-4 mt-5 col-8 ">
//             <div className="d-inline-flex ">
//                <label htmlFor="image"  className="form-label fs-5"><b>Image:</b></label> &nbsp;&nbsp;
//                <input type='text' placeholder='Enter the link of the product' name='image'   
//                onChange={(e)=> setImage(e.target.value)}  className='form-control ms-5 w-100'/>
//             </div>
//             </div> 


          
             
//              <div className="row m-4 p-2">
//             <div className=" price mb-4 col-6 text-end">
//             <div className="d-inline-flex ">
//               <label htmlFor="price" className="form-label fs-5"><b>Price:</b> </label> 
//               <input type='Number' placeholder='Enter price' name='price' style={{width:"50%"}}
//                onChange={handlePrice} className='form-control ms-4 '/>
//             </div>
//             </div>

//                <div className="col-6 mb-4 qty text-start">
//                <div className="d-inline-flex ">
//                   <label htmlFor='qty' className="form-label fs-5"><b>Quantity:</b></label>
//                   <input type='Number' placeholder='Qty. of Product' name='qty' style={{width:"50%"}} className='form-control ms-4 ' 
//                   onChange={handleQty} />
//                </div>
//                </div>

                

             
//             </div>

           

//             <div className="mb-3">
//             <button className='btn btn-dark m-2 p-2' style={{width:"20%" }} type='submit' >
//              <Link to ="/showProduct" style={{textDecoration:"none" , color:"white"}} >Add to shopping bag</Link>
//              {/* <button type='submit'>Submit</button> */}
//             </button>

           
//           </div>
//          </div>
      
//       </form>
     
//   </div>
//      );
// }

// export default AddProduct;












// -----------------------------------------------------------------------------------------------------


















import React, { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
// import { method } from "../../../backend/Schemas/UserSchema";

function AddProduct() {
  // const [image, setImage] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image ,setImage] = useState("");
  const [addedProduct, setAddedProduct] = useState(null); // To store the added product

 




    const handleFileChange = (event)=>{
      let imageFile = event.target.url
      setImage(imageFile);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("qty", qty);
      // formData.append("image", image);
  
      axios
  .post("http://localhost:4000/addProduct", formData)
  .then((res) => {
    console.log(res.data, "Product Added");
    setAddedProduct(res.data);
  })
  .catch((err) => {
    console.error("Error adding product:", err);
  });
}
 
    
  

  return (
    <div className="container p-5 m-5 text-center row">
      <form onSubmit={handleSubmit}  >
        <div className="col-10 offset-2">
          <h1 className="fs-4">
            <b>
              <i>
                Unleash your creativity—add a product that will turn heads and
                set trends!
              </i>
            </b>
          </h1>

          <div className="title mb-4 mt-5 col-8">
            <div className="d-inline-flex">
              <label htmlFor="title" className="form-label fs-5">
                <b>Title:</b>
              </label>
              &nbsp;&nbsp;
              <input
                type="text"
                placeholder="Enter the title of the product"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                className="form-control ms-5 w-100"
              />
            </div>
          </div>

          <div className="description mb-4 col-8">
            <div className="d-inline-flex align-items-center">
              <label htmlFor="description" className="form-label fs-5">
                <b>Description:</b>
              </label>
              <textarea
                name="description"
                className="col-8 row-6 form-control ms-5"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write the description"
              ></textarea>
            </div>
          </div>

          <div className="image mb-4 mt-5 col-8">
            <div className="d-inline-flex">
              <label htmlFor="image" className="form-label fs-5">
                <b>Image:</b>
              </label>
              &nbsp;&nbsp;
              <input
                type="text"
                name="image"
               
                onChange={handleFileChange}   
                // {...preview && <img alt="pic" src={preview} />} 
                className="form-control ms-5 w-100"
              />
            </div>
          </div>

          <div className="row m-4 p-2">
            <div className="price mb-4 col-6 text-end">
              <div className="d-inline-flex">
                <label htmlFor="price" className="form-label fs-5">
                  <b>Price:</b>
                </label>
                <input
                  type="number"
                  placeholder="Enter price"
                  name="price"
                  style={{ width: "50%" }}
                  onChange={(e) => setPrice(e.target.value)}
                  className="form-control ms-4"
                />
              </div>
            </div>

            <div className="col-6 mb-4 qty text-start">
              <div className="d-inline-flex">
                <label htmlFor="qty" className="form-label fs-5">
                  <b>Quantity:</b>
                </label>
                <input
                  type="number"
                  placeholder="Qty. of Product"
                  name="qty"
                  style={{ width: "50%" }}
                  className="form-control ms-4"
                  onChange={(e) => setQty(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="mb-3">
          <button className='btn btn-dark m-2 p-2' style={{width:"20%" }} type='submit' >
            {/* <Link to ="/showProduct" style={{textDecoration:"none" , color:"white"}} >Add to shopping bag</Link> */}
           <button type='submit'>Submit</button>
             </button>
          </div>

          {/* Display the newly added product details */}
          {addedProduct && (
            <div>
              <h3>Product Added Successfully:</h3>
              <p>Title: {addedProduct.title}</p>
              <p>Description: {addedProduct.description}</p>
              <p>Price: ₹{addedProduct.price}</p>
              <p>Quantity: {addedProduct.qty}</p>
              {/* <p>Image : {addedProduct.image && <img src=""}</p> */}
              {addedProduct.image && (
                <img
                  src={`http://localhost:4000${addedProduct.image}`}
                  // src={addedProduct.image}
                  alt={addedProduct.title}
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
              )}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddProduct;











// 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222