import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    // subCategory: "",
    // sizes: "",
    bestSeller: false,
    // qty: "",
  });

  //  const [size , setSize] = useState(null);

  

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
        {/* <div>
          <label>Sub-Category:</label>
          <input
            type="text"
            name="subCategory"
            value={formData.subCategory}
            onChange={handleChange}
          />
        </div> */}
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
        {/* <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
            required
          />
        </div> */}

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