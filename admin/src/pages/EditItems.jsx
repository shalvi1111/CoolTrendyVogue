import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";


function EditItems() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); 
  const [imagePreviews, setImagePreviews] = useState({});
  const [product, setProduct] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    bestSeller: false,
    imageF: "",
    imageS: "",
    imageT: "",
    imageFourth: "",
  });

  
  useEffect(() => {
    axios
      .get(`http://localhost:4000/productDetail/${id}`)
      .then((res) => {
        setProduct(res.data); 
        setLoading(false);  
    })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (files) {
        const file = files[0];
        setProduct((prev) => ({ ...prev, [name]: file }));
        setImagePreviews((prev) => ({
          ...prev,
          [name]: URL.createObjectURL(file),
        }));
      } else{
    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    }));
}
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/edit/${id}`, product);
      alert("Product updated successfully!");
        navigate("/listProduct");
    } catch (error) {
      console.error(error);
      alert("Failed to update product.");
    }
  };

  return (
    <div className="container m-5">
      <div className="row">
        <div className="col-6">
          <h1 className="fs-4 mb-2" style={{ textDecoration: "underline" }}>
            <i>
              <b>The future, delivered today.</b>
            </i>
          </h1>
          <form
            style={{ width: "500px" }}
            className="needs-validation"
            noValidate
            onSubmit={handleSubmit}
          >
            {/* Title */}
            <div className="col md-4">
              <label className="form-label" htmlFor="title">
                <b>Title:</b>
              </label>
              <input
                type="text"
                name="title"
                className="form-control is-valid"
                value={product.title}
                onChange={handleChange}
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="form-label" htmlFor="category">
                <b>Category:</b>
              </label>
              <input
                type="text"
                name="category"
                className="form-control is-valid"
                value={product.category}
                onChange={handleChange}
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="form-label" htmlFor="description">
                <b>Description:</b>
              </label>
              <textarea
                name="description"
                className="form-control is-valid"
                value={product.description}
                onChange={handleChange}
                required
              />
            </div>

            {/* Price */}
            <div>
              <label className="form-label" htmlFor="price">
                <b>Price:</b>
              </label>
              <input
                type="number"
                name="price"
                className="form-control is-valid"
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>

            {/* Best Seller */}
            <div className="form-check">
              <label className="form-check-label" htmlFor="bestSeller">
                <b>Best Seller:</b>
              </label>
              <input
                type="checkbox"
                name="bestSeller"
                className="form-check-input"
                checked={product.bestSeller}
                onChange={handleChange}
              />
            </div>

            {/* Image Uploads */}
            <div>
              <label className="form-label" htmlFor="imageF">
                <b>Image 1:</b>
              </label>
              <input type="file" name="imageF" className="form-control" onChange={handleChange} />
              {product.imageF && <img src={product.imageF} alt="Preview" width="100" />}
            </div>
            <div>
              <label className="form-label" htmlFor="imageS">
                <b>Image 2:</b>
              </label>
              <input type="file" name="imageS" className="form-control" onChange={handleChange} />
              {product.imageS && <img src={product.imageS} alt="Preview" width="100" />}
            </div>
            <div>
              <label className="form-label" htmlFor="imageT">
                <b>Image 3:</b>
              </label>
              <input type="file" name="imageT" className="form-control" onChange={handleChange} />
              {product.imageT && <img src={product.imageT} alt="Preview" width="100" />}
            </div>
            <div>
              <label className="form-label" htmlFor="imageFourth">
                <b>Image 4:</b>
              </label>
              <input type="file" name="imageFourth" className="form-control" onChange={handleChange} />
              {product.imageFourth && <img src={product.imageFourth} alt="Preview" width="100" />}
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-dark mt-4">
              Update Product
            </button>
          </form>
        </div>

        {/* Image Display */}
        <div className="col-4 m-2 p-2 text-center">
          <img
            src="../assets/images/BrandLogo.png"
            alt="Signup"
            style={{ width: "100%", height: "500px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default EditItems;
