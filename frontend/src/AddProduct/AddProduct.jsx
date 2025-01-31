// // import React, { useState } from 'react';
// // import axios from "axios";
// // import {Link} from "react-router-dom";
// // function AddProduct() {

// //    // const [data , setData] = useState({
// //    //    title :'',
// //    //  //   image :'',
// //    //    description :'',
// //    //    price :'',
// //    //    qty :'',
    
     
 
// //    //  });

// //     const [image , setImage]= useState('');
// //     const [qty , setQty]= useState('');
// //     const [price , setPrice]= useState('');
// //     const [title , setTitle]= useState('');
// //     const [description , setDescription]= useState('');
// //     const [addedProduct, setAddedProduct] = useState(null);
// //     // const [image , setImage]= useState('');
// //     console.log(image);
// //     console.log(title,price,description,qty,image ,"PIUDFBJ")
  
      
// //     const handleTitle = (e) =>{
// //       setTitle(e.target.value)
// //     }

// //     const handleDesc = (e) =>{
// //       setDescription(e.target.value)
// //     }

// //     const handleQty = (e) =>{
// //       setQty(e.target.value)
// //     }

// //     const handlePrice = (e) =>{
// //       setPrice(e.target.value)
// //     }
// //    //  const handleInput = (event)=>{
// //    //      const { name , value}= event.target ;
// //    //       setData({...data ,[name] : value })
// //    //  }
     
    
   
        

// //      const  handleSubmit =(event) =>{
        
// //          event.preventDefault()
// //          const formData = new FormData()
// //          formData.append("title", title);
// //          formData.append("description", description);
// //          formData.append("price", price);
// //          formData.append("qty", qty);
// //          formData.append("image", image);
        
// //          // console.log(data);
// //          axios
// //         .post("http://localhost:4000/addProduct", formData, {
// //           headers: { "Content-Type": "multipart/form-data" },
// //         })
// //         .then((res) => {
// //           console.log(res.data, "Product Added");
// //           setAddedProduct(res.data); // Store the newly added product in state
// //         })
// //         .catch((err) => {
// //           console.error("Error adding product:", err);
// //         });
// //     }
         
     

// //     return ( 
// //       <div className="container p-5 m-5 text-center row" >
// //       <form onSubmit={handleSubmit} encType="multipart/form-data"    >
      
// //           <div className="col-10 offset-2">
// //           <h1 className='fs-4 '><b><i>Unleash your creativity—add a product that will turn heads and set trends!</i></b></h1>
       

// //          {/* <div className="col-8 title mb-4 ">
// //                <label htmlFor ="image" ><b>Image:</b></label> &nbsp;
// //                <input type='text' placeholder='Enter the image of product' name='image' style={{width:"90%"}}
// //                  onSubmit={handleInput} />
// //             </div> */}


// //             <div className="title mb-4 mt-5 col-8 ">
// //             <div className="d-inline-flex ">
// //                <label htmlFor="title"  className="form-label fs-5"><b>Title:</b></label> &nbsp;&nbsp;
// //                <input type='text' placeholder='Enter the title of the product' name='title'  
// //                onChange={handleTitle}  className='form-control ms-5 w-100'/>
// //             </div>
// //             </div>


// //             <div className=" description mb-4 col-8">
// //             <div className="d-inline-flex align-items-center">
// //                <label htmlFor="description" className="form-label fs-5"><b>Description:</b></label> 
// //                <textarea name='description' className='col-8 row-6 form-control ms-5' 
// //                  onChange={handleDesc} type="text" placeholder='Write the description' ></textarea>
// //                  </div>
// //             </div>

// //              <div className="image mb-4 mt-5 col-8 ">
// //             <div className="d-inline-flex ">
// //                <label htmlFor="image"  className="form-label fs-5"><b>Image:</b></label> &nbsp;&nbsp;
// //                <input type='text' placeholder='Enter the link of the product' name='image'   
// //                onChange={(e)=> setImage(e.target.value)}  className='form-control ms-5 w-100'/>
// //             </div>
// //             </div> 


          
             
// //              <div className="row m-4 p-2">
// //             <div className=" price mb-4 col-6 text-end">
// //             <div className="d-inline-flex ">
// //               <label htmlFor="price" className="form-label fs-5"><b>Price:</b> </label> 
// //               <input type='Number' placeholder='Enter price' name='price' style={{width:"50%"}}
// //                onChange={handlePrice} className='form-control ms-4 '/>
// //             </div>
// //             </div>

// //                <div className="col-6 mb-4 qty text-start">
// //                <div className="d-inline-flex ">
// //                   <label htmlFor='qty' className="form-label fs-5"><b>Quantity:</b></label>
// //                   <input type='Number' placeholder='Qty. of Product' name='qty' style={{width:"50%"}} className='form-control ms-4 ' 
// //                   onChange={handleQty} />
// //                </div>
// //                </div>

                

             
// //             </div>

           

// //             <div className="mb-3">
// //             <button className='btn btn-dark m-2 p-2' style={{width:"20%" }} type='submit' >
// //              <Link to ="/showProduct" style={{textDecoration:"none" , color:"white"}} >Add to shopping bag</Link>
// //              {/* <button type='submit'>Submit</button> */}
// //             </button>

           
// //           </div>
// //          </div>
      
// //       </form>
     
// //   </div>
// //      );
// // }

// // export default AddProduct;












// // -----------------------------------------------------------------------------------------------------


















// import React, { useState } from "react";
// import axios from "axios";
// import { Link  , useNavigate} from "react-router-dom";
// // import { method } from "../../../backend/Schemas/UserSchema";

// function AddProduct() {
//   // const [image, setImage] = useState("");
//   const [qty, setQty] = useState("");
//   const [price, setPrice] = useState("");
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [image ,setImage] = useState("");
//   const [category,setCategory] = useState("");
//   const [subCategory , setSubCategory] = useState("");
//   // const [sizes , setSizes] = useState("");
//   const [bestSeller , setBestSeller] = useState("");

//   const [addedProduct, setAddedProduct] = useState(null); // To store the added product

 


//     const navigate = useNavigate();

//     const handleFileChange = (event)=>{
//       const files = Array.from(event.target.files);

//     // Assume you're uploading to Cloudinary or any other service
//     const uploadedImages = files.map((file) => URL.createObjectURL(file)); // Replace this with actual upload logic
//     setImage((prevImages) => [...prevImages, ...uploadedImages]);

//     }

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("description", description);
//       formData.append("price", price);
//       formData.append("qty", qty);
//       formData.append("image", image);
//       formData.append("category", category);
//       formData.append("subCategory", subCategory);
//     //   formData.append("sizes", sizes);
//       formData.append("bestSeller", bestSeller);
  
//       axios
//   .post("http://localhost:4000/addProduct", formData)
//   .then((res) => {
   
//     console.log(res.data, "Product Added");
//     setAddedProduct(res.data);
//     // navigate("/li");
//   })
//   .catch((err) => {
//     console.error("Error adding product:", err);
//   });
// }
 
    
  

//   return (
//     <div className="constainer  p-5 m-5">
//        <form onSubmit={handleSubmit}>
//        <h1 className="fs-2 text-center " style={{fontWeight:"700"}}><i>Create and Conquer</i> </h1>
//         <div className="row offset-2">
           
//             <div className="col-8 mt-4">
//               <label htmlFor="title" className="form-label"><strong>Title:</strong></label>
//              <input type="text" name="title" className="form-control" placeholder="Enter the tilte for product" 
//              value={title} onChange={(e)=> setTitle(e.target.value)}
//              />
             
//             </div>

//             <div className="col-8 mt-4">
//               <label htmlFor="image" className="form-label"><strong>Description:</strong></label>
//              <textarea type="text" name="description" className="form-control" 
//               value={description} onChange={(e)=> setDescription(e.target.value)} >Enter the description of product</textarea>
//             </div>

//             <div className="col-8 mt-4">
//               <label htmlFor="image" className="form-label"><strong>Images:</strong></label>
//              <input type="file" name="image" className="form-control" placeholder="Link/URL of image"  />
//             </div>

//             <div className="col-8 mt-4">
//               <div className="row">
//                 <div className="col-6">
//                 <label htmlFor="qty" className="form-label"><strong>Quantity:</strong></label>
//              <input type="Number" name="qty" className="form-control" placeholder="Quantity"
//              value={qty} onChange={(e)=> setQty(e.target.value)}  />
//                 </div>
//                 <div className="col-6 ">
//                 <label htmlFor="price" className="form-label"><strong>Price:</strong></label>
//                 <input type="Number" name="price" className="form-control" placeholder="Price"
//                 value={price} onChange={(e)=> setPrice(e.target.value)}  />
//                 </div>
//               </div>
//             </div>

//             <div className="col-8 mt-4">
//               <div className="row">
//                 <div className="col-6">
//                 <label htmlFor="category" className="form-label"><strong>Category:</strong></label>
//              <input type="text" name="category" className="form-control" placeholder="Category" 
//              value={category} onChange={(e)=> setCategory(e.target.value)} />
//                 </div>
//                 <div className="col-6">
//                 <label htmlFor="subCategory" className="form-label"><strong>SubCategory:</strong></label>
//                 <input type="text" name="subCategory" className="form-control" placeholder="SubCategory" 
//                 value={subCategory} onChange={(e)=> setSubCategory(e.target.value)} />
//                 </div>
//               </div>
//             </div>

//             <div className="col-8 mt-4">
//               <label htmlFor="bestSeller" className="form-label"><strong>BestSeller:</strong></label>
//              <input type="text" name="bestSeller" className="form-control" placeholder="BestSeller" 
//              value={bestSeller} onChange={(e)=> setBestSeller(e.target.value)} />
//             </div>
         
            
//              <div className="col-8 mt-4">
//              <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
//                 <p className="mt-2"><strong>Sizes:</strong></p> &nbsp;
//               <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" />
//               <label class="btn btn-outline-dark" for="btncheck1">XS</label>
//               <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" />
//               <label class="btn btn-outline-dark" for="btncheck2">S</label>
//               <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" />
//               <label class="btn btn-outline-dark" for="btncheck3">M</label>
//               <input type="checkbox" class="btn-check" id="btncheck4" autocomplete="off" />
//               <label class="btn btn-outline-dark" for="btncheck4">L</label>
//               <input type="checkbox" class="btn-check" id="btncheck5" autocomplete="off" />
//               <label class="btn btn-outline-dark" for="btncheck5">XL</label>
//               <input type="checkbox" class="btn-check" id="btncheck6" autocomplete="off" />
//               <label class="btn btn-outline-dark" for="btncheck6">XXL</label>
              
  
//            </div>
//              </div>
           

           

//              <div className="col-8  mt-4">
//               <button className="btn btn-dark text-center" type="submit">Add</button>
//              </div>






//            </div>
//        </form>
//     </div>
//   );
// }

// export default AddProduct;











// // // 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222




import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    subCategory: "",
    // sizes: "",
    bestSeller: false,
    qty: "",
  });

  //  const [size , setSize] = useState(null);

   const handleSize = async(e)=>{
     e.preventDefault();
      
   }

  const [images, setImages] = useState({
    imageF: null,
    imageS: null,
    imageT: null,
    imageFourth: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setImages({
      ...images,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // let formattedSizes;
    // try {
    //   formattedSizes = JSON.parse(formData.sizes); // Convert from string to array
    // } catch (error) {
    //   alert("Invalid sizes format! Please enter a valid JSON array.");
    //   return;
    // }
  

    // Append form fields
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
      // data.append("sizes", JSON.stringify(formData.sizes.split(","))); // Converts "S,M,L" → ["S", "M", "L"]

    });

    // Object.keys(formData).forEach((key) => {
    //   if (key === "sizes") {
    //     data.append(key, JSON.stringify(formattedSizes)); // Ensure it's JSON
    //   } else {
    //     data.append(key, formData[key]);
    //   }
    // });
  

    // Append images
    Object.keys(images).forEach((key) => {
      if (images[key]) {
        data.append(key, images[key]);
      }
    });

    try {
        const result = localStorage.getItem("adminToken"); 
        console.log(result ,"token");
      const response = await axios.post("http://localhost:4000/addProduct", data, {
        headers: {
          "Content-Type": "multipart/form-data",
             Authorization: `Bearer ${result}`
        },
      });

      if (response.data.success) {
        alert("Product added successfully!");
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred while adding the product.");
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Sub-Category:</label>
          <input
            type="text"
            name="subCategory"
            value={formData.subCategory}
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <label>Sizes (JSON format):</label>
          <form onSubmit={handleSize}>
           <div className="btn">
           <button type="submit" class="btn btn-outline-secondary">XS</button>   
           <button type="submit" class="btn btn-outline-secondary">S</button>   
           <button type="submit" class="btn btn-outline-secondary">M</button>   
           <button type="submit" class="btn btn-outline-secondary">L</button>   
           <button type="submit" class="btn btn-outline-secondary">XL</button>   
           <button type="submit" class="btn btn-outline-secondary">XXL</button>   
           </div>
           </form> */}
        {/* </div> */}
        <div>
          <label>Best Seller:</label>
          <input
            type="checkbox"
            name="bestSeller"
            checked={formData.bestSeller}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Image 1:</label>
          <input type="file" name="imageF" onChange={handleFileChange} />
        </div>
        <div>
          <label>Image 2:</label>
          <input type="file" name="imageS" onChange={handleFileChange} />
        </div>
        <div>
          <label>Image 3:</label>
          <input type="file" name="imageT" onChange={handleFileChange} />
        </div>
        <div>
          <label>Image 4:</label>
          <input type="file" name="imageFourth" onChange={handleFileChange} />
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
