import React from "react";
import { Card } from "react-bootstrap";
import "../allcss/DashBoard.css";
import { BiFoodMenu } from "react-icons/bi";
import { FcContacts, FcCustomerSupport } from "react-icons/fc";
import { FaJediOrder } from "react-icons/fa6";
import { LuContact } from "react-icons/lu";
import { RiOrderPlayFill } from "react-icons/ri";
import { AiFillCustomerService } from "react-icons/ai";

function DashBoard() {
  return (
    <div style={{marginTop:'80px'}} className="dashboard">
    <div className="dash-container">
      <div className="dash-conent">
          <div className="title"><Card.Title>Food</Card.Title></div>
          <div className="text"><Card.Text>50</Card.Text></div>
          <BiFoodMenu/>
         </div>
      </div>
      <div className="dash-container-1">
      <div className="dash-conent">
          <Card.Title>Customer</Card.Title>
          <Card.Text>20</Card.Text>
          <AiFillCustomerService/>
         </div>
      </div>
      <div className="dash-container-2">
      <div className="dash-conent">
          <Card.Title>Contact</Card.Title>
          <Card.Text>30</Card.Text>
          <LuContact/>
         </div>
      </div>
      <div className="dash-container-3">
      <div className="dash-conent">
          <Card.Title>Order</Card.Title>
          <Card.Text>40</Card.Text>
          <RiOrderPlayFill/>
         </div>
      </div>
    </div>
  );
}

export default DashBoard;
