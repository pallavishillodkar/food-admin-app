import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashBoard from './componant/DashBoard'
import AddFood from './componant/AddFood'
import AllFood from './componant/AllFood'
import Orders from './componant/Orders'
import CustomerList from './componant/CustomerList'
import MyOffCanvas from './componant/MyOffCanvas'
import OrderDetails from './componant/OrderDetails'


function MyRoutes() {
    return (
        <div>
            <Router>
                <MyOffCanvas />
                <Routes>
                    <Route path='/' element={<DashBoard />} />
                    <Route path='/AddFood' element={<AddFood />} />
                    <Route path='/AllFood' element={<AllFood />} />
                    <Route path='/Orders' element={<Orders />} />
                    <Route path='/OrderDetails' element={<OrderDetails />} />
                    <Route path='/CustomerList' element={<CustomerList />} />

                </Routes>
            </Router>
        </div>
    )
}

export default MyRoutes