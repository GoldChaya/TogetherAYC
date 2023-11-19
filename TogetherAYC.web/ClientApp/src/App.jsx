import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AuthContextComponent, useAuth } from './AuthContext';
import Header from './Header';
import Home from './Pages/Home';
import Signup from './Pages/SignUp';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Donate from './Pages/Donate';
import PrivateRoute from './PrivateRoute';
import About from './Pages/About';
import Donations from './Pages/Donations';
import SubmitMitzvah from './Pages/SubmitMitzvah';
import MyDonations from './Pages/MyDonations';


class App extends React.Component {


    render() {
        return (
            <AuthContextComponent>
                <Header>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/signup' element={<Signup />} />
                        <Route exact path='/login' element={<Login />} />
                        <Route exact path='/about' element={<About />} />
                        <Route exact path='/logout' element={<PrivateRoute><Logout /></PrivateRoute>} />
                        <Route exact path='/Donate' element={ <PrivateRoute><Donate /> </PrivateRoute>} />
                        <Route exact path = '/Donations' element={<Donations/>}/>
                        <Route exact path='/SubmitMitzvah' element={<PrivateRoute><SubmitMitzvah/></PrivateRoute>}/>
                        <Route exact path='/MyDonations' element={<PrivateRoute><MyDonations/></PrivateRoute>}/>
                    </Routes>
                </Header>
            </AuthContextComponent>
        );
    }
};

export default App;


