import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import {Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News} from './components';
import './App.css'

const App = () => {
    return (
       
        <div className='app'>
        <div className='navbar'>
        <Navbar />
        </div>
        <div className='main'>
<Layout>
    <div className='routes'>
<Routes>
    <Route exact path='/' element={<Homepage />}></Route>
    <Route exact path='/exchanges'  element={<Exchanges />}></Route>
    <Route exact path='/cryptocurrencies'  element={<Cryptocurrencies />}></Route>
    <Route exact path='/coinDetails/:uuid'  element={<CryptoDetails />}></Route>
    <Route exact path='/news' element={<News/>}></Route>
</Routes>
    </div>
</Layout>
    
        <div className='footer'> 
<Typography level={5} style={{color: 'white', textAlign: 'center'}}>
    CryptoXex  <br />
    All right reserved
</Typography>
<Space>
    <Link to='/'>Home</Link>
    <Link to='/exchanges'>Exchanges</Link>
    <Link to='/news'>News</Link>
</Space>
        </div>
        </div>
        </div>
    )
}

export default App
