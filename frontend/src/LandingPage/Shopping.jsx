import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  //  const {productId} = useParams();
  const navigate = useNavigate();

  //  console.log(id);
  // const prodid = carts.map( (cart)=>cart._id)
  // console.log(prodid);
  const [carts, setCarts] = useState([]);
  const [count, setCount] = useState(0);
  // const [sizes, setSizes] = useState([]);
  // const [qty , setQty] = useState(0);
  const [cartT, setCarT] = useState(0);
  const [remove, setRemove] = useState(null);
  // const [sizeQtyDetails, setSizeQtyDetails] = useState({});

  useEffect(() => {
    const fetchCartData = async () => {
<<<<<<< HEAD
      try {
        const result = await axios.get(
          `https://cooltrendyvogue.onrender.com/cart`,
          { withCredentials: true }
        );
        const result1 = await axios.get(
          "https://cooltrendyvogue.onrender.com/cart/count",
          { withCredentials: true }
        );
        const result2 = await axios.get(
          "https://cooltrendyvogue.onrender.com/cart/tp",
          { withCredentials: true }
        );
=======
     try{
        const result = await axios.get(`http://localhost:4000/cart`);
        const result1 = await axios.get('http://localhost:4000/cart/count');
        const result2 = await axios.get('http://localhost:4000/cart/tp');
>>>>>>> 2fb6be762aacb9269b29b4102b51af8bf6ba5280
        console.log(result.data.message);
        setCarts(result.data.message);
        setCarT(result2.data.message);
        setCount(result1.data.message);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCartData();
  }, []);

  const handleDelete = async (id) => {
    // const ti = carts.map((cart)=> {cart.title});
    // console.log(ti ,"447");
    try {
<<<<<<< HEAD
      const response = await axios.delete(
        `https://cooltrendyvogue.onrender.com/cart/delete/${id}`,
        {
          data: { id },
        },
        { withCredentials: true }
      );

=======
      const response = await axios.delete(`http://localhost:4000/cart/delete/${id}`, {
        data: {id},
      });
         
>>>>>>> 2fb6be762aacb9269b29b4102b51af8bf6ba5280
      const data = await response.json();
      if (response.data.success) {
        setRemove(carts.filter((item) => item.id !== id));
        // alert("Item deleted successfully");
      } else {
        alert("Failed to delete item:", data.message);
      }
    } catch (error) {
      alert("Product deleted successfully.");
    }
  };

  return (
    <div className="contain">
      <h1
        className="text-center fs-2 p-2 m-5"
        style={{ textDecoration: "underline" }}
      >
        <i>
          TRACK <span style={{ color: "#A3567A" }}>MY ORDER</span>
        </i>
      </h1>
      {carts.length === 0 ? (
        <div className="text-center mt-5">
          <h2 className="text-muted">🛍️ Your cart is empty</h2>
          <p>Add items to your cart to continue shopping!</p>
          <button className="btn btn-dark mt-3" onClick={() => navigate("/")}>
            Shop Now
          </button>
        </div>
      ) : (
        <>
          <div className="details">
            <div
              className="row"
              style={{ backgroundColor: "white", alignItems: "center" }}
            >
              <hr />
              <div className="col-10">
                <strong className="m-5 p-2">
                  ITEM(S): &nbsp; <span style={{ color: "red" }}>{count}</span>
                </strong>
              </div>
              <div className="col-2 text-end">
                <p className="mt-2 me-5 p-2">
                  <strong>
                    TOTAL: &nbsp;{" "}
                    <span style={{ color: "green" }}>&#8377;{cartT}</span>
                  </strong>
                </p>
              </div>
              <hr />
              <div className="display-details">
                <div className="col-5 text-center mb-5">
                  <div
                    className="card"
                    style={{
                      width: "800px",
                      marginLeft: "380px",
                      backgroundColor: "#F8E7F6",
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">PRICE DETAILS</h5>
                      <hr />
                      <p className="card-text">
                        Sub-total of {count} item
                        <strong className="mx-5 px-5 text-sm-end">
                          &#8377;{cartT}
                        </strong>
                      </p>
                      <br />
                      <p>
                        DELIVERY CHARGES{" "}
                        <strong
                          className="mx-5 px-5"
                          style={{ color: "green" }}
                        >
                          Free Delivery
                        </strong>
                      </p>
                      <hr />
                      <p>
                        TOTAL AMOUNT
                        <strong
                          className="mx-5 px-5"
                          style={{ color: "black" }}
                        >
                          &#8377;{cartT}
                        </strong>
                      </p>
                      <hr />

                      <button
                        className="btn btn-dark"
                        onClick={() => navigate("/placeorder")}
                      >
                        Proceed to pay{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            {carts.map((cart) => (
              <div className="container-lg  mb-5" key={cart._id}>
                <div
                  className="d-flex gap-4 justify-content-between w-full"
                  style={{ backgroundColor: "white", maxWidth: "100%" }}
                >
                  <div className=" mt-2">
                    <p>
                      <b>PRODUCT</b>
                    </p>
                    <div className="d-flex text-muted">
                      <div className="">
                        <img
                          src={cart.image[0]}
                          alt="Product picture"
                          className="object-fit-fill"
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className=" ">
                    <p className="mb-0">
                      <b>Name</b>
                    </p>
                    <div className="d-flex h-100  align-items-center ">
                      <h1 className="fs-5">{cart.title}</h1>
                    </div>
                  </div>

                  <div className=" ">
                    <p className="mb-0">
                      <b>Sizes</b>
                    </p>
                    <div className="d-flex gap-3 h-100 align-items-center   text-center">
                      <div>
                        {cart.sizes.map((s, idx) => (
                          <p key={idx}>
                            <strong>{s.size}</strong>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className=" ">
                    <p className="mb-0">
                      <b>PRICE</b>
                    </p>
                    <div className="d-flex h-100  align-items-center ">
                      <strong>&#8377;{cart.price} </strong>
                    </div>
                  </div>

                  <div className=" ">
                    <p className="mb-0">
                      <b>Quantity</b>
                    </p>
                    <div className="d-flex h-100  align-items-center ">
                      {cart.sizes.map((q, idx) => (
                        <p key={idx}>
                          <strong>{q.qty}</strong>
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className=" text-end mt-5 pt-2"></div>

                  <div className=" ">
                    <p className="mb-0 opacity-0">
                      <b>Name</b>
                    </p>
                    <div className="d-flex h-100  align-items-center ">
                      <button
                        className="btn btn-dark"
                        onClick={() => handleDelete(cart._id)}
                        value={remove}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
