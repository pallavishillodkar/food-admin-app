import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../allcss/Orders.css";

function Orders() {
  const [Allorders, setAllorders] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/allorders")
      .then((result) => {
        setAllorders(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  return (
    <div className="top">
      <h2 style={{textAlign:"center"}}>Orders</h2>
      <Container>
        <Row className="row">
          {Allorders.map((order) => {
            return (
              <Col sm={12} md={9} lg={3}>
                <Card className="card-main">
                  <Card.Body className="body">
                    <Card.Text>Date: {order.OrderDate}</Card.Text>
                    <Card.Text>Status: {order.OrderStatus}</Card.Text>
                    <Card.Text>
                      Total Amount: {order.OrderTotalAmount}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <button className="button"
                      onClick={() =>
                        navigator("/OrderDetails", { state: order })
                      }
                    >
                      OrderDetails
                    </button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Orders;
