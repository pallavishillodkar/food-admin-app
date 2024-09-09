import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Modal, Row } from "react-bootstrap";
import "../allcss/CustomerList.css";

function CustomerList() {
  const [allcustomer, setallcustomer] = useState([]);

  // const [foodprice, setfoodprice] = useState(0);
  const [selectedCustomer, setselectedCustomer] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api//allcustomers")
      .then((result) => {
        setallcustomer(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // delete
  const Deletecustomer = async () => {
    const deletecustomer = {
      customerid: selectedCustomer._id,
    };
    axios
      .delete("http://localhost:5000/api/deletecustomer", {
        data: deletecustomer,
      })
      .then((result) => {
        alert("customer Delete Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Delete
  const [ShowDelete, setShowDelete] = useState(false);

  const onShowDelete = () => {
    setShowDelete(true);
  };
  const onHideDelete = () => {
    setShowDelete(false);
  };

  return (
    <div className="list">
      <Container>
        <Row>
          {allcustomer.map((customer) => {
            return (
              <Col sm={12} md={9} lg={3}>
                <Card className="all-card">
                  {/* <img className='card-image' src={`http://localhost:5000${food.FoodImage}`} /> */}
                  <h6 className="all-h6">{customer.CustomerName}</h6>
                  {/* <h6>{food.FoodType}</h6> */}
                  <h6 className="all-h6">{customer.CustomerMoNo}</h6>
                  <h6 className="all-h6">{customer.CustomerAddress}</h6>
                  {/* <h6>{food.IsAvailable}</h6> */}

                  <Card.Footer>
                    <button
                      className="all-delete"
                      onClick={() => {
                        setselectedCustomer(customer);
                        onShowDelete();
                      }}
                    >
                      Delete
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Delete */}

      <Modal show={ShowDelete} onHide={onHideDelete}>
        <Modal.Header closeButton>Delete Customer</Modal.Header>
        <Modal.Body>
          <h4>Are you sure you want to delete this Customer?</h4>
          <Modal.Footer>
            <button onClick={() => Deletecustomer()}>OK</button>
            <button onClick={()=>setselectedCustomer(false)}>Cancel</button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CustomerList;
