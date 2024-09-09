import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import '../allcss/OrderDetails.css';
const OrderDetails = () => {
  // useLocation
  const orderData = useLocation().state;
  const [order, setorder] = useState([]);

  // Update
  const [selectedStatus, setselectedStatus] = useState("Pending");

  // useEffect
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/orderbyid", {
        orderid: orderData._id,
      })
      .then((result) => {
        setorder(result.data);
        console.log("order", result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // update
  const doUpdate = () => {
    let foodUpdate = {
      orderid: orderData._id,
      OrderStatus: selectedStatus,
    };
    console.log(foodUpdate);
    axios
      .put("http://localhost:5000/api/updateorder", foodUpdate)
      .then((result) => {
        // console.log("DATA" , result.data);
        console.log(result);
        alert("Order Status Update");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>OrderDetails</h2>
      <p>{orderData._id}</p>
      <div>
        <h4>Date: {order.OrderDate}</h4>
        <h4>Status: {order.OrderStatus}</h4>
        <h4>Total Amount: {order.OrderTotalAmount}</h4>
      </div>
      <div>
        <Form.Check
          type="radio"
          onChange={(e) => setselectedStatus(e.target.value)}
          label="Preparing"
          value="Preparing"
          name="status"
          inline
        ></Form.Check>

        <Form.Check
          type="radio"
          onChange={(e) => setselectedStatus(e.target.value)}
          label="Dispatch"
          value="Dispatch"
          name="status"
          inline
        ></Form.Check>

        <Form.Check
          type="radio"
          onChange={(e) => setselectedStatus(e.target.value)}
          label="intransit"
          value="intransit"
          name="status"
          inline
        ></Form.Check>

        <Form.Check
          type="radio"
          onChange={(e) => setselectedStatus(e.target.value)}
          label="Deliever"
          value="Deliever"
          name="status"
          inline
        ></Form.Check>

        <Form.Check
          type="radio"
          onChange={(e) => setselectedStatus(e.target.value)}
          label="Cancel"
          value="Cancel"
          name="status"
          inline
        ></Form.Check>

        <span>
          <button className="orderdetails-button" onClick={() => doUpdate()}>
            Update Status
          </button>
        </span>
      </div>
       <div>
        <h6>Customer Name:{orderData?.CustId?.CustomerName}</h6>
        <h6>Customer Email:{orderData?.CustId?.CustomerEmail}</h6>
        <h6>Customer Mobile No:{orderData?.CustId?.CustomerMoNo}</h6>
       </div>

       <div>
        {orderData.FoodItems.map((order) => {
        return(
          <div>
            <Card 
            className = "Orderdetails-card">
              <Card.Body
              className = "orderdetails-body">
                <Card.Img
                className = "orderdetails-img"
                src={`http://localhost:5000${order.FoodId.FoodImage}`}/>
                <div className="orderdetails-div">
                  <p className="orderdetails-p">Quantity:{order.Qty}</p>
                  <p className="orderdetails-p">Name:{order.FoodId.FoodName}</p>
                  <p className="orderdetails-p">Price:{order.FoodId.FoodPrice}</p>
                  </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
       </div>
    </div>
  );
};

export default OrderDetails;
