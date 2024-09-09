import React, { useState } from 'react'
import "../allcss/AddFood.css";
import { Container, Form } from 'react-bootstrap';
import axios from 'axios';

const AddFood = () => {
  const [foods, setfoods] = useState([]);

  const [FoodName, setFoodName] = useState("");
  const [FoodType, setFoodType] = useState("");
  const [FoodCategory, setFoodcategory] = useState("");
  const [FoodPrice, setFoodPrice] = useState(0);
  const [FoodImage, setFoodImage] = useState("");
  const [IsAvailable, setIsAvailable] = useState("");

  const addData = () => {
    const addFood = {
      FoodName: FoodName,
      FoodType: FoodType,
      FoodCategory: FoodCategory,
      FoodImage: FoodImage,
      FoodPrice: Number(FoodPrice),
      IsAvailable: Boolean(IsAvailable)
    };
    axios.
      post("http://localhost:5000/api/addfood", addFood)
      .then((result) => {
        setfoods(result.data)
        alert("Food Added..");
      })
      .catch((error) => {
        console.log(error)
      })
  }

  //Upload Image
  async function uploadImage(e) {
    const imgData = new FormData();
    imgData.append("image", e.target.files[0]);
    axios
      .post("http://localhost:5000/uploadfiles", imgData)
      .then((res) => {
        console.log("Responce:", res.data);
        setFoodImage(res.data.filepath);
      }).catch((err) => {
        console.log("Error:", err);
      });
  }

  return (
    <div className='food-div'>
      <div className='food-s-div'></div>
      <div className='food-t-div'>
        <Container fluid className='AddFood-Container input'>

          <div className='form-div'>
            <Form className='addfoodform'
              onSubmit={(e) => {
                e.preventDefault();
                addData();
              }}
            >
              <Form.Group>
                <Form.Label>FoodName</Form.Label>
                <Form.Control
                  type='FoodName'
                  placeholder='Enter Food Name'
                  onChange={(e) => setFoodName(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>FoodType</Form.Label>
                <Form.Control
                  type='FoodType'
                  placeholder='Enter Food Type'
                  onChange={(e) => setFoodType(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>FoodCategory</Form.Label>
                <Form.Control
                  type='Foodcategory'
                  placeholder='Enter Food Category'
                  onChange={(e) => setFoodcategory(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>FoodPrice</Form.Label>
                <Form.Control
                  type='Price'
                  placeholder='Enter Food Price'
                  onChange={(e) => setFoodPrice(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Select File:</Form.Label>
                <Form.Control
                  type='file'
                  placeholder='Select File'
                  onChange={uploadImage}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>IsAvailable</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='IsAvailable'
                  onChange={(e) => setIsAvailable(e.target.value)}
                />
              </Form.Group>
              <div className='btnbox'>
                <button className='btn1'
                // onClick={() => addData()}
                >Ok</button></div>
            </Form>


          </div>
        </Container>
      </div>
    </div>
  )
}

export default AddFood