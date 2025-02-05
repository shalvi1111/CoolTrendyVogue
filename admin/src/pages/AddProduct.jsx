import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    bestSeller: false,
    
  });

  

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

    
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
      

    });

 
  

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
    <div className="container m-5 ">
      <h1 className="fs-4 mb-2" style={{textDecoration:"underline"}}><i><b>The future, delivered today.</b></i></h1>
      <form onSubmit={handleSubmit} style={{width:"500px"}}>
        <div>
          <label className="form-label" htmlFor="title"><b>Title:</b></label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div>
          <label className="form-label" htmlFor="title"><b>Category:</b></label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div>
          <label className="form-label" htmlFor="description"><b>Description:</b></label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
             className="form-control"
            required
          />
        </div>
        <div>
          <label className="form-label" htmlFor="price"><b>Price:</b></label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
       
        <div class="form-check">
          <label className="form-check-label" htmlFor="bestSeller" ><b>Best Seller:</b></label>
          <input
            type="checkbox"
            name="bestSeller"
            checked={formData.bestSeller}
            onChange={handleChange}
            className="form-check-input"
          />
        </div>
      

        <div>
          <label className="form-label" htmlFor="imageF"><b>Image 1:</b></label>
          <input type="file" name="imageF" className="form-control" onChange={handleFileChange} />
        </div>
        <div>
          <label className="form-label" htmlFor="imageS"><b>Image 2:</b></label>
          <input type="file" name="imageS" className="form-control" onChange={handleFileChange} />
        </div>
        <div>
          <label className="form-label" htmlFor="imageT"><b>Image 3:</b></label>
          <input type="file" name="imageT" className="form-control" onChange={handleFileChange} />
        </div>
        <div>
          <label className="form-label" htmlFor="imageFourth"><b>Image 4:</b></label>
          <input type="file" name="imageFourth" className="form-control" onChange={handleFileChange} />
        </div>

        <button type="submit" className="btn btn-dark mt-4">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;