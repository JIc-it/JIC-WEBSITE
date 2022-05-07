import React, { useState } from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import { Context } from './common/Context';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ScrollTop from './components/ScrollTop/ScrollTop';
import About from './Views/About/About';
import Contact from './Views/Contact/Contact';
import Home from './Views/Home/Home';


const Router = () => {
    const [isModalOpen, setisModalOpen] = useState(false)
    const [IsMObile, setIsMObile] = useState(false)
    return (
        <Context.Provider value={{
            isModalOpen, setisModalOpen,
            IsMObile, setIsMObile,
        }}>
            <BrowserRouter>
                <ScrollTop />
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                </Routes>
                <Footer />
            </BrowserRouter>,
        </Context.Provider>
    )
}

export default Router