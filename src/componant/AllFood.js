import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Modal, Form } from "react-bootstrap";
import '../allcss/AllFood.css'

function AllFood() {
  const [allfood, setallfood] = useState([]);

  const [foodprice, setfoodprice] = useState(0);
  const [selectedFood, setselectedFood] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/allfoods")
      .then((result) => {
        setallfood(result.data)
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // delete
  const Deletefood = async () => {
    const deleteitem = {
      foodid: selectedFood._id,
    };
    axios.delete("http://localhost:5000/api/deletefood", { data: deleteitem })
      .then((result) => {
        alert("Food Item Delete Successfully");
      }).catch((error) => {
        console.log(error);
      })
  };

  //update
  const Update = () => {
    const updateitem = {
      foodid: selectedFood._id,
      FoodPrice: Number(foodprice)
    };
    axios
    .post("http://localhost:5000/api/updatefood", updateitem)
      .then((result) => {
        alert("Update changes!");
        setShowUpdate(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //update
  const [ShowUpdate, setShowUpdate] = useState(false);
  const onShowUpdate = () => {
    setShowUpdate(true);
  };
  const onHideUpdate = () => {
    setShowUpdate(false);
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
    <div>
      <Container>
        <Row>
          {allfood.map((food) => {
            return (
              <Col sm={12} md={9} lg={3}>
                <Card className='all-card'>
                  <img className='card-image' src={`http://localhost:5000${food.FoodImage}`} />
                  <h6 className='all-h6'>{food.FoodName}</h6>
                  {/* <h6>{food.FoodType}</h6> */}
                  {/* <h6 className='all-h6'>{food.FoodCategory}</h6> */}
                  <h6 className='all-h6'>{food.FoodPrice}</h6>
                  {/* <h6>{food.IsAvailable}</h6> */}

                  <Card.Footer>
                  <button className='all-delete'
                    onClick={() => {
                      setselectedFood(food);
                      onShowDelete();
                    }}
                  >Delete</button>

                  <button className='all-update'
                    onClick={() => {
                      setselectedFood(food);
                      onShowUpdate();
                    }}
                  >Update</button>
                </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Modal show={ShowUpdate}
        onHide={onHideUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update FoodPrice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container>
              <Form.Control onChange={(e) => setfoodprice(e.target.value)}
                type="number" placeholder="Enter Price" />
            </Container>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <button onClick={() => Update()}>OK</button>
          <button onClick={onHideUpdate}>Cancel</button>
        </Modal.Footer>
      </Modal>

      {/* Delete */}

      <Modal show={ShowDelete} onHide={onHideDelete}>
        <Modal.Header closeButton>Delete Food</Modal.Header>
        <Modal.Body>
          <h4>Are you sure you want to delete this account?</h4>
          <Modal.Footer>
            <button onClick={() => Deletefood()}>OK</button>
            <button onClick={onHideDelete}>Cancel</button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AllFood;