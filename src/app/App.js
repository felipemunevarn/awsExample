import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from '../components/NavBar.jsx';
import Form from '../components/Form.jsx';
import Table from '../components/Table.jsx';

export default function App() {
    
    return (
		<>
            <BrowserRouter>
                
                <NavBar />
                <br></br>
                <Routes>
                    <Route path="/" element={
                        <div className="row">
                            <Form />
                            <Table /> 
                        </div>
                        
					} />				      
                    
                </Routes>
				
                {/* <Footer /> */}

			</BrowserRouter>
        </>
    )
}