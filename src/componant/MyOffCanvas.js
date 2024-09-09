import React, { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { AiFillCustomerService, AiOutlineBars } from "react-icons/ai";
import { MdBorderColor, MdDashboard, MdDoneAll } from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';
import { FcViewDetails } from 'react-icons/fc';


const MyOffCanvas = () => {
    const [isShow, setisShow] = useState(false)

    const handleShow = () => setisShow(true)
    const handleHide = () => setisShow(false)
    return (
        <div>
            <Navbar collapseOnSelect variant='dark' bg='dark' expand='md'>
                <Container>
                    <Navbar.Brand>
                        <AiOutlineBars onClick={() => handleShow()} size={30} />
                        Food</Navbar.Brand>
                </Container>
            </Navbar>

            <Offcanvas show={isShow} onHide={handleHide}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menus</Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Nav className='flex-column'>
                        <Nav.Link onClick={() => handleHide()}>
                            <Link className='mlink' to='/'>
                               <MdDashboard/> DashBoard</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handleHide()}>
                            <Link className='mlink' to='/addfood'>
                               <GrAdd/> AddFood</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handleHide()}>
                            <Link className='mlink' to='/allfood'>
                                <MdDoneAll/> AllFood</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handleHide()}>
                            <Link className='mlink' to='/orders'>
                                <MdBorderColor/> Orders</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handleHide()}>
                            <Link className='mlink' to='/customerlist'>
                            <AiFillCustomerService/> CustomerList</Link>
                        </Nav.Link>
                    </Nav>

                </Offcanvas.Body>
            </Offcanvas>

        </div>
    )
}

export default MyOffCanvas