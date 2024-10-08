
// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonList from './components/PersonList';
import PersonDetail from './components/PersonDetail';
import PersonAdd from './components/PersonAdd';
import PersonEdit from './components/PersonEdit';
import './App.css'; // Parent styles

const App = () => {
    return (
        <Router>
            <div className="box-container">
                <Routes>
                    <Route path="/" element={<PersonList />} />(The Route component defines a specific route in your app. When the URL matches the path specified, it renders the component passed to the element prop.)
                    <Route path="/add" element={<PersonAdd />} />
                    <Route path="/edit/:id" element={<PersonEdit />} />
                    <Route path="/person/:id" element={<PersonDetail />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
